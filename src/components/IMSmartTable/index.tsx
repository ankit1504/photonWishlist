import React, { FunctionComponent, useEffect, useMemo, useState } from "react";

import {
  IIMPaginationProps,
  IMCheckBox,
  IMPagination,
  IMResponse,
  IMResponseProps,
} from "@infra-market/im-web-components";
import { CheckBoxItem } from "@infra-market/im-web-components/dist/esm/components/IMCheckBox";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  TableContainer,
  TableFooter,
  TableSortLabel,
  Box,
  TextField,
} from "@mui/material";
import clsx from "clsx";

import AccessDenied from "../../assets/svg/AccessDenied";
import EmptyBox from "../../assets/svg/EmptyBox";
import useStyles from "./styles";

export enum ColumnAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export type IMSmartTableClassType = {
  tableContainer?: string;
  tableHeader?: string;
  tableBody?: string;
  tableDataRow?: string;
  tableSelectedRow?: string;
};

type SmartTableHeaderClassType = {
  column?: string;
  header?: string;
  searchInput?: string;
};

export type IMSmartTableHeaderColumnType = {
  columnHeader: React.ReactNode;
  columnKey: string;
  columnId?: string;
  minWidth?: string;
  isSearchInputDisable?: boolean;
  showSearchInput?: boolean;
  align?: ColumnAlign;
  headerAlign?: ColumnAlign;
  classes?: SmartTableHeaderClassType;
  sort?: (columnId: string, order: "asc" | "desc") => void;
  orderby?: "asc" | "desc";
};

export interface IMSmartTableRowInterface {
  id: string;
  [key: string]: string | number | React.ReactNode;
  selected?: boolean;
}

export interface IIMSmartTable {
  columns: Array<IMSmartTableHeaderColumnType>;
  data: Array<IMSmartTableRowInterface>;
  searchTerms?: IMSmartTableRowInterface;
  setSearchTerms?: (value: any) => void;
  onSelectRow?: (row: IMSmartTableRowInterface) => void;
  isSelectable?: boolean;
  smartTableId?: string;
  classes?: IMSmartTableClassType;
  paginationProps?: IIMPaginationProps;
  showPagination?: boolean;
  noDataInfo?: IMResponseProps;
  isMultiSelectable?: boolean;
  onMultiSelectRow?: (selectedRows: string[]) => void;
  showHelperItem?: boolean;
  isError?: boolean;
  errorDataInfo?: IMResponseProps;
}

const IMSmartTable: FunctionComponent<IIMSmartTable> = (props) => {
  const classes = useStyles();
  const tableId = `IMSmartTable-${props.smartTableId ?? "smart-table-id"}`;

  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleHeaderCheckbox = () => setSelectAll((state) => !state);

  const checkBoxArray: IMSmartTableHeaderColumnType[] = [
    {
      columnHeader:
        <Box
          className={classes.checkBoxContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <IMCheckBox
            id="tableHeader-checkbox"
            name="checkbox"
            selected={selectAll}
            selectionItem={{ id: "tableHeader-checkbox", label: "" } as CheckBoxItem}
            onChange={toggleHeaderCheckbox}
            onBlur={() => {}}
          />
        </Box>,
      columnId: "checkBox",
      columnKey: "checkBox",
    },
  ];

  useEffect(() => {
    if (props.onMultiSelectRow) {
      props.onMultiSelectRow(selectedRows);
    }
    if (selectedRows.length) {
      setSelectAll(props.data.length === selectedRows.length);
    }
  }, [selectedRows]);

  useEffect(() => {
    if (selectAll) {
      setSelectedRows(props.data.map((item) => item.id));
    } else {
      if (props.data.length === selectedRows.length) {
        setSelectedRows([]);
      }
    }
  }, [selectAll]);

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    columnName: string
  ) => {
    props.setSearchTerms?.((prevSearchTerms: IMSmartTableRowInterface) => ({
      ...prevSearchTerms,
      [columnName]: event.target.value,
    }));
  };

  const handleRowSelect = (rowId: string) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(rowId)) {
        return prevSelectedRows.filter((selectedId) => selectedId !== rowId);
      } else {
        return [...prevSelectedRows, rowId];
      }
    });
  };

  const tableHeader = useMemo(
    () =>
      [
        ...(props.isMultiSelectable ? checkBoxArray : []),
        ...props.columns,
      ]?.map((column, index) => (
        <TableCell
          className={clsx(classes.headerCell, props.isMultiSelectable && classes.multiSelectHeaderCell, column.classes?.header)}
          key={column.columnId ?? index}
          align={column.headerAlign ?? ColumnAlign.LEFT}
        >
          {column.sort ? (
            <TableSortLabel
              active={column.orderby === "asc" || column.orderby === "desc"}
              direction={column.orderby ?? "asc"}
              onClick={() =>
                column.sort?.(
                  column.columnId ?? "",
                  column.orderby === "asc" ? "desc" : "asc"
                )
              }
            >
              {column.columnHeader}
            </TableSortLabel>
          ) : (
            column.columnHeader
          )}
          {column.showSearchInput && (
            <TextField
              id={`${props.smartTableId}-search-${column.columnKey}`}
              variant="outlined"
              disabled={column.isSearchInputDisable}
              value={props.searchTerms?.[column.columnKey] ?? ""}
              onChange={(event) => handleSearch(event, column.columnKey)}
              InputProps={{
                classes: { input: classes.input },
              }}
              classes={{
                root: clsx(classes.searchInput, column.classes?.searchInput),
              }}
            />
          )}
        </TableCell>
      )),
    [props.columns, props.isMultiSelectable, selectAll]
  );

  const renderNoDataInfo = () => {
    return (
      <Box>
        <IMResponse
          classes={props.noDataInfo?.classes}
          image={props.noDataInfo?.image ?? EmptyBox}
          title={props.noDataInfo?.title ?? "No data found"}
          subTitle={props.noDataInfo?.subTitle}
          primaryButton={props.noDataInfo?.primaryButton}
          secondaryButton={props.noDataInfo?.secondaryButton}
        />
      </Box>
    );
  };

  const renderErrorView = () => {
    return (
      <Box>
        <IMResponse
          classes={{
            ...props.errorDataInfo?.classes,
            title: clsx(
              classes.errorTitle,
              props.errorDataInfo?.classes?.title
            ),
            subTitle: clsx(
              classes.errorSubtitle,
              props.errorDataInfo?.classes?.subTitle
            ),
          }}
          image={props.errorDataInfo?.image ?? AccessDenied}
          title={
            props.errorDataInfo?.title ??
            "Display requests could not be fetched."
          }
          subTitle={
            props.errorDataInfo?.subTitle ??
            "Please refresh the page and try again."
          }
          primaryButton={props.errorDataInfo?.primaryButton}
          secondaryButton={props.errorDataInfo?.secondaryButton}
        />
      </Box>
    );
  };

  const tableRows = useMemo(
    () =>
      props.data.map((rowData, rowIndex) => (
        <>
          <TableRow
            key={rowData.id}
            id={`${tableId}-${rowIndex}-table-row`}
            className={clsx(
              classes.tableDataRow,
              props.classes?.tableDataRow,
              rowData.selected && classes.tableSelectedRow,
              props.isSelectable && classes.selectableTableRow
            )}
            onClick={() => props.onSelectRow?.(rowData)}
          >
            {props.isMultiSelectable && (
              <Box
                id={`${tableId}-${rowIndex}-table-row-box`}
                className={classes.checkBoxContainer}
                onClick={(e) => e.stopPropagation()}
              >
                <IMCheckBox
                  id={rowData.id}
                  name="checkbox"
                  selected={selectedRows?.includes(rowData.id)}
                  selectionItem={{ id: rowData.id, label: "" } as CheckBoxItem}
                  onChange={() => handleRowSelect(rowData.id)}
                  onBlur={() => {}}
                />
              </Box>
            )}
            {props.columns.map((column, columnIndex) => (
              <TableCell
                id={`${tableId}-row-${rowIndex}-column-${columnIndex}`}
                key={`${rowData.id ?? rowIndex}-${
                  column.columnId ?? columnIndex
                }`}
                className={clsx(
                  classes.tableBodyCell,
                  column.classes?.column,
                  classes[column.align ?? ColumnAlign.LEFT]
                )}
                align={column.align ?? ColumnAlign.LEFT}
              >
                {rowData[column.columnKey]}
              </TableCell>
            ))}
          </TableRow>
          {props.showHelperItem && (
            <TableRow>
              <TableCell
                colSpan={
                  props.columns.length + (props.isMultiSelectable ? 1 : 0)
                }
                className={classes.helperItemCell}
                id={`${tableId}-row-${rowIndex}-${rowData.helperItem}`}
              >
                {rowData.helperItem}
              </TableCell>
            </TableRow>
          )}
        </>
      )),
    [props.data, selectedRows]
  );

  const renderTableFooter = useMemo(
    () => (
      <TableFooter id={`${tableId}-footer`} className={classes.tableFooter}>
        <IMPagination
          showRowsPerPage={props.paginationProps?.showRowsPerPage}
          classes={props?.paginationProps?.classes}
          count={props?.paginationProps?.count ?? 0}
          rowsPerPage={props?.paginationProps?.rowsPerPage}
          showFirstButton={props?.paginationProps?.showFirstButton}
          showLastButton={props?.paginationProps?.showLastButton}
          onChange={props?.paginationProps?.onChange}
          currentPage={props?.paginationProps?.currentPage}
        />
      </TableFooter>
    ),
    [props.paginationProps]
  );

  return (
    <TableContainer
      id={tableId}
      className={clsx(classes.tableContainer, props.classes?.tableContainer)}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow
            id={`${tableId}-table-row`}
            className={clsx(classes?.tableHeader, props.classes?.tableHeader)}
          >
            {tableHeader}
          </TableRow>
        </TableHead>
        {!props.isError && !!props.data.length && (
          <TableBody className={props.classes?.tableBody}>
            {tableRows}
          </TableBody>
        )}
      </Table>
      {props.isError && renderErrorView()}
      {!props.isError && props?.data?.length === 0 && renderNoDataInfo()}
      {props.showPagination && renderTableFooter}
    </TableContainer>
  );
};

export default IMSmartTable;
