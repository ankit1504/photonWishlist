import { snakeCase } from "lodash";

export enum FilterOperands {
  EQ = "", // it is empty string because default = will be available, but still needed in FilterOperands for readability
  NE = "_ne",
  LT = "_lt",
  LTE = "_le",
  GT = "_gt",
  GTE = "_ge",
}

export interface IFilter {
  property: string;
  operand: FilterOperands;
  value: any;
}

export enum SortDirection {
  ASC = "asc",
  DESC = "desc",
}

export interface ISort {
  property?: string;
  direction?: SortDirection;
}

export interface IPage {
  pageSize?: number;
  cursor?: number | string;
  pageNumber?: number | string;
}

export const convertFilterToUrlParams = (filters: IFilter[]) =>
  filters.reduce(
    (prevResult, item) =>
      item.value
        ? prevResult.concat(
            snakeCase(item.property),
            item.operand,
            "=",
            Array.isArray(item.value)
              ? `[${item.value.toString()}]`
              : item.value,
            "&"
          )
        : prevResult,
    ""
  );

export const convertSortToUrlParams = (sortObj: ISort = {}) => {
  if (!sortObj.property) return "";
  return "order_by=".concat(
    snakeCase(sortObj.property || ""),
    "&order_type=",
    sortObj.direction || SortDirection.ASC,
    "&"
  );
};

export const convertPageInfoToUrlParams = (pageInfo: IPage = {}) => {
  let pageInfoQuery = "";
  if (pageInfo.pageSize)
    pageInfoQuery = "page_size=".concat(pageInfo.pageSize.toString(), "&");
  if (pageInfo.cursor)
    pageInfoQuery = pageInfoQuery.concat(`cursor=${pageInfo.cursor}`);
  if (pageInfo.pageNumber)
    pageInfoQuery = pageInfoQuery.concat(`page_number=${pageInfo.pageNumber}`);
  return pageInfoQuery;
};

export const constructUrlWithParams = (
  url: string,
  filter: IFilter[] = [],
  sort?: ISort,
  pageInfo?: IPage
) =>
  url.concat(
    "?",
    convertFilterToUrlParams(filter),
    convertSortToUrlParams(sort),
    convertPageInfoToUrlParams(pageInfo)
  );
