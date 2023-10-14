import makeStyles from '@mui/styles/makeStyles';

import theme from '../../config/theme';

const useStyles = makeStyles(
  () => ({
    defaultBtn: {
      height: 48,
      fontSize: 16,
      fontWeight: 600,
      borderRadius: 4,
      textTransform: 'none',
      padding: theme.spacing(0, 7),
    },
    primary: {
      color: theme.palette.IMInfo.contrastText,
      background: theme?.palette?.IMInfo?.main,
      '&:hover': {
        color: theme.palette.IMInfo.contrastText,
        background: theme?.palette?.IMInfo?.main,
      },
    },
    secondary: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.palette.IMInfo.border,
      color: theme?.palette?.IMInfo?.main,
      background: theme.palette.IMInfo.lightBg,
      '&:hover': {
        color: theme?.palette?.IMInfo?.main,
        background: theme.palette.IMInfo.lightBg,
      },
    },
    tertiary: {
      fontSize: 14,
      fontWeight: 500,
      color: theme.palette.IMPrimary.contrastText,
    },
    icon: {
      width: 18,
      height: 18,
    },
    disabledBtn: {
      border: 'none',
      color: theme.palette.IMActions.disabled,
      background: theme.palette.IMActions.disabledBackground,
    },
  }),
  { name: 'imButton' },
);

export default useStyles;
