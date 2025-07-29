function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function intentoDeUsuario() {}

asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", "Indicar un número entre 1 y 100");
