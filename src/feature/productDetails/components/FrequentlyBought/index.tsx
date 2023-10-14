import React from "react";

import { Avatar, Box, Typography } from "@mui/material";

import useStyles from "./styles";

const FrequentlyBoughtSection: React.FunctionComponent = () => {
  const classes = useStyles();

  return <Box className={classes.container}>
    <Box className={classes.leftContainer}>
      <Typography className={classes.textStyles}>Frequently bought together</Typography>
      <Box className={classes.boxImageWithProduct}>
        <Avatar 
        src="https://s3-alpha-sig.figma.com/img/1638/6de5/28849c2d4b1bb15447dd4ab8e5189797?Expires=1698019200&Signature=qzPpkQ3XeXqOTTwujTSsgGacn4M464YQ-WNAWqPBXhnKNRT7EYljXMkDocqjZAjJOjSiE4OBpYq5Tzkb06Fk5zBgRm0wy~8kfYptFTjQGRZQpBq-vZjB-LyBbKtxeTINNdCeProh5rsryu8eh-h9ni8nIsvwebzJWdMAUtYnxCxrqE8JC-DqOqyps-oO9GvN3XsceOLXx~e184pYmCfQF4wl-Wvm8DJCGYr-uwQ-dDqyR5Vu~AB1RW-Rxhiam6UvMgE6Dh30q-PeFLCbqi5sc~09GH3UbSTMU70Hum7IFy29oWEf1YO4wtq8Ry6Qyy-FSBkQ-jTodSAKEK-YqAieVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        className={classes.imageContainer}
        />
        <Box className={classes.nameContainer}>
        <Typography className={classes.productName}>Matrix Collection</Typography>
        <Typography className={classes.productName} noWrap>Single Lever Basin Mixer Chrome</Typography>
        <Box className={classes.rowContainer}>
        <Typography className={classes.priceDetails}>₹ 444 </Typography>
        <Typography className={classes.perUnit} noWrap>per Unit</Typography>
        </Box>
        </Box>
      </Box>
    </Box>
    <Box className={classes.rightContainer}>
      <Avatar 
        src="https://dpy2z8n9cxui1.cloudfront.net/V001277/colorado-gray-dust-600x300-mm-ceramic-elevation-tile-11-mm/colorado-gray-dust-ceramic-tiles/1.png"
         className={classes.boxRightImageWithProduct} />
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <Avatar
        src="https://www.simpolo.net/images/products/sub-products/1644909370_02_midnight-wind_600x1200-mm.jpg"
         sx={{
              height: 80,
              width: 80,
              border: '2px solid var(--other-stroke, #C4C4C4)',
              borderRadius: 2,
        }}/>
        <Avatar
        src="https://cdn.mytyles.in/public/products/images/5a1037c-75f-ed44-77ec-10eb74c0464/1200x1200.png"
         sx={{
              height: 80,
              width: 80,
              border: '2px solid var(--other-stroke, #C4C4C4)',
              borderRadius: 2,
        }} />
      </Box>
    </Box>
  </Box>;
};

export default FrequentlyBoughtSection;
