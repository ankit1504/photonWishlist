import React from "react";
import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import QrCode2Icon from '@mui/icons-material/QrCode2';

import ViewWishlistPng from "../../assets/svg/viewWishList.webp";

import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

interface IViewWishList {
    wishlistId?: string;
}

const ViewWishList: React.FunctionComponent<IViewWishList> = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Paper className={classes.paperContainer}>
        <Box className={classes.avatarContainer}>
        <Avatar
              src={ViewWishlistPng}
              className={classes.avatar}
            />
        </Box>
        <Typography className={classes.wellDone}>Well Done !</Typography>
        <Typography className={classes.successfully}>You have successfully shared the Wishlist to Store POS</Typography>
        <Typography className={classes.wishlistId}>Wishlist ID : {props?.wishlistId}</Typography>
        <Typography className={classes.successfully}>Connect with Store Billing Executive to proceed further </Typography>
        <Box className={classes.btn}>
      <Button
      startIcon={<QrCode2Icon />}
        onClick={() => {}}
        className={classes.barcodeBtn}
       >
        Scan Again
      </Button>
      <Button
        onClick={() => navigate("/wishList")}
        startIcon={<FavoriteIcon />}
        className={classes.actionBtn}
       >
        View Wishlist
      </Button>
      </Box>
    </Paper>
  );
};

export default ViewWishList;
