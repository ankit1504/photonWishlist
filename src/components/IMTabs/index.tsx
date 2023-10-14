import React, { FunctionComponent } from "react";
import { TabContext, TabList } from "@mui/lab";
import { Box, Chip, Tab, Typography } from "@mui/material";
import clsx from "clsx";

import useStyles from "./styles";

type TabClassType = {
  tabListContainer?: string;
  tabIndicator?: string;
  tabContainer?: string;
};

export interface IMTabItem {
  name: string;
  tabLabel: string;
  showTab?: boolean;
  isDisabled?: boolean;
  count?: number;
  leftElement?: React.ReactNode;
  labelComponent?: React.ReactNode;
  rightElement?: React.ReactNode;
}

export interface IMTabGroupProps {
  tabItems: IMTabItem[];
  activeTab: string;
  onTabSelectionChange: (event: React.SyntheticEvent, newValue: string) => void;
  showLeftElement?: boolean;
  showRightElement?: boolean;
  showCustomTab?: boolean;
  showLabelComponent?: boolean;
  showLabel?: boolean;
  showCount?: boolean;
  classes?: TabClassType;
}

interface ICountLabelProps {
  count: number;
  label: string;
  name: string;
}

const IMTabGroup: FunctionComponent<IMTabGroupProps> = (props) => {
  const classes = useStyles();

  const CountLabel = ({ count, label, name }: ICountLabelProps) => (
    <Box className={classes.countLabelContainer}>
      <Chip
        classes={{
          root:
            props.activeTab === name
              ? classes.selectedChipContainer
              : classes.chipContainer,
          label:
            props.activeTab === name
              ? classes.selectedChipCount
              : classes.chipCount,
        }}
        label={count}
      />
      <Typography
        className={
          props.activeTab === name ? classes.selectedTabLabel : classes.tabLabel
        }
      >
        {label}
      </Typography>
    </Box>
  );

  const renderCustomTab = (item: IMTabItem) => (
    <Box>
      {!!props.showLeftElement && item.leftElement}
      {!!props.showLabelComponent && item.labelComponent}
      {!!props.showCount && (
        <CountLabel
          count={item.count ?? 0}
          label={item.tabLabel}
          name={item.name}
        />
      )}
      {!!props.showLabel && item.tabLabel}
      {!!props.showRightElement && item.rightElement}
    </Box>
  );

  return (
    <TabContext value={props.activeTab}>
      <TabList
        onChange={props.onTabSelectionChange}
        className={clsx(
          classes.tabListContainer,
          props.classes?.tabListContainer
        )}
        classes={{
          indicator: clsx(classes.tabIndicator, props.classes?.tabIndicator),
        }}
      >
        {props.tabItems
          .filter((item) => item.showTab === true)
          .map((item) => (
            <Tab
              className={clsx(
                classes.tabContainer,
                props.classes?.tabContainer
              )}
              label={
                props.showCustomTab ? renderCustomTab(item) : item.tabLabel
              }
              value={item.name}
              key={item.name}
              disabled={item.isDisabled ?? false}
            />
          ))}
      </TabList>
    </TabContext>
  );
};

export default IMTabGroup;
