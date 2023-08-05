import { rem } from "polished";

const styles = {
    styleMarque: {
      textDecoration: "none",
      color: "#282c34"
    },
    descriptionMarquePrevisualisation: {
      textDecoration: "none"
    },
    Marque: {
      top: 0,
      left: 0,
      display: "flex",
      flexDirection:"row",
      width: "100%",
      margin: 0,
      objectFit: "cover",
      borderRadius: 0,
      textDecoration:'none',
      color:'#000',
      marin:'30px 30px',
      height:rem(200),

    },
    logo: {
      width: "90px",
      
      backgroundColor: "#FFFFFF",
      padding: "20px"
    },
    imageBanniere: {
      width: "40vw",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    Marques: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      flexWrap: "wrap"
    },
    invisible: {
      display: "none"
    },
    center: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      },
      rightContainer:{
        width:'60vw'
      }
  };
  
  export default styles;
  