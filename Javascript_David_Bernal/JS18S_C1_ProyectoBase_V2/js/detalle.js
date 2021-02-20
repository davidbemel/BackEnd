// Hemos omitido los acentos en los comentarios por compatibilidad

var hoy;
var eventos;

$(document).ready(function() {

    //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>

    var url = new URL(location.href);
    var id = url.searchParams.get("id");


    //Carga los datos que estan en el JSON (info.json) usando AJAX

    $.ajax({
        url: "info.json"
    }).done(function(resultado) {

        //Guarda el resultado en una variable

        hoy = resultado.fechaActual;
        eventos = resultado.eventos;

        //Busca el elemento en el arreglo

        evento = eventos.find(function(element) {
            return element.id == id
        })

        //Crea un string que contenga el HTML que describe el detalle del evento

        var html = ""
        html += `<div class="col-12">   
        <div class="card flex-md-row mb-4 h-md-250"> 
        <div class="card-body d-flex flex-column align-items-start"> 
        <h3 class="mb-0"> 
        <p ${evento.id}">${evento.nombre}</p> 
        </h3> 
        <div class="mb-1 text-muted"> ${evento.fecha} - ${evento.lugar} </div> 
        <p class="card-text mb-auto">${evento.descripcion}</p> 
        <p class="card-text mb-auto text-info">Costo: ${evento.precio}</p>
        <p class="card-text mb-auto text-warning">Invitados: ${evento.invitados}</p> 
        </div> 
        </div>
        </div>`

        //Modifica el DOM agregando el html generado dentro del div con id=evento

        document.getElementById("evento").innerHTML = html


    });
})