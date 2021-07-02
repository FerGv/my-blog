# DOM (Manipulando HTML con JS)

El [DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction) es una [API](https://developer.mozilla.org/es/docs/Glossary/API) del navegador que nos permite manipular nuestro documento HTML a través del mapeo de todos sus datos. Por mapear me refiero a armar una [estructura de árbol jerárquico](<https://es.wikipedia.org/wiki/%C3%81rbol_(inform%C3%A1tica)>) en donde cada elemento HTML se representa como un nodo.

> El **DOM** también nos permite manipular XML 🤯.

<!-- TODO: create DOM image -->

## Obtener elementos

Tradicionalmente tenemos métodos para obtener elementos por:

- **ID ([getElementById](https://developer.mozilla.org/es/docs/Web/API/Document/getElementById))**
- **Clase ([getElementsByClassName](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByClassName))**
- **Atributo "name" para inputs de un formulario ([getElementsByName](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByName))**
- **Etiqueta ([getElementsByTagName](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByTagName))**

Y la manera de usarlos es siempre invocando al objeto [`document`](https://developer.mozilla.org/es/docs/Web/API/Document), el cual nos permite acceder a todas las funcionalidades del DOM:

```js
document.getElementById('un-identificador');
document.getElementsByClassName('una-clase');
document.getElementsByName('un-input');
document.getElementsByTagName('div');
```

Pero ahora tenemos dos nuevos métodos que nos permiten utilizar todo el poder de los [selectores CSS](https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Selectors) en los cuales nos enfocaremos hoy:

### [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

Este método nos permite obtener el primer elemento que coincida con el selector pasado como argumento. El selector puede ser tan simple o tan complejo como sea necesario. Así podemos replicar la misma funcionalidad de los métodos anteriores y extenderla.

```js
// Obtener por ID
document.querySelector('#mi-identificador');

// Obtener por Clase
document.querySelector('.mi-clase');

// Obtener por Atributo "name"
document.querySelector('[name="mi-input"]');

// Obtener por Etiqueta
document.querySelector('div');

// Combinando selectores
// Busca un elemento con el ID "contenedor", después busca el primer elemento div
// y dentro un elemento con la clase "link"
document.querySelector('#contenedor > div .link');
```

### [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

Este método es prácticamente igual que el anterior, la única diferencia es que retornará un "arreglo" de nodos llamado [NodeList](https://developer.mozilla.org/es/docs/Web/API/NodeList).

```js
// Obtener todos los elementos con la clase "link"
document.querySelectorAll('.link');
```

::: warning
Un objeto `NodeList` no es un arreglo como tal, por lo que no podrás usar métodos como `map` o `reduce`. El único permitido es `forEach`.
:::

## Manipular elementos

Pero obtener elementos no sirve de nada si no se hace algo con ellos. Así que veamos cómo manipularlos y realmente sacarles provecho.

### Detalle

Lo más sencillo es obtener información acerca de los elementos. Esto es tan simple como imprimir en consola.

```js
const titulo = document.querySelector('title');
console.log(titulo);
// -> <title>DOM (Manipulando HTML con JS) | FerGv blog</title>
```

Pero podemos ir más allá, cada nodo nos ofrece toda la información relacionada al elemento como su etiqueta, contenido, clases, id, atributos, etc.

```js
const parrafo = document.querySelector('p');

console.log(parrafo.tagName);
// -> P

console.log(parrafo.classList);
// -> DOMTokenList(2) ['una-clase', 'otra-clase', value: 'una-clase otra-clase']

console.log(parrafo.textContent);
// -> texto del párrafo

console.log(parrafo.style);
// -> CSSStyleDeclaration {alignContent: '', alignItems: '', alignSelf: '', ...}
```

::: tip
De hecho, puedes consultar la lista de opciones para cada nodo escribiendo en la consola de tu navegador el selector y un punto:

![Options](./node-options.png)

Verás que las posibilidades son bastantes 😅.
:::

### Borrar

Lo segundo más sencillo es eliminar un nodo. Pero ten cuidado, tal vez es demasiado sencillo ⚠😬.

```js
document.querySelector('title').remove();
```

### Editar

Editar un nodo es parecido al detalle, solo que en lugar de consultar le asignamos los nuevos valores.

```js
const parrafo = document.querySelector('p');

parrafo.textContent = 'nuevo contenido';
console.log(parrafo.textContent);
// -> nuevo contenido

parrafo.style.color = 'red';
console.log(parrafo.style.color);
// -> red
```

### Agregar

Lo más difícil manipulando nodos es la creación, no es la gran cosa pero tenemos varias maneras de hacerlo:

#### [document.createElement()](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)

```js
const link = document.createElement('a');
link.className = 'link';
link.id = 'mi-link';
link.textContent = 'Este es un link';
document.appendChild(link);
```

#### [{element}.insertAdjacentHTML()](https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentHTML)

```js
document.insertAdjacentHTML('beforeend', '<a id="mi-link" class="link">Este es un link</a>');
```

## Conclusión

Espero te ayuden estas alternativas para trabajar código asíncrono y arreglos. Sé que el código de la segunda solución es más complejo pero te recomiendo optar por esa opción siempre que puedas. Verás que tus programas serán mucho más rápidos y eficientes. Créeme que tus usuarios lo agradecerán.

Happy coding! 🥸

<Disqus />
````
