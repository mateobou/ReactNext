import React, { useEffect, useState } from "react"
import dotenv from 'dotenv';
dotenv.config();
const MarquePage: React.FC = () => {
    const [Marque, setMarque] = useState<Marque>();
    const queryParameters = new URLSearchParams(window.location.search)
    const id = queryParameters.get("id")
    const baseId = process.env.BASEID;
    const apiKey = process.env.API_KEY;
    const tableName = process.env.TABLENAME;
    interface Marque {
        Nom:String;
        Avantage_ecoresponsable:String;
        Description_de_la_marque:String;
        Images_details:string;
        reduction:string;
        
    }
    useEffect(()=>{
        console.log(id)
        fetch(`https://api.airtable.com/v0/${baseId}/${tableName}/${id}`, {
        headers: { Authorization: `Bearer ${apiKey}` },
        method: 'GET',
      })
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          setMarque(json.fields)
          console.log(Marque)
        })
        .catch((error) => console.error(error));
    },[])
    return (
        <div>
            <h1>{Marque && Marque.Nom}</h1>
                <div>
                    <p>Code promo</p>
                </div>
            <h2>{Marque?.reduction}</h2>
            <div>
                <h2>Description de la marque</h2>
                <p>{Marque && Marque.Description_de_la_marque}</p>
                
            </div>
            <div>
                <h2>Avantages Ecoresponsables</h2>
                <p>{Marque && Marque.Avantage_ecoresponsable}</p> 
            </div>
            <img src={Marque?.Images_details.split(',')[0]}/>
            <img src={Marque?.Images_details.split(',')[1]}/>
            <img src={Marque?.Images_details.split(',')[2]}/>
        </div>
    );
  };
export default MarquePage;