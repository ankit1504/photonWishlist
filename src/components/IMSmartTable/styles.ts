import makeStyles from '@mui/styles/makeStyles';

import theme from '../../config/theme';

const useStyles = makeStyles(
  () => ({
    tableContainer: {},
    tableHeader: {
      height: 54,
      width: '100%',
    },
    headerCell: {
      height: 54,
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: 500,
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.IMOther.background,
      boxShadow: 'inset 0px -1px 0px rgba(145, 158, 171, 0.24)',
      '&:first-child': {
        paddingLeft: theme.spacing(8),
      },
      '&:last-child': {
        paddingRight: theme.spacing(4),
      },
    },
    multiSelectHeaderCell: {
      padding: theme.spacing(0),
      '&:first-child': {
        paddingLeft: theme.spacing(0),
      },
    },
    tableDataRow: {
      height: 64,
      backgroundColor: theme.palette?.IMPrimary?.contrastText,
      boxShadow: 'inset 0px -1px 0px rgba(145, 158, 171, 0.24)',
      '&:hover': {
        backgroundColor: theme.palette.IMOther.background,
      },
    },
    selectableTableRow: {
      cursor: 'pointer',
    },
    tableSelectedRow: {
      backgroundColor: theme.palette.IMPrimary.background,
      '&:hover': {
        backgroundColor: theme.palette.IMPrimary.background,
      },
    },
    tableBodyCell: {
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: 400,
      padding: theme.spacing(1),
      boxShadow: 'inset 0px -1px 0px rgba(145, 158, 171, 0.24)',
      '&:first-child': {
        paddingLeft: theme.spacing(8),
      },
      '&:last-child': {
        paddingRight: theme.spacing(4),
      },
    },
    left: {},
    right: {
      '& >*': {
        float: 'right',
      },
    },
    center: {
      '& >*': {
        marginLeft: 'auto',
        marginRight: 'auto',
        float: 'none',
      },
    },
    footerCell: {
      textAlign: 'center',
      padding: theme.spacing(3),
      boxShadow: 'inset 0px -1px 0px rgba(80, 80, 80, 0.15)',
    },
    tableFooter: {
      height: 64,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 5),
      backgroundColor: theme.palette.IMPrimary?.contrastText,
    },
    checkBoxContainer: {
      display: 'flex',
    },
    input: {
      height: 3,
    },
    searchInput: {
      borderColor: theme.palette.grey[300],
      backgroundColor: theme.palette.IMPrimary.contrastText,
      '& label.Mui-focused': {
        color: theme.palette.IMPrimary.main,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.IMPrimary.main,
      },
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: theme.palette.IMPrimary.main,
        },
        '&.Mui-focused fieldset': {
          borderColor: theme.palette.IMPrimary.main,
        },
      },
    },
    helperItemCell: {
      width: '100%',
      padding: theme.spacing(0, 4, 2, 4),
    },
    errorTitle: {
      ...theme.typography.h4,
    },
    errorSubtitle: {
      width: 470,
      fontSize: 16,
      letterSpacing: 0.25,
    },
  }),
  { name: 'imSmartTable' },
);

export default useStyles;
