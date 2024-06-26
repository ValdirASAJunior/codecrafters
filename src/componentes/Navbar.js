import React from "react";
import lupa from "../imagens/lupa.png";
import menu from "../imagens/menu.png";

function Navbar() {

  function dropdown() {
    var dropContent = document.getElementById("myDropdown");
    dropContent.classList.toggle("show");
  }

  return (
    <div className="Navbar">
      <header>
        <div className="busca">
          <input type="text" />
        </div>

        <div className="buscar">
          <img src={lupa} alt="Pesquisa" />
        </div>

        <button id="dropdownBtn" onClick={dropdown}>
            <img src={menu} />
        </button>

        <div id="myDropdown" class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
      </header>
    </div>
  );

}

export default Navbar;
