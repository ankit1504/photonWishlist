import { WidthFull } from "@mui/icons-material";
import makeStyles from "@mui/styles/makeStyles";
import { padding } from "@mui/system";

import theme from "../../config/theme";
import BackGroundImage from "../../../src/assets/svg/background.webp";

const useStyles = makeStyles(
  () => ({
    tabIndicator: {
      backgroundColor: "#32AEB6",
    },
    tabContainer: {
      fontSize: 14,
      fontWeight: 400,
      color: theme.palette.text.primary,
      backgroundColor: "#EBF6F6",
    },
    selectedTabContainer: {
      "& .Mui-selected": {
        fontSize: 14,
        fontWeight: 700,
        color: "#32AEB6",
      },
    },
    container: {
      padding: theme.spacing(3, 4, 3, 4),
    },
    text: {
      display: "flex",
      padding: theme.spacing(3, 4),
      flexDirection: "column",
      alignItems: "flex-start",
      gap: theme.spacing(8),
      background: theme.palette.IMPrimary.contrastText,
    },
    avatar: {
      display: "flex",
      alignSelf: "center",
      borderRadius: 298,
      borderColor: "black",
      backgroundColor: "transparent",
      width: 185,
      height: 185,
    },
    mobileNumber: {
      display: "flex",
      textAlign: "center",
      padding: theme.spacing(1, 3, 1, 3),
      fontFamily: "Nunito",
      fontSize: 18,
      fontWeight: 500,
      color: "#1D1D1D",
    },
    checkoutText: {
      display: "flex",
      textAlign: "center",
      padding: theme.spacing(0, 20, 0, 20),
      fontFamily: "Nunito",
      fontSize: 12,
      fontWeight: 400,
      color: "#686868",
    },
    closeIcon: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "flex-end",
      margin: theme.spacing(3, 3, 2, 2),
    },
    header: {
      display: "flex",
      flexDirection: "column",
    },
    buttonClasses: {
      "& .css-1e6y48t-MuiButtonBase-root-MuiButton-root:hover": {
        backgroundColor: "#1D1D1D",
      },
      display: "flex",
      width: 360,
      fontFamily: "Nunito",
      fontSize: 16,
      fontWeight: 600,
      color: "#FFFFFF",
      backgroundColor: "#1D1D1D",
      alignSelf: "center",
      margin: theme.spacing(3, 3, 3, 3),
    },
    button: {
      display: "flex",
      boxShadow: "inset 0px 1px 0px rgba(80, 80, 80, 0.15)",
    },
    sideDrawer: {
      display: "flex",
    },
  }),
  { name: "homePage", index: 1 }
);

export default useStyles;
