import React from "react";
import { Avatar, Box, Button, Paper, SwipeableDrawer, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import useStyles from "./styles";

interface IWishlistShareWorks {
    onClose: () => void;
    onOpen: () => void;
    open: boolean;
}

const WishlistShareWorks: React.FunctionComponent<IWishlistShareWorks> = (props) => {
  const classes = useStyles();

  const drawerContent = (title: string) => {
    return(
    <Box className={classes.one}>
      <Box className={classes.billingDesk}>
      </Box>
      <Typography className={classes.title}>{title}</Typography>
      </Box>
    )
  };

  return (
    <>
    <SwipeableDrawer 
      onClose={props.onClose} 
      anchor="bottom"
      open={props.open}
      onOpen={props.onOpen} 
      className={classes.root}
      > 
      <Box className={classes.boxContainer}>
      <Typography className={classes.wishlistShareHeader}>How the Wishlist Share Works?</Typography>
      <CloseIcon className={classes.icon} onClick={props.onClose} />
      </Box>
      <Box className={classes.drawerContent}>
      {drawerContent('Go to Billing Desk')}
      {drawerContent('Share the Wishlist ID - XYZ to the billing desk person')}
      {drawerContent('Checkout with ease')}
      </Box>
      <Box className={classes.btn}>
      <Button
        onClick={props.onClose}
        className={classes.actionBtn}
       >
        Okay
      </Button>
      </Box>
      </SwipeableDrawer>
      </>
  );
};

export default WishlistShareWorks;
