# ES6+ características (Parte 2)

Continuemos viendo lo nuevo en Javascript, recuerda que este es el segundo artículo en el que hablamos sobre las características de ES6+, si quieres consultar los demás aquí tienes los enlaces:

- [Parte 1](../es6-features/)
  > Funciones flecha, Interpolación, Desestructuración, Operador spread, Parámetros rest, Parámetros por defecto
- Parte 2 **(aquí estás)**
  > Promesas, Async/await, Encadenamiento opcional, Operador nullish, Módulos, Comas finales (trailing commas)
<!-- TODO: complete links -->
<!-- - [Parte 3](../es6-features-part-3/) -->
<!-- - [Parte 4](../es6-features-part-4/) -->

Así que comencemos:

<p style="text-align: center">
  <img src="./bob.gif" alt="Bob" />
</p>

## [Promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Antes la asincronía en Javascript se manejaba con **callbacks** (funciones que se pasan como parámetro a otra función para ser ejecutadas en el futuro). Veamos un pequeño ejemplo:

```js
// Creamos la función que usaremos como callback
const saludar = () => console.log('Hola');

// Simulamos que esta función demora 3 segundos para ejecutar el callback
const funcionAsincrona = (callback) => {
  setTimeout(callback, 3000);
}

// 'saludar' se convierte en callback cuando la pasamos como parámetro
                    ↓
funcionAsincrona(saludar);
```

::: warning
Cuando se pasa un callback **NO** se utilizan paréntesis porque eso indicaría que la función se debe ejecutar y lo que se pasaría como parámetro sería el resultado y no la función como tal.

```js
funcionAsincrona(saludar()); // ❎ Incorrecto
funcionAsincrona(saludar); // ✅ Correcto
```
:::

::: tip
Para conocer más acerca de los callbacks y promesas te recomiendo leer mi artículo ["Infierno de Callbacks (Promesas y async/await)"](../callback-hell/)
:::

## [Async/await](https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Async_await)

## [Encadenamiento opcional](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## [Operador nullish](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

(Lo siento, no encontré la documentación oficial en español 😬)

## [Módulos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)

## [Comas finales (trailing commas)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas)

(Lo siento, no encontré la documentación oficial en español 😬)

Te dejo esta [lectura](https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8)(en inglés 😬) y esta [pregunta de StackOverflow](https://es.stackoverflow.com/questions/202727/como-funcionan-los-trailing-commas-en-javascript) para más información.

## Conclusión

Te veo pronto. Happy coding! 🥸

<Disqus />
