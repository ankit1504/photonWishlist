import makeStyles from "@mui/styles/makeStyles";

import theme from "../../../config/theme";

const useStyles = makeStyles(
  () => ({
    skuListItemContainer: {
      alignItems: "center",
      marginTop: theme.spacing(1),
    //   marginBottom: theme.spacing(14),
      height: 130,
      boxShadow: `${theme.spacing(0, 3, 6, -1)}  ${
        theme.palette.IMOther.headerShadowTransparent12
      }`,
    },
    avatar: {
        width: 60,
        minHeight: 60,
        borderRadius: 6,
        background: "grey",
    },
    skuListItemInfo: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      padding: theme.spacing(2),
    },
    infoPairContainer: {
        marginLeft: theme.spacing(2),
    },
    infoPairTitle: {
    },
    amountInfoSubTitle: {
        textDecoration: "line-through",
    },
    amountInfoContainer: {
        marginLeft: theme.spacing(20),
    },
    badge: {
        height: 24,
        backgroundColor: "#32AEB6",
        padding: theme.spacing(0, 2),
        marginLeft: 4,
    },
    priceInfoContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
    },
    inputContainer: {
        backgroundColor: "pink",
    },
    buttonContainerWithButtons: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        height: 20,
        width: 20,
        backgroundColor: "red",
    }
  }),
  { name: "skuListItem", index: 1 }
);

export default useStyles;
