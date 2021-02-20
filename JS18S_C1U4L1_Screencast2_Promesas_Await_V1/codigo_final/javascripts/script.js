
function arreglarElCuarto(){
  var promesa = new Promise(function (resolve, reject) {
    // resolve('Cuarto arreglado');
    reject('No se arregló');
  })
  return promesa;
}

// arreglarElCuarto().then(function(resultado){

// })

async function procesar(){
  try {
  var resultado = await arreglarElCuarto()
  console.log('resultado: ', resultado);
  }
  catch(error){
    console.log('error: ', error);
  }
}

procesar()
