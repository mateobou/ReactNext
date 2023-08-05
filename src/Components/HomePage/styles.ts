import { CSSObject, css,Theme } from '@emotion/react'
import { createTheme, makeStyles } from '@mui/material'
import { rem } from 'polished'
const styles = {
    HomePageBodyRight: {
        width: '70%',
        margin: '0px',
    },
    HomePageBodyLeft: {
        width: '70%',
        margin: '0px',
        '& h1': {
            margin: '10px 10px 10px 0px',
        },
    },
    HomePageBody: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width:"100%"
    },
    greenHighlight: {
        alignSelf: 'flex-start',
        margin: '0px 0px 10px',
        fontSize: rem(25),
        fontFamily: 'Cocogoose',
        fontWeight: '900',
        padding: '5px 20px',
        borderRadius: '10px',
        backgroundColor: 'rgb(44, 165, 141)',
        opacity: 1,
        textDecoration: 'none',
        color: 'white',
    },
    imagePigBank:{
        width: "100%",

    }

    ,
    line: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        width: '100%',
    },
    Title:{
        display:'flex',
        fontSize:rem(25),
        width:'auto',
        flexWrap:"wrap",
        textAlign:'center'
    }
}

export default styles
    
