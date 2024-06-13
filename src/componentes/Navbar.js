import React from "react";
import lupa from "../imagens/lupa.png"
import menu from "../imagens/menu.png"

function Navbar() {
    return (
      <div className="Navbar">
        <header>
            <div class="busca">
                <input type="text"/>
            </div>

            <div class="buscar">
              <img src={lupa} alt="Pesquisa"/>
            </div>

            <div class="menu">
              <img src={menu} alt="Menu"/>
            </div>
        </header>
      </div>
    );
  }

  export default Navbar;