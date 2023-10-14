import makeStyles from "@mui/styles/makeStyles";

import theme from "../../config/theme";

const useStyles = makeStyles(
  () => ({
    circleIconStyle: {
      width: "4px",
      height: "4px",
      color: theme.palette.text.disabled,
      margin: theme.spacing(0, 1, 0, 1),
    },
    breadcrumbsStyle: {
      height: "22px",
      margin: theme.spacing(0, 0, 0, 4),
      alignItems: "center",
    },
    breadcrumbsLinkStyle: {
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
    breadcrumbsLastLinkStyle: {
      textDecoration: "none",
      color: theme.palette.text.disabled,
    },
  }),
  { name: "imBreadCrumbs" }
);

export default useStyles;
