import makeStyles from "@mui/styles/makeStyles";

import theme from "../../config/theme";

const useStyles = makeStyles(
  () => ({
    header: {
      display: "flex",
      flexDirection: "row",
      padding: theme.spacing(4, 6),
      alignItems: "center",
      overflowX: "hidden",
      height: 100,
      gap: "16px",
      background: theme.palette.IMInfo.contrastText,
      boxShadow: `${theme.spacing(0, 3, 6, -1)}  ${
        theme.palette.IMOther.headerShadowTransparent12
      }`,
    },
    subHeader: {
      display: "flex",
      flexDirection: "row",
      width: "fit-content",
      maxHeight: "60px",
      justifyContent: "center",
      alignItems: "center",
    },
    subHeaderInfoTitle: {
      marginLeft: theme.spacing(4),
      ...theme.typography.h4,
    },
    emptyBox: {
      flex: "1",
    },
    buttonInfoContainer: {
      display: "flex",
      justifyContent: "column-end",
      alignItems: "center",
    },
    backButtonIcon: {
      height: 32,
      width: 32,
      color: theme.palette.text.primary,
    },
    backButtonContainer: {
      padding: theme.spacing(0),
    },
    subHeaderInfoContainer: {
      flexDirection: "column",
    },
    rightPrimaryText: {
      marginRight: theme.spacing(4),
      ...theme.typography.body2,
    },
  }),
  { name: "IMSubHeader", index: 1 }
);

export default useStyles;
