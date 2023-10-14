import makeStyles from "@mui/styles/makeStyles";

import theme from "../../config/theme";

const useStyles = makeStyles(() => ({
  imageContainer: {
    backgroundColor: "white",
    height: 298,
    display: "flex",
    width: 298,
    position: "relative",
    right: 65,
    borderRadius: 298,
  },
  paperContainer: {
    height: 260,
    padding: theme.spacing(20, 10),
    backgroundColor: "#E4EFF0",
    border: 0,
    boxShadow: "none",
  },
  avatarContainer: {
    bottom: 296,
    left: 0,
    position: "relative",
    borderRadius: 298,
    border: "1px solid #D3D3D3",
  },
  avatar: {
    display: "flex",
    alignSelf: "flex-end",
    borderRadius: 298,
    borderColor: "black",
    backgroundColor: "transparent",
    width: 298,
    height: 298,
  },
}));

export default useStyles;
