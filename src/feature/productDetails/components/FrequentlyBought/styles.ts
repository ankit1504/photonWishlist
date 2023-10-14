import makeStyles from "@mui/styles/makeStyles";

import theme from "../../../../config/theme";

const useStyles = makeStyles(
  () => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 256,
        gap: theme.spacing(3),
        padding: theme.spacing(6, 4),
    },
    rowContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
      display: 'flex',
      flex: 2,
      // backgroundColor: 'yellow',
      gap: theme.spacing(1),
      flexDirection: 'column',
      justifyContent: 'center',
      // alignItems: 'center',
    },
    textStyles: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: theme.spacing(5),
    },
    boxImageWithProduct: {
      height: 200,
      width: 130,
      margin: theme.spacing(4, 0, 0, 0),
      border: '2px solid var(--other-stroke, #C4C4C4)',
      borderRadius: 8,
    },
    imageContainer: {
      height: 130,
      width: 130,
      borderRadius: 0,
      backgroundImage: `url('https://pim-asset-storage.s3.ap-south-1.amazonaws.com/ImageRepository/31AB99B1-AFDE-49A7-A025-C2F1099AE9CB/variants/IM10017639/IM10017639.jpeg')`,
    },
    productName: {
      fontSize: 12,
      fontWeight: 500,
      width: 110,
      lineHeight: theme.spacing(4),
    },
    nameContainer: {
      height: 70,
      width: 130,
      padding: theme.spacing(2),
    },
    priceDetails: {
      fontWeight: 600,
      fontSize: 12,
      lineHeight: theme.spacing(5),
      margin: theme.spacing(0, 1, 0, 0),
    },
    perUnit: {
      fontWeight: 300,
      fontSize: 12,
      lineHeight: theme.spacing(5),
    },
    boxRightImageWithProduct: {
      height: 178,
      width: 186,
      // margin: theme.spacing(4, 0, 0, 0),
      border: '2px solid var(--other-stroke, #C4C4C4)',
      borderRadius: 8,
      margin: theme.spacing(0, 0, 3, 2.5),
    },
  }),
  { name: "productDetailsPage", index: 1 }
);

export default useStyles;
