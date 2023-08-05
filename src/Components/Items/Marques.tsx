import React, { useEffect, useState } from "react"
import Filtres from "../Filtres/Filtres";
import Marque from "./Marque";
import SousFiltres from "../Filtres/SousFiltres";
import { SxProps } from "@mui/material";
import { styled } from "styled-components";
import styles from "./style";
import { Box } from "@mui/system";
import dotenv from 'dotenv';
interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
    sx?: SxProps;
  }
  
  
  const Div = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
    <Box ref={ref} {...props}>
      {props.children}
    </Box>
  ));


interface MarquesProps{
    title:string,
    data:Array<any>,
}
const Marques: React.FC<MarquesProps> = ({title, data}) => {
    const baseId = process.env.BASEID;
    const apiKey = process.env.APIKEY
    const tableName = process.env.TABLENAME;
    const [marques, updateMarques]= useState<any[]>([])
    const [categorie, setCategorie]= useState("Tout")
    const [SousCategorie, setSousCategorie]= useState([])
    const [sousFiltreData, setSousFiltresData] = useState<any[]>([]);
    const [SortedsousFiltreData, setSortedSousFiltresData] = useState<any[]>([]);
    const [SortedsousFiltreMarques, setSortedSousFiltresMarques] = useState<any[]>([]);//
    useEffect(()=>{
        fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
          headers: { Authorization: `Bearer ${apiKey}` },
          method: 'GET',
        })
          .then((response) => {
            return response.json()
          })
          .then((json) => {
            setSousFiltresData(json.records)
          })
          .catch((error) => console.error(error));
      },[])
    useEffect(()=>{
        updateMarques([...data])
    },[data])
    useEffect(()=>{
        setSortedSousFiltresMarques([])
        let SortedsousFiltreMarques:String[] = [];
        for(const marque of sousFiltreData){
            //console.log(marque.fields.SousCatégorie, SousCategorie," ", marque.fields.SousCatégorie.includes(SousCategorie) )
            if(SousCategorie.length!= undefined){
                if(marque.fields.SousCatégorie.includes(SousCategorie)){
                    SortedsousFiltreMarques.push(marque.fields.Nom);
                }
            }
        }
        console.log(SortedsousFiltreMarques)
        setSortedSousFiltresMarques([...SortedsousFiltreMarques]);
        console.log("Marques", SousCategorie,SortedsousFiltreMarques)
        //setSortedSousFiltresMarques(marques)
    },[SousCategorie])
    useEffect(()=>{
        if(categorie!="Tout"){
            const SousCategorie: String[] = [];
            setSortedSousFiltresData([])
            setSortedSousFiltresMarques([])
            for(const marque of sousFiltreData){
                if(marque.fields.Catégorie == categorie){
                    for(const sousCat of marque.fields.SousCatégorie){
                        if(!SousCategorie.includes(sousCat)){
                            SousCategorie.push(sousCat)
                        }
                    }
                }
            }
            setSortedSousFiltresData([...SousCategorie])
        }
        else{
            setSortedSousFiltresData([])
            setSortedSousFiltresMarques([])
        }
    },[categorie])
    return (
        <Div sx={styles.center}>
            <Div>
                <h2>{title}</h2>
                <Filtres selected={categorie} update={setCategorie}/>
                <SousFiltres selected={SousCategorie} update={setSousCategorie} sousFiltres={SortedsousFiltreData}/>
            </Div>
            <Div sx={styles.Marques}>
                {marques.map((marque)=>{
                    return (<Marque description={marque.fields.Description_prévisualisation} categories={marque.fields.Categories} logo={marque.fields.lien_logo_image} banniere={marque.fields.imageBannière} categorieSelected={categorie} id={marque.id} marquesSousFiltres={SortedsousFiltreMarques} Nom={marque.fields.Nom} sousCategorie={SousCategorie}/> )
                })}
            </Div>
        </Div>
    );
  };
export default Marques;