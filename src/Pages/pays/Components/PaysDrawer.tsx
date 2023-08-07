import React, { useEffect, useState } from "react"

import { SxProps } from "@mui/material";
import { styled } from "styled-components";
import { Box } from "@mui/system";
import styles from "./style";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
    sx?: SxProps;
  }
  
  
  const Div = React.forwardRef<HTMLDivElement, DivProps>((props, ref) => (
    <Box ref={ref} {...props}>
      {props.children}
    </Box>
  ));



const PaysDrawer: React.FC = () => {
    const [Pays, updatePays]= useState<any[]>([])
    const baseId = undefined //process.env.REACT_APP_BASEID;
    const apiKey = undefined//process.env.REACT_APP_APIKEY;
    const tableName = undefined//process.env.REACT_APP_TABLENAME;
    const jsonServerUrl = "http://localhost:8080/marques";

    async function fetchPays(){
        const response = await fetch(jsonServerUrl);

        const json = await response.json();
        updatePays(json);
        return json
    }
    useEffect(()=>{
        fetchPays()
    },[])
    useEffect(()=>{
        console.log(Pays)
    },[Pays])
    return (
        <Div sx={styles.center}>
            <Div sx={styles.Marques}>
                {Pays.map((pays)=>{
                    return (<h1>{pays.nom}</h1> )
                })}
            </Div>
        </Div>
    );
  };
export default PaysDrawer;