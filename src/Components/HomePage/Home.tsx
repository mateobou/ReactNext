import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import styled from '@mui/styled-engine/index';
import { SxProps } from '@mui/system';
import { PaysContext, PaysProvider } from "../../Pages/pays/Hook/PaysContext";

interface DivProps {
  sx?: SxProps;
}

const Div = styled('div')<DivProps>(({ theme, sx }) => ({
  ...sx,  
}));

const Home: React.FC = () => {
    const { pays, deletePays, fetchPays, addPays } = useContext(PaysContext);
    const [newPays,setNewPays]=useState<string>()

    useEffect(() => {
        console.log(fetchPays());
    }, [fetchPays]);
    useEffect(()=>{
        console.log(pays)
    },[pays])
    return (
        <PaysProvider>
            <form onSubmit={(e)=>{
    e.preventDefault(); 
    let inputPays:string  = newPays ? newPays : ""; 
    addPays({nom:inputPays, description:""}); 
}}>
    <label>Ajouter un pays</label>
    <input name="pays" placeholder="Pays ici" value={newPays} onChange={(e)=>{
        setNewPays(e.target.value)
    }}/>
    <button type="submit">Ajouter</button>
</form>
            <Div sx={styles.HomePageBody}>
                {pays && pays.map((pay, i) => 
                    <div key={i}>
                        <a href={"http://localhost:3000/pays/" + pay.nom}>{pay.nom}</a>
                        <button onClick={() => deletePays(i)}>Supprimer</button>
                    </div>
                )}
            </Div>
        </PaysProvider>
    );
}

export default Home;
