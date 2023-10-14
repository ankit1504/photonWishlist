import React, { FunctionComponent } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";
import clsx from "clsx";

import useStyles from "./styles";

interface ClassType {
  alertIcon?: string;
  alertMessage?: string;
  closeButton?: string;
  root?: string;
}

interface IIMAlert {
  id: string;
  severity?: "error" | "warning" | "info" | "success";
  variant?: "outlined" | "filled";
  alertMessageText?: string;
  alertContent?: React.ReactNode;
  classes?: ClassType;
  onClose?: () => void;
}
const IMAlert: FunctionComponent<IIMAlert> = (props: IIMAlert) => {
  const classes = useStyles();

  return (
    <Alert
      id={props.id}
      severity={props.severity || "success"}
      variant={props.variant || "filled"}
      action={
        props.onClose && (
          <CloseIcon
            className={clsx(classes.closeButton, props.classes?.closeButton)}
            onClick={props.onClose}
            id={`${props.id}-close-icon`}
          />
        )
      }
      classes={{
        icon: clsx(classes.alertIcon, props.classes?.alertIcon),
        message: clsx(classes.alertMessage, props.classes?.alertMessage),
        root: clsx(classes.root, props.classes?.root),
      }}
    >
      {props.alertMessageText}
      {props.alertContent && props.alertContent}
    </Alert>
  );
};

export default IMAlert;
