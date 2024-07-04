import React from "react";
import lupa from "../imagens/lupa.png";
import menu from "../imagens/menu.png";

function Navbar() {

  function dropdown() {
    var dropContent = document.getElementById("myDropdown");
    dropContent.classList.toggle("show");
  }

  window.onclick = function(event){
    if (!event.target.matches('.dropBtn') && !event.target.matches('#imgMenu')) {
      var dropdowns = document.getElementById("myDropdown");
        if (dropdowns.classList.contains('show')) {
          dropdowns.classList.remove('show');
        }
    }
  }

  function noneJogo(){
    const txt = document.getElementById("txtBusca").value;
    const none = document.getElementById("noneBusca");

    if (txt != ""){
      none.classList.add("show3");
    } else {
      none.classList.remove("show3");
    }
  };

  function semTexto(){
    const txt = document.getElementById("txtBusca").value;
    const none = document.getElementById("noneBusca");

    if (txt == ""){
      none.classList.remove("show3");
    }
  }

  return (
    <div className="Navbar">
      <header>
        <div className="busca">
          <input type="text" id="txtBusca" onChange={semTexto}/>
        </div>

        <div className="buscar" onClick={noneJogo}>
          <img src={lupa} alt="Pesquisa" />
        </div>

        <div class="buscaDown" id="noneBusca">
            <p>Nenhum jogo encontrado.</p>
        </div>

        <button id="dropdownBtn" class="dropBtn" onClick={dropdown}>
            <img src={menu} id="imgMenu"/>
        </button>

        <div id="myDropdown" class="dropdown-content">
            <a href="#inicio">Início</a>
            <a href="#projetos">Projetos</a>
            <a href="#footer">Contato</a>
        </div>

      </header>
    </div>
  );

}

export default Navbar;
