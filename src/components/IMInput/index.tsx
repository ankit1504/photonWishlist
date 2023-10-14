import React, { FunctionComponent } from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import clsx from "clsx";

// import { CountryCodes, CurrencyCodes } from '../../constants/Common';
import useStyles from "./styles";

type ClassType = {
  input?: string;
  error?: string;
  container?: string;
  helperText?: string;
  endIcon?: string;
};

export type CountryCodes = "IN" | "US";
export enum CurrencyCodes {
  IN = "\u20B9",
  US = "\u0024",
}

export interface IIMInputProps {
  id: string;
  name: string;
  inputLabel: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<any>) => void;
  type: "text" | "number" | "password" | "email" | "tel";
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  variant?: "standard" | "filled" | "outlined";
  onBlur?: (e: React.FocusEvent<any>) => void;
  onKeyPress?: (e: React.KeyboardEvent<any>) => void;
  currencyCountryCode?: CountryCodes;
  maxLength?: number;
  multiline?: boolean;
  disabled?: boolean;
  maxRows?: number;
  endIcon?: React.ReactNode;
  error?: string;
  helperText?: string;
  classes?: ClassType;
}

const IMInput: FunctionComponent<IIMInputProps> = (props) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.container, props.classes?.container)}>
      <TextField
        id={`${props.id}-inputField`}
        name={props.name}
        required={props.required}
        label={props.inputLabel}
        value={props.value}
        defaultValue={props.defaultValue}
        multiline={props.multiline}
        disabled={props.disabled}
        placeholder={props.placeholder}
        maxRows={props.maxRows || 1}
        onChange={(event) => {
          props?.maxLength
            ? event.target.value.length <= props?.maxLength &&
              props.onChange(event)
            : props.onChange(event);
        }}
        onKeyPress={props.onKeyPress}
        onFocus={props.onBlur}
        type={props.type}
        autoComplete="off"
        variant={props.variant || "outlined"}
        className={clsx(classes.input, props.classes?.input)}
        InputProps={{
          startAdornment: props.currencyCountryCode && (
            <InputAdornment position="start">
              {CurrencyCodes[props.currencyCountryCode]}
            </InputAdornment>
          ),
          endAdornment: props.endIcon && (
            <InputAdornment
              className={clsx(classes.endIcon, props.classes?.endIcon)}
              position="end"
            >
              {props.endIcon}
            </InputAdornment>
          ),
        }}
        error={!!props.error}
      />
      {!!props.helperText && (
        <Typography
          id={`${props.id}-helperText`}
          className={clsx(classes.text, props.classes?.helperText)}
        >
          {props.helperText}
        </Typography>
      )}
      {!!props.error && (
        <Typography
          id={`${props.id}-errorText`}
          className={clsx(classes.text, classes.error, props.classes?.error)}
        >
          {props.error}
        </Typography>
      )}
    </Box>
  );
};

export default IMInput;
