import React from "react";

import { Button } from "@mui/material";
import clsx from "clsx";

import useStyles from "./styles";

export interface IMButtonProps {
  title?: string;
  disable?: boolean;
  disableRipple?: boolean;
  onClick?: (event?: any) => void;
  leftIcon?: React.ElementType;
  rightIcon?: React.ElementType;
  leftIconClass?: string;
  rightIconClass?: string;
  btnClass?: string;
  variant?: "text" | "outlined" | "contained";
  type?: "primary" | "secondary" | "tertiary";
  id?: string;
}

const IMButton: React.FunctionComponent<IMButtonProps> = (props) => {
  const classes = useStyles();
  const LeftIcon = props.leftIcon;
  const RightIcon = props.rightIcon;

  return (
    <Button
      id={props.id}
      disableRipple={!props?.disableRipple}
      disabled={props.disable}
      onClick={props.onClick}
      startIcon={
        LeftIcon && (
          <LeftIcon className={clsx(classes.icon, props.leftIconClass)} />
        )
      }
      endIcon={
        RightIcon && (
          <RightIcon className={clsx(classes.icon, props.rightIconClass)} />
        )
      }
      className={clsx(
        classes.defaultBtn,
        props?.type && classes[props.type],
        props?.btnClass,
        props?.disable && classes.disabledBtn
      )}
      variant={props.variant}
    >
      {props.title}
    </Button>
  );
};

export default IMButton;
