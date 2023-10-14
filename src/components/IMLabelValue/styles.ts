import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(
  () => ({
    container: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: 14,
      fontWeight: 400,
      color: "#637381",
    },
    value: {
      fontSize: 16,
      fontWeight: 600,
      color: "#212B36",
    },
  }),
  { name: "imLabelValue" }
);

export default useStyles;
