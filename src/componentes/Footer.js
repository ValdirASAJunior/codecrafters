import React from "react";
import linkedin from "../imagens/linkedin.png";
import seta from "../imagens/seta.png";

function Footer() {

    return (
      <footer>
        <div className="txtFooter" id="footer">
          <img src={linkedin}/>
          <p>@Valdir Junior</p>
          <p>@Thalia Carvalho Nunes</p>
        </div>
        <div className="subir">
          <a href="#inicio">
            <img src={seta}/>
          </a>
        </div>
      </footer>
    );
  }

  export default Footer;