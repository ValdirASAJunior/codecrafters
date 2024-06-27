import React from "react";

function Projetos() {

  function tech(){
    const tales = document.getElementById("jogoReal");
    tales.classList.add("show3");
  }

  function techOut(){
    const tales = document.getElementById("jogoReal");
    tales.classList.remove("show3");
  }

  function j2(){
    const j2 = document.getElementById("jogo2");
    j2.classList.add("show3");
  }

  function j2Out(){
    const j2 = document.getElementById("jogo2");
    j2.classList.remove("show3");
  }

    return (
      <div className="Projetos">
        <div class="caixaOpacidade">
          <div class="caixaTexto2"><p>Projetos</p></div>

          <div class="jogo1" onMouseOver={tech} onMouseOut={techOut}>
            <div class="infoJ1" id="jogoReal" >
              <p>Tech Tales</p>
            </div>
          </div>

          <div class="jogo2" onMouseOver={j2} onMouseOut={j2Out}>
            <div class="infoJ2" id="jogo2" >
              <p>Em Breve...</p>
            </div>
          </div>

          <div class="jogo2"></div>
          <div class="jogo3"></div>
        </div>
      </div>
    );
  }

  export default Projetos;