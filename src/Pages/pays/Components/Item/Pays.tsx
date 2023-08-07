import React, { useEffect, useState } from "react"
import styled, { FunctionInterpolation } from '@mui/styled-engine/index';

import { SxProps } from '@mui/system';
import styles from "./style";
interface DivProps {
  sx?: SxProps;
}

const A = styled('a')<DivProps>(({ sx }) => ({
  // Définir vos styles par défaut ici...
  ...sx,  // Appliquer les styles supplémentaires fournis par la prop sx
}));
const Div = styled('div')<DivProps>(({ sx }) => ({
  // Définir vos styles par défaut ici...
  ...sx,  // Appliquer les styles supplémentaires fournis par la prop sx
}));

const Image = styled('img')<DivProps>(({ theme, sx }) => ({
  // Définir vos styles par défaut ici...
  ...sx,  // Appliquer les styles supplémentaires fournis par la prop sx
}));

const P = styled('p')<DivProps>(({ theme, sx }) => ({
  // Définir vos styles par défaut ici...
  ...sx,  // Appliquer les styles supplémentaires fournis par la prop sx
}));
interface MarqueProps {
    description: string;
    categories:string[];
    logo: string;
    banniere: string;
    categorieSelected:string;
    id:string;
    marquesSousFiltres:Object[];
    Nom:string;
    sousCategorie:string[];
  }
const Marque: React.FC<MarqueProps> = ({ description, categories, logo, banniere, categorieSelected, sousCategorie, marquesSousFiltres, Nom, id }) => {
    const [styleMarque, updateStyleMarque] = useState<string>()
    useEffect(()=>console.log("marquesSousFiltres ",marquesSousFiltres),[marquesSousFiltres])
    function isDisplayed(){
      console.log(categorieSelected, marquesSousFiltres.length==0)
      if(marquesSousFiltres.length==0)
      {
        if(categorieSelected=="Tout"){
          updateStyleMarque("Marque")
        }
        else if(categorieSelected!="Tout"&& categories.includes(categorieSelected))
        {
          updateStyleMarque("Marque")
        }
        else{
          updateStyleMarque("invisible")
        }
      }
      else{
        console.log("else")
        if(marquesSousFiltres.includes(Nom)){
          console.log(marquesSousFiltres, Nom, sousCategorie, Nom, styleMarque)
          updateStyleMarque("Marque")
        }
        else{
          updateStyleMarque("invisible")
        }
      }
      
    }
    useEffect(()=>{
      console.log(sousCategorie, categorieSelected, marquesSousFiltres)
      isDisplayed()
    },[categorieSelected,marquesSousFiltres])
    return (
      <A sx={styles.Marque} href={`marque?id=`+id}>
        <Div sx={{...styles.styleMarque,backgroundImage:`url(${banniere})`,...styles.imageBanniere}} >
          <Image src={logo} alt="logo" sx={styles.logo}/>
        </Div>
        <Div sx={styles}>
          <P>{Nom}</P>
          <P sx={styles.descriptionMarquePrevisualisation}>{description}</P>
        </Div>
      </A>
    );
  };
export default Marque;