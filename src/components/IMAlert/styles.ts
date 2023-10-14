import makeStyles from "@mui/styles/makeStyles";

import theme from "../../config/theme";

const useStyles = makeStyles(
  () => ({
    root: {
      alignItems: "center",
    },
    alertIcon: {
      width: 16,
      height: 16,
      padding: theme.spacing(0),
    },
    alertMessage: {
      ...theme.typography.caption,
      padding: theme.spacing(0),
      marginTop: theme.spacing(1.5),
    },
    closeButton: {
      width: 25,
      height: 25,
      cursor: "pointer",
      paddingRight: theme.spacing(2),
      color: theme.palette.IMInfo.textDark,
    },
  }),
  { name: "IMAlert", index: 1 }
);

export default useStyles;
