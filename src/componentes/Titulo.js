import React from "react";

function Titulo() {

  function TrocarE(){
    const dev = document.getElementById("caixaDevs");
    const btnEsq = document.getElementById("trocarFundo");
    const btnDir = document.getElementById("trocarFundo2");
    const nome = document.getElementById("Nome");

      // Verifica qual é o plano de fundo atual e alterna para o próximo
      if (dev.className = "dev2") 
      {
        dev.className = "devs";
        btnEsq.classList.toggle("show2");
        btnDir.classList.toggle("hide");
        nome.innerHTML = "THALIA";
      }
    };

    function TrocarD(){
      const dev = document.getElementById("caixaDevs");
      const btnEsq = document.getElementById("trocarFundo");
      const btnDir = document.getElementById("trocarFundo2");
      const nome = document.getElementById("Nome");
  
        // Verifica qual é o plano de fundo atual e alterna para o próximo
        if (dev.className = "devs") 
          {
            dev.className = "dev2";
            btnEsq.classList.toggle("show2");
            btnDir.classList.toggle("hide");
            nome.innerHTML = "VALDIR";
          } 
        };

    return (
      <div className="Titulo">
        <div class="logo"></div>
        <div class="title"><h1>Reinventando a<br/>Inovação</h1></div>

        <div class="devs" id="caixaDevs">
          <p class="txtEquipe">Equipe</p>
          <div class="caixaEquipe"></div>
          <button class="setaECaixa" id="trocarFundo" onClick={TrocarE}></button>
          <button class="setaDCaixa" id="trocarFundo2" onClick={TrocarD}></button>
          <div class="nomeCaixa"><p id="Nome">THALIA</p></div>
        </div>
      </div>
    );
  }

  export default Titulo;