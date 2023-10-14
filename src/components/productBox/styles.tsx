import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({

container :{
    width: 174,
    height:250,
    border: `1px solid #EEEEEE`,
    borderRadius: 16,
    margin:theme.spacing(4,4)
},
favourite :{
    position:'relative',
zIndex:6,
},
avatar: {
    width: 174,
    height: 174,
    borderRadius:0,
  },
  productText :{
    fontFamily: 'Nunito',
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: '-0.10000000149011612px',
    textAlign: 'left',
    marginLeft: 5,
  },
  priceText :{
    fontFamily: 'Nunito',
    fontSize: 18,
    fontWeight: 100,
    letterSpacing: '-0.10000000149011612px',
    textAlign: 'left',
    marginLeft: 5,
  },
  pricing :{
    display: "flex",
    flexDirection: "row",
  },
  badge: {
    height: 24,
    backgroundColor: "#465A5B",
    padding: theme.spacing(0, 2),
    marginLeft: 4,
    zIndex:6,
    position:'relative',bottom:'41px',},
priceDetails :{
marginTop :-20
},
  unitPrice :{color: '#757575', marginLeft :7}
}));

export default useStyles;
