function saludar(){
  // alert("Bienvenido JS");
  var elemento = document.getElementById('saludo');
  elemento.innerHTML = "Bienvenido!";

}

var noticias = ["Noticia 1", "Noticia 2", "Noticia 3", "Noticia 4"];

function cargarLista(){

  var lista = document.getElementById("lista");

  for(var i=0; i<noticias.length; i++){
      var li = document.createElement("li");
      li.innerText = noticias[i];
      lista.appendChild(li);
  }
}


function cambiarImagen(){
  var imagen = document.getElementById("imagen");
  // imagen.src = "./images/imagen2.png"
  imagen.setAttribute('src',"./images/imagen2.png");
}

// insertBefore
// parentNode
// querySelectorAll
// querySelector
// classList.add()
// hasChildNodes
