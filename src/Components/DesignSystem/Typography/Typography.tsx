import React, { useState } from "react";

const filterArray: string[] = ["Tout", "Alimentaire", "Mode", "Service", "Hygiène et beauté", "Maison et divers"];

interface TypographyProps {
    variant: string;
    text:string;
}
const Typography: React.FC<TypographyProps> = ({ variant, text }) => {
    switch (variant) {
      case "h1":
        return <h1>{text}</h1>
        case "h2":
            return <h2>{text}</h2>
        case "h3":
            return <h3>{text}</h3>
        case "h4":
            return <h4>{text}</h4>
        case "h5":
            return <h5>{text}</h5>
        case "h6":
            return <h6>{text}</h6>
      default:
        return <p>{text}</p>; // ou retournez un autre élément React par défaut
    }
  };
  
