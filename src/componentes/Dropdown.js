import React from 'react';

const Dropdown = () => {
  const clicar = () => {
    // Adiciona um evento de clique ao botão de menu
document.getElementById("dropdownBtn").addEventListener("click", function() {
    // Obtém o conteúdo do menu
    var dropdownContent = document.getElementById("myDropdown");
    // Alterna a classe "show" para mostrar ou ocultar o menu
    dropdownContent.classList.toggle("show");
});

// Fecha o menu se o usuário clicar fora dele
window.onclick = function(event) 
{
    // Verifica se o clique não foi no botão de menu
    if (!event.target.matches('.dropbtn')) 
    {
        // Obtém todos os menus
        var dropdowns = document.getElementsByClassName("dropdown-content");
        // Itera sobre os menus
        for (var i = 0; i < dropdowns.length; i++) 
        {
            var openDropdown = dropdowns[i];
            // Verifica se o menu está aberto
            if (openDropdown.classList.contains('show')) 
            {
                // Fecha o menu
                openDropdown.classList.remove('show');
            }
        }
    }
}      

  };

  return (
    <div>
      <button onClick={clicar}>Clique em mim</button>
    </div>
  );
};

export default Dropdown;