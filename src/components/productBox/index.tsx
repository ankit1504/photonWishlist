import { Avatar, Box, Chip, Tab, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import useStyles from './styles';
import { IMBadge } from '@infra-market/im-web-components';

export interface IProductBoxProps {
  imageUrl: string;
  productName: string;
  price: string;
  discount:string;
}

const ProductBox: FunctionComponent<IProductBoxProps> = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
        {/* <FavoriteBorderOutlinedIcon className={classes.favourite}/>  */}
      <Avatar src={props.imageUrl} className={classes.avatar} />
      <IMBadge
              label={`${props.discount}% OFF`}
              id="discountBadge"
              classes={{
                  container: classes.badge,
              }}
            />
      <Box className ={classes.priceDetails}>
        <Typography className={classes.productText} >{props.productName}</Typography>
        <Box className ={classes.pricing}><Typography className= {classes.priceText}>{props.price}</Typography>
        <Typography className={classes.unitPrice}>per unit</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default ProductBox;
