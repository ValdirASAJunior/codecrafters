import React from "react";

function Titulo() {
    return (
      <div className="Titulo">
        <div class="logo"></div>
        <div class="title"><h1>Reinventando a<br/>Inovação</h1></div>

        <div class="devs">
          <p class="txtEquipe">Equipe</p>
          <div class="caixaEquipe"></div>
          <button class="setaECaixa"></button>
          <button class="setaDCaixa"></button>
          <div class="nomeCaixa"><p>Nome</p></div>
        </div>
      </div>
    );
  }

  export default Titulo;