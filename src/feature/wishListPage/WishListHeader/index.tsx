/*eslint import/no-unresolved: */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { Box, IconButton, Typography } from "@mui/material";

import useStyles from "./styles";

interface IWishListHeader {
  count: number;
}

const WishListHeader: React.FunctionComponent<IWishListHeader> = (props: IWishListHeader) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.wishListHeaderContainer}>
        <IconButton
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography className={classes.headerTitle}>{`${props.count} Items in WishList`}</Typography>
        <Box flex={1}/>
        <IconButton
          onClick={() => navigate("/scanner")}
          className={classes.qrIcon}
        >
          <QrCode2Icon />
        </IconButton>
    </Box>
  );
};

export default WishListHeader;
