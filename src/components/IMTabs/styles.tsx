import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  tabListContainer: {
    '& .Mui-selected': {
      color: theme.palette.IMPrimary.main,
    },
    color: theme.palette.text.secondary,
  },
  tabContainer: {
    size: 13,
    fontWeight: 600,
  },
  tabIndicator: {
    backgroundColor: theme.palette.IMPrimary.main,
  },
  selectedChipContainer: {
    height: 25,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: theme.palette.IMInfo.main,
  },
  chipContainer: {
    height: 25,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: theme.palette.IMOther.divider,
  },
  selectedTabLabel: {
    fontSize: 16,
    fontWeight: 600,
    textTransform: 'capitalize',
    color: theme.palette.text.primary,
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
  },
  selectedChipCount: {
    fontSize: 12,
    fontWeight: 700,
    color: theme.palette.IMPrimary.contrastText,
  },
  chipCount: {
    fontSize: 12,
    fontWeight: 700,
    color: theme.palette.text.secondary,
  },
  countLabelContainer: {
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
}));

export default useStyles;
