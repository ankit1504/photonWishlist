import makeStyles from "@mui/styles/makeStyles";

import theme from "../../../config/theme";

const useStyles = makeStyles(
  () => ({
    wishListHeaderContainer: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      height: 55,
      boxShadow: `${theme.spacing(0, 3, 6, -1)}  ${
        theme.palette.IMOther.headerShadowTransparent12
      }`,
    },
    headerTitle: {
      color: "#3E4042",
      fontFamily: "Nunito",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: 700,
    },
    qrIcon: {
      height: 24,
      widht: 24,
    }
  }),
  { name: "wishListHeader", index: 1 }
);

export default useStyles;
