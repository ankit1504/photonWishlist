import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    '& label.Mui-focused': {
      color: theme.palette.IMPrimary.main,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.IMPrimary.main,
    },
    '& .MuiInput-root:hover::before': {
      borderWidth: 1,
      borderBottomColor: theme.palette.IMPrimary.main,
    },
    '& .MuiFilledInput-root:hover::before': {
      borderBottomColor: theme.palette.IMPrimary.main,
    },
    '& .MuiFilledInput-underline:after': {
      borderColor: theme.palette.IMPrimary.main,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.IMOther.stroke,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.IMPrimary.main,
      },
      '&.Mui-focused fieldset': {
        borderWidth: 2,
        borderColor: theme.palette.IMPrimary.main,
      },
    },
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
  endIcon: {
    height: 24,
    width: 24,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
    fontWeight: 400,
    color: theme.palette.text.secondary,
    textAlign: 'start',
  },
  errorInput: {
    '& .MuiInput': {
      borderColor: theme.palette.IMError.main,
    },
  },
  error: {
    color: theme.palette.IMError.main,
  },
}));

export default useStyles;
