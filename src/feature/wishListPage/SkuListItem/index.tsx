/*eslint import/no-unresolved: */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { IMBadge, IMButton, IMDropDown, IMInfoPair, IMInput } from "@infra-market/im-web-components";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";

import useStyles from "./styles";
import { formatCurrency } from "../../../constants/Common";

export interface ISkuListItem {
    skuName: string,
    skuId: string,
    originalPrice: number,
    discountPrice: number,
    qty: number,
    imgUrl: string,
    discount: number,
}

interface ISkuListItems {
  item: ISkuListItem;
}

const SkuListItem: React.FunctionComponent<ISkuListItems> = (props: ISkuListItems) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(props.item.qty);

  return (
    <Box className={classes.skuListItemContainer}>
        <Box className={classes.skuListItemInfo}>
            <Avatar
            alt="ImageUrl"
            src={props.item.imgUrl}
            className={classes.avatar}
            />
            <IMInfoPair
                title={props.item.skuName}
                subtitle={`SKU: ${props.item.skuId}`}
                classes={{
                    container: classes.infoPairContainer,
                    title: classes.infoPairTitle,
                }}
            />
            <IconButton
              onClick={() => {}}
            >
              <DeleteOutlineIcon />
            </IconButton>
        </Box>
        <Box className={classes.priceInfoContainer}>
            <IMInfoPair
                title={`₹${formatCurrency(props.item.discountPrice)}`}
                subtitle={`₹${formatCurrency(props.item.originalPrice)}`}
                classes={{
                    container: classes.amountInfoContainer,
                    title: classes.infoPairTitle,
                    subtitle: classes.amountInfoSubTitle,
                }}
            />
            <IMBadge
              label={`${props.item.discount}% OFF`}
              id="discountBadge"
              classes={{
                  container: classes.badge,
              }}
            />
            {/* <Box className={classes.buttonContainerWithButtons}>
                <Button title="-" onClick={() => setQuantity(quantity - 1)}/>
                <IMInput
                  type="text" inputLabel={quantity.toString() || ""}
                  onChange={() => {}}
                  classes={{container: classes.inputContainer}}
                />
                <Button title="+" onClick={() => setQuantity(quantity + 1)}/>
            </Box> */}
        </Box>
    </Box>
  );
};

export default SkuListItem;
