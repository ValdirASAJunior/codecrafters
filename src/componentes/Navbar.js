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
              <button id="dropdownBtn"><img src={menu} alt="Menu"/></button>
              <div id="myDropdown" class="menu-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
        </header>
      </div>
    );
  }
  
  export default Navbar;