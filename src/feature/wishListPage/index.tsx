/*eslint import/no-unresolved: */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";


import { IMButton } from "@infra-market/im-web-components";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import { Avatar, Box, Button, Paper, SwipeableDrawer, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

import SkuListItem, { ISkuListItem } from "./SkuListItem";
import useStyles from "./styles";
import WishListHeader from "./WishListHeader";
import LoginPng from "../../assets/svg/loginPage.webp";
import IMInput from "../../components/IMInput";
import { LocalStorageType } from "../../constants/Common";
import { getLocalStorageValue } from "../../utils/common";
import useToggle from "../../constants/customHooks";
import WishlistShareWorks from "../wishlistShareWorks";
import ViewWishList from "../viewWishList";

const loginSchema = yup.object({
    mobileNumber: yup.string().required("Mobile number is required field"),
    // .min(10, "10 digit is required"),
    name: yup.string().required("Name is required field").max(36),
  });

const WishListPage: React.FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const skuListData = (JSON.parse(getLocalStorageValue(LocalStorageType.wishListData) ?? "[]") ?? []) as ISkuListItem[];

  const [openWishlistShare, toggleOpenWishlistShare] = useToggle(false);

  const formikData = useFormik({
    validateOnMount: true,
    initialValues: {
      mobileNumber: "",
      name: "",
    },
    validationSchema: loginSchema,
    onSubmit: () => {},
  });

  const onShare = () => {
    setOpen((state) => !state);
  };

  const onDone = () => {
    navigate('/viewWishlist')
  }

  return (
    <>
      <WishListHeader count={skuListData.length}/>
      <Box className={classes.skuList}>
        {skuListData.map((item) => <SkuListItem item={item}/>)}
      </Box>
      <Box className={classes.subContainer}>
      <Typography className={classes.howWish}>How Wishlist Share Works?</Typography>
      <Button disableRipple onClick={() => toggleOpenWishlistShare()} className={classes.clickHere}>Click here to Know</Button>
      </Box>
      <Box className={classes.btn}>
      <Button
      startIcon={<DownloadIcon />}
        onClick={() => {}}
        className={classes.barcodeBtn}
       >
        Save
      </Button>
      <Button
        onClick={onShare}
        startIcon={<ShareIcon />}
        className={classes.actionBtn}
       >
        Share WishList To Store
      </Button>
      </Box>
      <Box className={classes.sideDrawer}>
        <SwipeableDrawer
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          anchor="bottom"
        >
          <Box className={classes.header}>
            <CloseIcon
              className={classes.closeIcon}
              onClick={() => setOpen(false)}
            />
            <Avatar
              variant={"circular"}
              src={LoginPng}
              className={classes.avatar}
            />
            <Typography className={classes.mobileNumber}>
              Please enter your mobile number to Share Wishlist to Store
            </Typography>
            <Typography className={classes.checkoutText}>
              To checkout hassle-free share the Wishlist ID to store and
              checkout{" "}
            </Typography>
            <IMInput
              id="mobileNumber"
              name="mobileNumber"
              inputLabel={"Mobile Number"}
              type="text"
              variant="outlined"
              value={formikData.values.mobileNumber}
              onChange={formikData.handleChange}
              onBlur={formikData.handleBlur}
              maxLength={10}
              error={formikData.touched.mobileNumber && formikData.errors?.mobileNumber
                ? (`${formikData.errors.mobileNumber}`) : ''}
            />
            <IMInput
              id="name"
              name="name"
              inputLabel={"Name"}
              type="text"
              variant="outlined"
              value={formikData.values.name}
              onChange={formikData.handleChange}
              onBlur={formikData.handleBlur}
              maxLength={36}
              error={formikData.touched.name && formikData.errors?.name
                ? (`${formikData.errors.name}`) : ''}
            />
            <Box className={classes.button}>
              <IMButton title="Done" onClick={onDone} btnClass={classes.buttonClasses} />
            </Box>
          </Box>
        </SwipeableDrawer>
      </Box>
      <WishlistShareWorks 
      onClose={toggleOpenWishlistShare} 
          onOpen={toggleOpenWishlistShare} 
          open={openWishlistShare} />
    </>
  );
};

export default WishListPage;
