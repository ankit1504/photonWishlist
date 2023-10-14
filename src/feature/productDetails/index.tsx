
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Typography, Avatar, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

import useStyles from './styles';
import Percentage from '../../assets/percentage';
import GreenDot from '../../assets/svg/greenDot';
import IMTabGroup from '../../components/IMTabs';
import ProductBox from '../../components/productBox';
import FrequentlyBoughtSection from './components/FrequentlyBought';
import { LocalStorageType } from '../../constants/Common';
import { getLocalStorageValue, setLocalStorageValue } from '../../utils/common';
import IconInfolist from '../IconInfolist';
import { ISkuListItem } from '../wishListPage/SkuListItem';
import ExpertHelpBanner from '../../assets/svg/ExpertHelpBanner.svg';
import ProductImage from '../productImage';
import { gql } from '@apollo/client';

import client from '../../config/apolloClient';

const ProductDetailsPage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState<string>('Product Details');
  const[productData,setProductData]=useState({})
  const axios = require('axios');

  let response;
 
  useEffect(() =>{
    axios.post('https://qa.inframarket.cloud/products/product_details/v4',{
      product_alias_id: 'PROD2588582',
      location_type: 'pincode',
      pincode: '682024',
    }, {
      headers :{
        'Authorization' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjoidHJ1ZSIsImxvZ2luX2lkIjoiOTk3MjMxMTQ2NSIsImxvZ2luX3R5cGUiOiJwaG9uZW5vIiwicmVxdWVzdF91c2VyX2lkIjo0NH0.dI2SUF1-wpdlbfAsUkyD6kpzDRGxJSlprwolehrpm5s'
      }
    }).then((response) => {
      setProductData(response.data)
    })
  },[])
  


  const tabsList = [
    {
      name: 'Product Details',
      tabLabel: 'Product Details',
      showTab: true,
    },
    {
      name: 'Specifications',
      tabLabel: 'Specifications',
      showTab: true,
    },
    {
      name: 'Product Price',
      tabLabel: 'Product Price',
      showTab: true,
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };
  const itemData = [
    {
      imageUrl: 'fghjk',
      productName: 'string1',
      price: '200',
      discount: '2',
    },
    {
      imageUrl: 'fghjk',
      productName: 'string2',
      price: '200',
      discount: '2',
    },
    {
      imageUrl: 'fghjk',
      productName: 'string3',
      price: '200',
      discount: '2',
    },
    {
      imageUrl: 'fghjk',
      productName: 'string6543',
      price: '200',
      discount: '2',
    },
  ];

  const onAddingToWishList = () => {
    const isUserAlreadyVistited = JSON.parse(getLocalStorageValue(LocalStorageType.wishListData) ?? "[]") ?? [];
    if (isUserAlreadyVistited.length > 0) {
      isUserAlreadyVistited.push(
        {
          skuName: "Matrix Collection Single Lever Basin Mixer Chrome",
          skuId: "IM10037470",
          originalPrice: 10000.99,
          discountPrice: 4999.99,
          qty: 1,
          imgUrl: "",
          discount: 10,
        });
      setLocalStorageValue(
        LocalStorageType.wishListData,
        JSON.stringify(isUserAlreadyVistited));
    } else {
      setLocalStorageValue(
        LocalStorageType.wishListData,
        JSON.stringify([
          {
            skuName: "Matrix Collection Single Lever Basin Mixer Chrome",
            skuId: "IM10037470",
            originalPrice: 10000.99,
            discountPrice: 4999.99,
            qty: 1,
            imgUrl: "",
            discount: 10,
          },
        ] ?? []),
      );
    }
    navigate("/wishList");
  }

  const renderProductList = () => {
    return (
      <Box>
        <Box className={classes.similarProductsTextBox}>
          <Typography>Similar Products</Typography>
          <Typography>See All</Typography>
        </Box>
        <Box className={classes.similarProducts}>
          {itemData.map((item) => (
            <ProductBox
              imageUrl={item.imageUrl}
              productName={item.productName}
              discount={item.discount}
              price={item.price}
            />
          ))}
        </Box>
      </Box>
    );
  };

  const renderTypography = (value: string, classes: string) => (
    <Typography className={classes}>{value}</Typography>
  );
  return (
    <Box className={classes.mainContainer}>
      <Box>
      <ProductImage imageUrl="https://s3-alpha-sig.figma.com/img/81e0/a22f/8bcdebd785a05961453a09b4d48bb312?Expires=1698019200&Signature=KkbDbuRo4dU5km4YdwHsV0pECOb8gbdYH12ycSCTFX2FJZj~WPk7wWv~ZxAT3GJYSfg3RLvFj9LDuF55DPMWif0yFxcWDuBYExEdHk13A15Of4pjo5Tey1oXR-Yv010wtXEw5sGnL252B5DjYSXVlBjPAItiI8hoVW4lfoo8KvEQhpa1EUZB0rLFeZiCbnX-0WO7uaB4kCqhCaDeXjHK0Zftg39ablLWsGAKTNpZt403-RNy8-7g4hxvLrgu3ELr5dsdGz4a9DzjUric78vb71z~1m4Q35o0VVnyczlgOk5~JpWQg7Npb4p9pz5lburIH3S0J~HQNJ5s5xm4Ay0g9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        <Box className={classes.boxContainer}>
          <Box className={classes.percentageInfoContainer}>
            <Box className={classes.percentageContainer}>
              <Percentage />
              <Typography className={classes.percentOffText}>8% OFF</Typography>
            </Box>
            <Box className={classes.readInfo}>
              <Typography className={classes.readInfoText}>
                Read Info
              </Typography>
              <KeyboardArrowDownIcon
                className={classes.arrowDownIcon}
                fontSize={'small'}
              />
            </Box>
          </Box>
          {renderTypography(
            productData?.data?.name,
            classes.productName,
          )}
          {renderTypography('By IVAS', classes.byIvas)}
          {renderTypography('Pack of 1 Unit', classes.unit)}
          {renderTypography(productData?.data?.variants[0]?.sku, classes.skuId)}
          {/* TODO : sluid dynamic */}
          {renderTypography(productData?.data?.pricing?.price_range.end.price_with_gst, classes.price)}
          {renderTypography('Inclusive of all taxes', classes.taxes)}
          <Box className={classes.inStockContainer}>
            <GreenDot />
            {renderTypography('In stock', classes.inStock)}
            {renderTypography(
              'in Sarjapur Store, Bengaluru',
              classes.storeName,
            )}
          </Box>
        </Box>
        <Box className={classes.bottomQuestion}>
          <Box className={classes.knowMoreContainer}>
            {renderTypography(
              'Know more about this product',
              classes.knowMoreText,
            )}
            {renderTypography(
              'Checkout the questions ',
              classes.checkoutQuestion,
            )}
          </Box>
          <Box className={classes.questionBox}>
            <Typography className={classes.statusText}>BEST</Typography>
            {renderTypography(
              'Q. Vamshi please provide the questions here to showcase?',
              classes.question,
            )}
            {renderTypography('A. Vamshi answer is this', classes.answer)}
          </Box>
        </Box>
      </Box>
      <IMTabGroup
        tabItems={tabsList}
        activeTab={selectedTab}
        onTabSelectionChange={handleTabChange}
        classes={{
          tabContainer: classes.tabContainer,
          tabListContainer: classes.selectedTabContainer,
          tabIndicator: classes.tabIndicator,
        }}
      />
      <Box className={classes.container}>
        <Typography className={classes.description}>Key Attributes</Typography>
        <IconInfolist />
      </Box>
      <Box className={classes.descriptionContainer}>
      <Typography className={classes.description}>Description</Typography>
      <Typography className={classes.descriptionSummary}>This 12 Watt Led Spot Light Cob Button Led Light.
      The Spot Direction Of Light is Fixed. This Is A Cob (Chip On Board) Led Technology With Lens…</Typography>
      </Box>
      <FrequentlyBoughtSection />
      <Button
        onClick={() => {}}
        className={classes.addItemToCart}
       >
        Add 4 items to favourites
      </Button>
      {renderProductList()}
      <Box sx={{
        height: 196,
        padding: 2,
      }}>
        <Avatar src={ExpertHelpBanner}
        sx={{
          height: 160,
          width: 390,
          borderRadius: 0,
          marginBottom: 30,
        }}
        />
      </Box>
       <Box className={classes.btn}>
      <Button
      startIcon={<QrCode2Icon />}
        onClick={() => navigate("/scanner")}
        className={classes.barcodeBtn}
       >
        Scan Again
      </Button>
      <Button
        onClick={onAddingToWishList}
        startIcon={<FavoriteBorderIcon />}
        className={classes.actionBtn}
       >
        Add to Wishlist
      </Button>
      </Box>
    </Box>
  );
};

export default ProductDetailsPage;
