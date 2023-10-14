import React from "react";

import { IMResponse } from "@infra-market/im-web-components";
import { CssBaseline } from "@mui/material";

import useStyles from "./styles";

interface IIMOpsResponseProps {
  image: React.ElementType;
  title?: string;
  subTitle?: string;
  imageContainerClass?: string;
  titleClass?: string;
  subtitleClass?: string;
}

const IMOpsResponse: React.FunctionComponent<IIMOpsResponseProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <IMResponse
        image={props.image}
        title={props.title}
        subTitle={props.subTitle}
        classes={{
          container: classes.imageContainer,
          subTitle: classes.subtitle,
          title: classes.title,
        }}
      />
    </>
  );
};

export default IMOpsResponse;
