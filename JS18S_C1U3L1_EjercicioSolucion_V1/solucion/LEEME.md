# Solución

En este oportunidad crearemos una estructura de archivos de la siguiente manera:

```
.
├── index.html
└── javascripts
    └── script.js
```

## Creación de los archivos

Creamos el archivo `script.js` dentro de la nueva carpeta `javascripts`

## Enlace de los archivos

En el archivo `index.html` enlazamos el script con 

```html
<script src="./javascripts/script.js"></script>
```

Nota: Recuerda agregarlo justo antes de que cierre la etiqueta `body` ya que se considera una buena práctica.

## Definición de las funciones

Luego en `script.js` creamos la función `enviarMensaje` de la siguiente manera:

Esta función recibe el parámetro `mensaje`

```javascript
function enviarMensaje(mensaje){
  alert(mensaje);
  console.log(mensaje);
}
```

Luego en `script.js` creamos la función `inicio` que envía el mensaje `Hola` y `Adios`

```javascript
function inicio(){
  enviarMensaje("Hola");
  enviarMensaje("Adios");
}
```

Finalmente llamamos a la función `inicio()` en `script.js`

## Verificación

Abrimos nuestra página y vemos que aparece un mensaje con el `alert` y abrimos la cónsola del navegador para ver los mensajes de `console.log()`

