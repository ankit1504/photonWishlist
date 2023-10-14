import makeStyles from "@mui/styles/makeStyles";

import theme from "../../config/theme";

const useStyles = makeStyles(
  () => ({
    subContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      bottom: 90,
      padding: theme.spacing(2, 5),
      gap: theme.spacing(5),
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    howWish: {
      fontSize: 14,
      fontWeight: 700,
      fontFamily: 'Nunito',
      color: '#4F585E',
    },
    clickHere: {
      fontSize: 14,
      fontWeight: 700,
      textTransform: 'capitalize',
      color: '#32AEB6',
      fontFamily: 'Nunito',
      paddingLeft: theme.spacing(3),
      border: 0,
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    wishListBottom: {
      backgroundColor: "#FFF",
      position: "fixed",
      zIndex: 999,
      bottom: 0,
      height: 60,
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1,
      display: "flex",
      width: "100%",
      boxShadow: `${theme.spacing(-10, 3, 6, -1)}  ${theme.palette.IMOther.headerShadowTransparent12
        }`,
    },
    skuList: {
      marginBottom: theme.spacing(14),
    },
    shareButton: {
      backgroundColor: "black",
      margin: theme.spacing(0, 3),
      fontSize: 12,
    },
    saveButton: {
      backgroundColor: "white",
      margin: theme.spacing(0, 3),
      color: "black",
      borderColor: "black",
    },
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
      "& .MuiButtonBase-root-MuiButton-root:hover": {
        backgroundColor: "black",
      },
      display: "flex",
      width: 360,
      fontFamily: "Nunito",
      fontSize: 16,
      fontWeight: 600,
      color: "#FFFFFF",
      backgroundColor: "black",
      alignSelf: "center",
      margin: theme.spacing(3, 3, 3, 3),
      '&:hover': {
        backgroundColor: 'black',
      },
    },
    button: {
      display: "flex",
      boxShadow: "inset 0px 1px 0px rgba(80, 80, 80, 0.15)",
    },
    sideDrawer: {
      display: "flex",
    },
    barcodeBtn: {
      height: 48,
      fontSize: 16,
      fontWeight: 600,
      textTransform: 'capitalize',
      flex: 1,
      color: 'black',
      backgroundColor: 'white',
      border: 1,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'black',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    actionBtn: {
      height: 48,
      fontSize: 16,
      fontWeight: 600,
      textTransform: 'capitalize',
      color: theme.palette.IMPrimary.contrastText,
      backgroundColor: 'black',
      '&:hover': {
        backgroundColor: 'black',
      },
    },
    btn: {
      display: 'flex',
      gap: theme.spacing(4),
      bottom: 0,
      alignItems: 'center',
      zIndex: 999,
      position: 'fixed',
      width: "96%",
      textTransform: 'capitalize',
      backgroundColor: "#FFF",
      padding: theme.spacing(4, 2),
      boxShadow: '0px 1px 16px rgba(80, 80, 80, 0.12), 0px 1px 16px rgba(80, 80, 80, 0.12), 0px 1px 16px rgba(80, 80, 80, 0.12)',
    }
  }),
  { name: "wishListPage", index: 1 }
);

export default useStyles;
