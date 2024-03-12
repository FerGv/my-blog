# ES6+ características (Parte 4)

Continuemos viendo lo nuevo en Javascript, recuerda que este es el cuarto artículo en el que hablamos sobre las características de ES6+, si quieres consultar los demás aquí tienes los enlaces:

- [Parte 1](../es6-features/)
  > Funciones flecha, Interpolación, Desestructuración, Operador spread, Parámetros rest, Parámetros por defecto
- [Parte 2](../es6-features-part-2/)
  > Promesas, Async/await, Encadenamiento opcional, Operador nullish, Módulos, Comas finales (trailing commas)
- [Parte 3](../es6-features-part-3/)
  > Map, Set, Clases, Atributos privados, métodos de objetos, arreglos, strings, promesas.
- Parte 4 **(aquí estás)**
  > Top-level await, toSorted, toReversed, toSpliced

<p style="text-align: center">
  <img src="./bugs.gif" alt="Bob" />
</p>

## [Top-level await](https://github.com/tc39/proposal-top-level-await)

Anteriormente vimos que se incorporó al lenguaje una nueva manera de trabajar la asincronía: [async/await](../es6-features-part-2/#async-await). Esta nueva funcionalidad nos permite escribir código al estilo síncrono, veamos un ejemplo rápido:

```js
// Sin async/await
const obtenerToDo = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((empleados) => console.log(empleados))
    .catch((error) => console.log(error));
}

// Con async/await
const obtenerToDo = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const empleados = await response.json();
    console.log(empleados);
  } catch (error) {
    console.log(error);
  }
}
```

::: tip
Revisa mi artículo [Infierno de Callbacks (Promesas y async/await)](../callback-hell/) para mas información sobre asincronía en JS.
:::

Pero el mayor inconveniente con **async/await** era que no podíamos usar un **await** fuera de una función **async**. Lo que limitaba los escenarios en que podíamos usarlo.

Por ejemplo, si querías crear un script para automatizar una tarea que consumiera alguna API, era necesario crear una función **async** solo para poder utlizar **await**. En cierto modo, esa función era algo innecesaria:

```js
// main.js

const obtenerToDo = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const empleados = await response.json();
    console.log(empleados);
  } catch (error) {
    console.log(error);
  }
}

obtenerToDo();
```

Una alternativa era usar las [IIFE (funciones auto-ejecutadas)](https://developer.mozilla.org/es/docs/Glossary/IIFE), lo que permitía definir y al mismo tiempo ejecutar la función. Pero el código se complicaba y dificultaba la lectura:

```js
// main.js

(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const empleados = await response.json();
    console.log(empleados);
  } catch (error) {
    console.log(error);
  }
})();
```

Para solucionar este inconveniente, se incorporó el **top-level await** lo que ahora permite las llamadas **await** fuera de funciones **async**. Con esta nueva funcionalidad, nuestro ejemplo queda muy simple:

```js
// main.js

try {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const empleados = await response.json();
  console.log(empleados);
} catch (error) {
  console.log(error);
}
```

## [toSorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)

Un gran poblema que siempre existió cuando trabajabas con arreglos era la **inmutabilidad**, ya que algunos métodos modificaban el arreglo original cuando se ejecutaban. En algunos casos podría ser lo que esperabas pero lo recomendable sería no hacerlo.

::: tip
Te dejo mi artículo [Por referencia vs por valor](../reference-vs-value/) para más información.
:::

`toSorted()` funciona igual que [sort()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) pero sin modificar el arreglo original. El resultado de su ejecución es un nuevo arreglo ordenado:

```js
// ❌ Con 'sort'
const arregloOriginal = [2, 10, 5, 4];
const arregloOrdenado = arregloOriginal.sort((a, b) => a - b);
console.log(arregloOriginal);
// -> [2, 4, 5, 10]
console.log(arregloOrdenado);
// -> [2, 4, 5, 10]

// ✅ Con 'toSorted'
const arregloOriginal = [2, 10, 5, 4];
const arregloOrdenado = arregloOriginal.toSorted((a, b) => a - b);
console.log(arregloOriginal);
// -> [2, 10, 5, 4]
console.log(arregloOrdenado);
// -> [2, 4, 5, 10]
```

::: tip

```js
// Ordenar de manera ascendente
sort((a, b) => a - b)
```

Restar los items es un truco para ordenar un arreglo de números de manera ascendente. Si lo quisieras de manera descendente, solo invierte la resta:

```js
// Ordenar de manera descendente
sort((a, b) => b - a)
```

:::

## [toReversed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed)

## [toSpliced](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)

## Conclusión

Te veo pronto. Happy coding! 🥸

<Disqus />
