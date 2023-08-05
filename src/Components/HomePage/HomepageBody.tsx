import React, { useEffect, useState } from "react"
import PrimaryButton from "../Boutons/Button";
import Marques from "../Items/Marques";
import Tirelire from './../../assets/Économie.png'
import styles from "./styles";
import styled from '@mui/styled-engine/index';
import dotenv from 'dotenv';

import { SxProps } from '@mui/system';
interface DivProps {
  sx?: SxProps;
}

const Div = styled('div')<DivProps>(({ theme, sx }) => ({
  // Définir vos styles par défaut ici...
  ...sx,  // Appliquer les styles supplémentaires fournis par la prop sx
}));

const H1 = styled('h1')<DivProps>(({ theme, sx }) => ({
  // Définir vos styles par défaut ici...
  ...sx,  // Appliquer les styles supplémentaires fournis par la prop sx
}));
const Span = styled('span')<DivProps>(({ theme, sx }) => ({
  // Définir vos styles par défaut ici...
  ...sx,  // Appliquer les styles supplémentaires fournis par la prop sx
}));

const Image = styled('img')<DivProps>(({ theme, sx }) => ({
  // Définir vos styles par défaut ici...
  ...sx,  // Appliquer les styles supplémentaires fournis par la prop sx
}));

dotenv.config();
const HomepageBody: React.FC = () => {
    const [data, setData] = useState([]);
    const baseId = process.env.BASEID;
    const apiKey = process.env.APIKEY
    const tableName =process.env.TABLENAME ;
    const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;
    
    useEffect(()=>{
      fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
        headers: { Authorization: `Bearer ${apiKey}` },
        method: 'GET',
      })
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          setData(json.records)
        })
        .catch((error) => console.error(error));
    },[])
    
    return (
      <>
        <Div sx={styles.HomePageBody}>
            <Div sx={styles.HomePageBodyLeft}> 
                <Div sx={styles.line}>
                  <H1 sx={styles.Title}>Découvre des marques
                  <Span sx={styles.greenHighlight}>écoresponsables </Span>et 
                  <Span style={styles.greenHighlight}>sans te ruiner</Span></H1>
                </Div>
                <p>Tu es étudiant ? Alors profite de nos réductions chez des marques écoresponsables !</p>
                <PrimaryButton title="➡ Je suis étudiant 🤩"/>
            </Div>
             <Div sx={styles.HomePageBodyRight}>
                <Image alt="Image de tirelire" src={Tirelire} sx={styles.imagePigBank}/>
            </Div>
        </Div>
        <Marques data={data} title="Nos partenaires"/>
      </>
    );
  };

export default HomepageBody;
