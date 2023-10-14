import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography, IconButton } from "@mui/material";
import clsx from "clsx";

import useStyles from "./styles";

interface IIMSubHeaderProps {
  id: string;
  title: string;
  subTitle: React.ReactNode;
  rightPrimaryText?: string;
  container?: string;
  titleStyle?: string;
  rightPrimaryTextStyle?: string;
  rightPrimaryComponent?: React.ReactNode;
  onBackBtn?: () => void;
}

const IMSubHeader: React.FunctionComponent<IIMSubHeaderProps> = (
  props: IIMSubHeaderProps
) => {
  const classes = useStyles();

  const renderTypographyInfo = (text: string, classes: string) => (
    <Typography id={`${props.id}-${text}`} className={classes}>
      {text}
    </Typography>
  );
  const renderCloseButton = () => (
    <IconButton
      className={classes.backButtonContainer}
      onClick={props.onBackBtn}
      id={`${props.id}-back-button`}
    >
      <ArrowBackIcon
        className={classes.backButtonIcon}
        id={`${props.id}-back-icon`}
      />
    </IconButton>
  );

  const renderSubHeader = () => (
    <Box className={classes.subHeader}>
      {props.onBackBtn && renderCloseButton()}
      <Box className={classes.subHeaderInfoContainer}>
        {renderTypographyInfo(
          props.title,
          clsx(classes.subHeaderInfoTitle, props.titleStyle)
        )}
        {!!props.subTitle && props.subTitle}
      </Box>
    </Box>
  );
  return (
    <Box
      id={`${props.id}-sub-header`}
      className={clsx(classes.header, props.container)}
    >
      {renderSubHeader()}
      <Box className={classes.emptyBox}></Box>
      <Box className={classes.buttonInfoContainer}>
        {!!props.rightPrimaryText &&
          renderTypographyInfo(
            props.rightPrimaryText,
            clsx(classes.rightPrimaryText, props.rightPrimaryTextStyle)
          )}
        {!!props.rightPrimaryComponent && props.rightPrimaryComponent}
      </Box>
    </Box>
  );
};

export default IMSubHeader;
