import React, { useState } from "react"
import styles from "./styles";
import styled from "@emotion/styled";
interface FiltresProps {
    selected: string[];
    update:Function;
    sousFiltres:string[]
  }
const Div = styled('div')`${styles.filtre}`;
const Root = styled('div')`${styles.manyFilters}`;
const SousFiltre = styled('div')`${styles.sousFiltre}`;
const SousFiltreSelect = styled('div')`${styles.sousFiltreSelected}`;
const SousFiltres: React.FC<FiltresProps> = ({ selected, update, sousFiltres }) => {
    return (
      <Root >
        {sousFiltres.length>0 && sousFiltres.map((filtre)=>{
          return (
            selected.includes(filtre) ? <SousFiltreSelect onClick={()=>update(filtre)}><p>{filtre}</p></SousFiltreSelect> :<SousFiltre onClick={()=>update(filtre)}><p>{filtre}</p></SousFiltre>
            )
        })}
      </Root>
    );
  };
export default SousFiltres;