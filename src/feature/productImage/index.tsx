import React from "react";
import { Avatar, Box, Paper } from "@mui/material";

import useStyles from "./styles";

interface IProductImage {
    imageUrl: string;
}

const ProductImage: React.FunctionComponent<IProductImage> = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paperContainer}>
      <Box className={classes.imageContainer}>
      </Box>
      <Box className={classes.avatarContainer}>
      <Avatar
          variant={"circular"}
          src={props.imageUrl}
          className={classes.avatar}
        />
      </Box>
    </Paper>
  );
};

export default ProductImage;
