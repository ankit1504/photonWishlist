
    import { WidthFull } from "@mui/icons-material";
    import makeStyles from "@mui/styles/makeStyles";
    import { padding } from "@mui/system";
    
    import theme from "../../config/theme";
    
    const useStyles = makeStyles(
      () => ({
        rowContainer: {
          width: 329,
          display:"flex",
          flexDirection:"row",
      
        },
        container: {
            padding: theme.spacing(1,1,1,1),
            display:"flex",
            flexDirection:"row",  
            flexWrap:"wrap",
            justifyContent:"space-between"
            
          },
          childContainer:{
            display: "flex",
            flexDirection:"column",
            width:100
          },
          header:{

            color:"#757575",
            fontFamily:"Nunito",
            fontSize:"12px",
            fontStyle:"normal",
            fontWeight:"400",
            lineHeight:"16px",
            letterSpacing:"-0.1px",

            
          },

          footer:{
            color:"#1D1D1D",
            fontFamily:"Nunito",
            fontSize:"14px",
            fontStyle:"normal",
            fontWeight:"600",
            lineHeight:"20px",
            letterSpacing:"-0.1px"

          },
          svg:{
            backgroundColor:"grey",
            borderRadius: 100,

          }
       
      }),
      { name: "homePage", index: 1 }
    );
    
    export default useStyles;
    