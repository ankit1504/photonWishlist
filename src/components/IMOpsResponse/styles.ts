import makeStyles from "@mui/styles/makeStyles";

import theme from "../../config/theme";

const useStyles = makeStyles(() => ({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "inherit",
    paddingLeft: theme.spacing(0),
  },
  title: {
    ...theme.typography.h4,
  },
  subtitle: {
    width: 470,
    fontSize: 16,
    letterSpacing: 0.25,
  },
}));

export default useStyles;
