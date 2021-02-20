# Solución

En este oportunidad crearemos una estructura de archivos de la siguiente manera:

```
.
├── index.html
└── javascripts
    └── script.js
```

## Creación de los archivos

Creamos el archivo `main.js` dentro de la nueva carpeta `javascripts`

## Enlace de los archivos

En el archivo `index.html` enlazamos el script con 

```html
<script src="./javascripts/main.js"></script>
```

Nota: Recuerda agregarlo justo antes de que cierre la etiqueta `body` ya que se considera una buena práctica.

## Definición de las funciones

Luego en `main.js` creamos la función `colocarSaludo` que sustituye el saludo en inglés o español del `h1` en el HTML de acuerdo a la siguiente manera:

Esta función busca el parámetro en el url usando includes

```javascript
location.search.includes("lang=es")
...
location.search.includes("lang=en")
```

Y si encuentra el idioma en el `URL` entonces lo acepta, de lo contrario utiliza el lenguaje del navegador con

```javascript
navigator.language == "en"
```

Finalmente llamamos a la función `colocarSaludo()` en `main.js`

## Verificación

- Coloca en el `URL` después de `index.html` el parámetro `lang` quedando  de la manera `index.html?lang=es` y `index.html?lang=en`
- Luego quitá el parámetro y cambia el lenguaje del navegador para ver el saludo

