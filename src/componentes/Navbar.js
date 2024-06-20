import React from "react";
import lupa from "../imagens/lupa.png";
import menu from "../imagens/menu.png";

function Navbar() {

  document.getElementById("dropdownBtn").addEventListener('click', function() {
    var conteudo = document.getElementById("myDropdown");
    conteudo.classList.toggle("show");
  });

  return (
    <div className="Navbar">
      <header>
        <div className="busca">
          <input type="text" />
        </div>

        <div className="buscar">
          <img src={lupa} alt="Pesquisa" />
        </div>

        <div className="menu">
          <button id="dropdownBtn">
            <img src={menu} alt="Menu" />
          </button>

          <div id="myDropdown" class="dropdown-content">
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
