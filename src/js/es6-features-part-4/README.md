# ES6+ características (Parte 4)

Continuemos viendo lo nuevo en Javascript, recuerda que este es el cuarto artículo en el que hablamos sobre las características de ES6+, si quieres consultar los demás aquí tienes los enlaces:

- [Parte 1](../es6-features/)
  > Funciones flecha, Interpolación, Desestructuración, Operador spread, Parámetros rest, Parámetros por defecto
- [Parte 2](../es6-features-part-2/)
  > Promesas, Async/await, Encadenamiento opcional, Operador nullish, Módulos, Comas finales (trailing commas)
- [Parte 3](../es6-features-part-3/)
  > Map, Set, Clases, Atributos privados, métodos de objetos, arreglos, strings, promesas
- Parte 4 **(aquí estás)**
  > Top-level await, toSorted, toReversed, toSpliced, with, findLast, findLastIndex, at

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

Por ejemplo, si querías crear un script para automatizar una tarea que consumiera alguna API, era necesario crear una función **async** solo para poder utilizar **await**. En cierto modo, esa función era algo innecesaria:

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

Para solucionar este inconveniente, se incorporó el **top-level await**, lo que ahora permite las llamadas **await** fuera de funciones **async**. Con esta nueva funcionalidad, nuestro ejemplo queda muy simple:

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

Con `toReversed()` invertimos el orden de los items de un arreglo. Es igual a [`reverse()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) pero sin mutar el arreglo original.

```js
// ❌ Con 'reverse'
const arregloOriginal = [2, 10, 5, 4];
const arregloInvertido = arregloOriginal.reverse();
console.log(arregloOriginal);
// -> [4, 5, 10, 2]
console.log(arregloInvertido);
// -> [4, 5, 10, 2]

// ✅ Con 'toReversed'
const arregloOriginal = [2, 10, 5, 4];
const arregloInvertido = arregloOriginal.toReversed();
console.log(arregloOriginal);
// -> [2, 10, 5, 4]
console.log(arregloInvertido);
// -> [4, 5, 10, 2]
```

## [toSpliced](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced)

`toSpliced` es la versión inmutable de [`splice()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice). Estos métodos son complejos porque nos permiten eliminar y agregar elementos al mismo tiempo. Un poco confuso a mi parecer 🤯.

La sintásix es la siguiente:

```js
   splice(indice, contador, nuevoElemento1, ..., nuevoElementoN)
toSpliced(indice, contador, nuevoElemento1, ..., nuevoElementoN)
```

1. `indice` indica a partir de qué elemento se realizará la operación.
2. `contador` indica el número de elementos que se eliminarán.
3. `nuevoElemento1, ..., nuevoElementoN` son todos los elementos que se agregarán.

Lo más común es utilizar estos métodos solo para eliminar elementos:

```js
// ❌ Con 'splice'
const arregloOriginal = [2, 10, 5, 4];
const elementosEliminados = arregloOriginal.splice(3, 1);
console.log(arregloOriginal);
// -> [2, 10, 5]
console.log(elementosEliminados);
// -> [4]

// ✅ Con 'toSpliced'
const arregloOriginal = [2, 10, 5, 4];
const arregloModificado = arregloOriginal.toSpliced(3, 1);
console.log(arregloOriginal);
// -> [2, 10, 5, 4]
console.log(arregloModificado);
// -> [2, 10, 5]
```

Pero también podemos borrar y agregar (simulando una sustitución):

```js
// ❌ Con 'splice'
const arregloOriginal = [2, 10, 5, 4];
const elementosEliminados = arregloOriginal.splice(3, 1, 99);
console.log(arregloOriginal);
// -> [2, 10, 5, 99]
console.log(elementosEliminados);
// -> [4]

// ✅ Con 'toSpliced'
const arregloOriginal = [2, 10, 5, 4];
const arregloModificado = arregloOriginal.toSpliced(3, 1, 99);
console.log(arregloOriginal);
// -> [2, 10, 5, 4]
console.log(arregloModificado);
// -> [2, 10, 5, 99]
```

# [with](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with)

Hablando de sustituciones, una mejor forma de cambiar un elemento dentro de un arreglo es usando el método `with()`. Este método es similar a la forma tradicional usando los corchetes y los índices `[i]`:

::: warning
Recuerda que los índices de un arreglo siempre comienzan en cero `0`.
:::

- **Forma tradicional**

```js
const arregloOriginal = [2, 10, 5, 4];
arregloOriginal[0] = 8;

console.log(arregloOriginal);
// -> [8, 10, 5, 4]
```

- **Usando _with()_**

```js
const arregloOriginal = [2, 10, 5, 4];
const arregloModificado = arregloOriginal.with(0, 8);
console.log(arregloOriginal);
// -> [2, 10, 5, 4]

console.log(arregloModificado);
// -> [8, 10, 5, 4]

// También se pueden usar índices negativos
// los cuales comienzan a contar del último al primer elemento
const arregloModificado = arregloOriginal.with(-1, 8);
console.log(arregloModificado);
// -> [2, 10, 5, 8]
```

Otro punto importante es que `with()` **no** modifica el arreglo original, en su lugar retorna un nuevo arreglo con el nuevo valor sustituido en el índice indicado.

Y tal vez te estés preguntando en qué casos se necesitaría crear un nuevo arreglo cambiando un solo valor 🤔. Bueno, este es un caso de uso común en frameworks reactivos como [React](https://es.react.dev/), [Vue](https://vuejs.org/) o [Svelte](https://svelte.dev/). En especial cuando se utilizan manejadores de estado como [Redux](https://redux.js.org/), [Vuex](https://vuex.vuejs.org/) o [Pinia](https://pinia.vuejs.org/).

Veamos un ejemplo con los hooks de React:

```js
// App.js

import { useState } from 'react';

export const App = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (event) => {
    const nuevaTarea = event.target?.value?.trim();

    if (event.key !== 'Enter' || !nuevaTarea) return;

    // Para no mutar el arreglo original aplicamos la desestructuración
    // y agregamos el nuevo elemento al final
    setTareas([...tareas, nuevaTarea]);
    event.target.value = '';
  };

  const cambiarTarea = (indice, nuevaTarea) => {
    // No podemos mutar el arreglo original,
    // por lo que generamos uno nuevo con la modificación necesaria
    setTareas(tareas.with(indice, nuevaTarea));
  };

  return (
    <div>
      <ol>
        {tareas.map((tarea, indice) => (
          <li>
            <input
              value={tarea}
              onChange={(event) => cambiarTarea(indice, event.target.value)}
            />
          </li>
        ))}
      </ol>

      <label>
        Nueva tarea:
        <input placeholder="Escribe una tarea..." onKeyUp={agregarTarea} />
      </label>
    </div>
  );
};
```

::: tip
Si quieres probar este ejemplo online, te recomiendo [StackBlitz](https://stackblitz.com/).
:::

# [findLast](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)

# [findLastIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)

# [at](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

## Conclusión

Espero hayas aprendido algo nuevo o despejado algunas dudas sobre lo nuevo en el lenguaje.
Te veo pronto. Happy coding! 🥸

<Disqus />
