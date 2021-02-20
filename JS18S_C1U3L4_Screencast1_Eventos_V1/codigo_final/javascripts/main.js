function aceptando(event){
  alert('Aceptado');
}

function aceptandoOtraVez(){
  alert('Aceptado otra vez');
}

var botonAceptar = document.getElementById('boton-aceptar');

botonAceptar.onclick = aceptando;
botonAceptar.onclick = aceptandoOtraVez;

botonAceptar.addEventListener("click", aceptando);
botonAceptar.addEventListener("click", aceptandoOtraVez);

