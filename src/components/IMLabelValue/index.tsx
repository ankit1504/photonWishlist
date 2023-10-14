import React, { FunctionComponent } from "react";

import { Box, Typography } from "@mui/material";
import clsx from "clsx";

import useStyles from "./styles";

type ClassType = {
  container?: string;
  label?: string;
  value?: string;
};

interface IIMLabelValue {
  label: string;
  value: React.ReactNode; //Todo - raise PR in web component to change value type to ReactNode
  id: string;
  classes?: ClassType;
}

const IMLabelValue: FunctionComponent<IIMLabelValue> = (props) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.container, props.classes?.container)}>
      <Typography
        id={`${props.id}-label`}
        className={clsx(classes.label, props.classes?.label)}
      >
        {props.label}
      </Typography>
      {typeof props.value === "string" ? (
        <Typography
          id={`${props.id}-value`}
          className={clsx(classes.value, props.classes?.value)}
        >
          {props.value}
        </Typography>
      ) : (
        props.value
      )}
    </Box>
  );
};

export default IMLabelValue;
