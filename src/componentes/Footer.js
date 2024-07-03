import React from "react";
import linkedin from "../imagens/linkedin.png";

function Footer() {

    return (
      <div className="footerCaixa">
        <div className="txtFooter">
            <img src={linkedin}/>
            <p>@Valdir Junior</p>
            <p>@Thalia Carvalho Nunes</p>
        </div>
      </div>
    );
  }

  export default Footer;