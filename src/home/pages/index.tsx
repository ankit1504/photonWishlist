/*eslint import/no-unresolved: */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

// import { IMButton } from "@infra-market/im-web-components";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Box, Paper, Typography, Button } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useFormik } from "formik";
import * as yup from "yup";

import useStyles from "./styles";
import LoginPng from "../../assets/svg/loginPage.webp";
import ClearLocalStorageOnTabClose from "../../components/clearLocalStorage";
import IMButton from "../../components/IMButton";
import IMInput from "../../components/IMInput";
import { LocalStorageType } from "../../constants/Common";
import IconInfolist from "../../feature/IconInfolist";
import ProductImage from "../../feature/productImage";
import { getLocalStorageValue, setLocalStorageValue } from "../../utils/common";
import LoginBottomsheet from "../../feature/login";
import ProductDetailsPage from "../../feature/productDetails";

const loginSchema = yup.object({
  mobileNumber: yup.string().required("Mobile number is required field"),
  // .min(10, "10 digit is required"),
  name: yup.string().required("Name is required field").max(36),
});

const SaapHomePage: React.FunctionComponent = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const onScanMore = () => {
    const isUserAlreadyVistited =
      getLocalStorageValue(LocalStorageType.wishListData) ?? [];
    if (isUserAlreadyVistited.length > 0) {
      navigate("/wishList");
    } else {
      navigate("/scanner");
      setLocalStorageValue(
        LocalStorageType.wishListData,
        [
          {
            skuId: "IM0001231",
            skuName: "Infra.market Tiles",
          },
        ] ?? []
      );
    }
  };
  const formikData = useFormik({
    validateOnMount: true,
    initialValues: {
      mobileNumber: "",
      name: "",
    },
    validationSchema: loginSchema,
    onSubmit: () => {},
  });

  return (
    <Box>
      <ClearLocalStorageOnTabClose />
      {/* <IMButton title="Scan More..." type="primary" onClick={onScanMore} /> */}
      {/* <ProductImage imageUrl="https://pixabay.com/images/download/people-2944065_640.jpg" /> */}
      <ProductDetailsPage />
      {/* <Button onClick={() => setOpen(true)}>
        <Typography>Open Login</Typography>
      </Button> */}
    </Box>
  );
};

export default SaapHomePage;
