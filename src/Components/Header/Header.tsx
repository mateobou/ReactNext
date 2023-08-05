import React from "react"

interface HeaderProps {
    title: string;
    subtitle?: string;
  }
const Links = ["Marques","Astuces","FAQ","Illicogreen ?"];
const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
    return (
      <header>
        <div className="VisibleResponsiveContainer">
          <a href={`/`}><h1>{title}</h1></a>
          <input className="checkbox" type={"checkbox"} id="check"></input>
          <label htmlFor="check">Burger</label>
        </div>
        {subtitle && <h2>{subtitle}</h2>}
        <div className="linksContainer">
          {Links.map(link => {return (  
            <a>{link}</a>
          )})}
          <p>Se connecter / S'inscrire</p>
        </div>
      </header>
    );
  };
export default Header;