# forEach asíncrono

Un problema común cuando usamos métodos de arreglos como [forEach](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) o [map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map) es querer ejecutar código asíncrono dentro de ellos, ya que no obtendrás el resultado que esperas. Pero hoy te mostraré algunas maneras de salir victorioso en estas situaciones 😁.

<p style="text-align: center">
  <img src="./victory.gif" alt="Victory" />
</p>

::: tip
En este tutorial estaremos trabajando con características de ES6, así que te recomiendo echarle un ojito a los siguientes artículos:

- [Infierno de Callbacks (Promesas y async/await)](../callback-hell/)
- [ES6+ características (Parte 1)](../es6-features/)
- [Métodos de arreglos](../array-methods/)

:::

## Problema

Para replicar el problema, crearemos una pequeña función asíncrona que lo único que hará será sumar dos números. También utilizaremos un arreglo con unas cuantas parejas de números que serán pasadas a nuestra función y un arreglo donde guardaremos los resultados. Veamos cómo quedaría el código:

```js
function sumaAsincrona(a, b) {
  return new Promise((resolve) => resolve(a + b));
}

const parejasDeNumeros = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const resultados = [];

parejasDeNumeros.forEach(async (parejaDeNumeros) => {
  const resultado = await sumaAsincrona(...parejaDeNumeros);
  resultados.push(resultado);
});
console.log(resultados);
// -> []
```

Al ver la consola te encontrarías con un arreglo vacío y con un gran sentimiento de confusión dentro de ti 🥺. Pero, ¿por qué no funcionó el `forEach`? Bueno, en realidad no es que no funcionara, más bien no le dimos el suficiente tiempo para que nos mostrara los resultados.

Si cambiamos nuestro log de esto:

```js
console.log(resultados);
```

A esto para indicarle a JS que debe esperar a una última llamada asíncrona para mostrar los resultados:

```js
setTimeout(() => console.log(resultados), 0);
// -> [3, 7, 11]
```

Ahora sí veremos el resultado esperado. En pocas palabras podemos decir que JS deja de lado todas las llamadas asíncronas para ejecutarlas una vez haya terminado de correr todo el código síncrono. Esto ayuda a que no se bloquee la ejecución principal y pueda procesar varias cosas "al mismo tiempo".

::: tip
A este funcionamiento se le conoce como **Event Loop** y tiene mucho trasfondo para explicarlo en este artículo, pero si te interesa conocer más, puedes leer las siguientes entradas:

- [Modelo de concurrencia y loop de eventos](https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop)
- [Event Loop: la naturaleza asincrónica de Javascript](https://medium.com/@ubykuo/event-loop-la-naturaleza-asincr%C3%B3nica-de-javascript-78d0a9a3e03d)
- [Node Y El Event Loop](https://codigofacilito.com/articulos/nodejs-y-el-event-loop)

:::

## Solución 1: for..of

Ya que el `forEach` no espera a la ejecución de código asíncrono, podemos sustituirlo por otro tipo de `for` (no el tradicional, ese debería ser tu última opción). Estoy hablando del [`for..of`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of), el cual tiene la siguiente estructura:

```js
for (let variable of iterable) {
  // ...
}
```

Así podríamos reescribir nuestro `forEach` de la siguiente manera:

::: warning
Para poder utilizar **await** dentro del **for..of** necesitamos agrupar todo el código dentro de una función **async**.
:::

```js{5,13-16,20}
function sumaAsincrona(a, b) {
  return new Promise((resolve) => resolve(a + b));
}

async function main() {
  const parejasDeNumeros = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const resultados = [];

  for (const parejaDeNumeros of parejasDeNumeros) {
    const resultado = await sumaAsincrona(...parejaDeNumeros);
    resultados.push(resultado);
  }

  console.log(resultados);
  // -> [3, 7, 11]
}

main();
```

Al ejecutar este código finalmente logramos la misión, nuestro arreglo de resultados está lleno. Aunque este código pueda no agradarte del todo, es la alternativa más simple al `forEach` y por eso si eres principiante te recomiendo que la uses, ya que se asemeja bastante a un `for` tradicional.

## Solución 2: Promise.allSettled()

La primera solución no está mal pero tiene un inconveniente importante: **la ejecución del programa se detiene en cada iteración del `for..of` a esperar que termine la parte asíncrona**. En nuestro ejemplo realmente no se nota porque nuestra suma es demasiado simple, pero agreguemos un poco de complejidad para que se note este problema.

Modificaremos la función `sumaAsincrona` para que espere un segundo antes de retornar el resultado y agregaremos un poco de código para medir el tiempo:

```js{3,8,24-26}
function sumaAsincrona(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 1000); // 1000 = 1 segundo
  });
}

async function main() {
  const tiempoInicial = new Date();
  const parejasDeNumeros = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const resultados = [];

  for (const parejaDeNumeros of parejasDeNumeros) {
    const resultado = await sumaAsincrona(...parejaDeNumeros);
    resultados.push(resultado);
  }

  console.log(resultados);
  // -> [3, 7, 11]

  const tiempoFinal = new Date();
  console.log('Tiempo total (segundos):', (tiempoFinal - tiempoInicial) / 1000); // Dividir entre 1000 para obtener los segundos
  // -> Tiempo total (segundos): 4.218
}

main();
```

El tiempo puede variar pero lo mínimo que podría llegar a tardar es poco más de 3 segundos. Ahora imagina si en lugar de 1 segundo, el código asíncrono tardara 5 o 10 o más. O si en lugar de 3 sumas, fueran 30 o 50. El tiempo total sería igual al **tiempo de cada suma \* el número de sumas**. Y en programación, cada segundo vale oro.

Para evitar esto podemos usar una nueva característica de ES2020: [Promise.allSettled()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled). Este método del objeto **Promise** recibe un arreglo de promesas para ejecutarlas al mismo tiempo. De esta manera, el tiempo total de ejecución sería igual al **tiempo que tarde la promesa más lenta**.

Para implementarlo haremos uso de `map` para crear un arreglo de promesas y pasárselo a `Promise.allSettled`:

```js{16-21}
function sumaAsincrona(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(a + b), 1000); // 1000 = 1 segundo
  });
}

async function main() {
  const tiempoInicial = new Date();
  const parejasDeNumeros = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const resultados = [];

  await Promise.allSettled(
    parejasDeNumeros.map(async (parejaDeNumeros) => {
      const resultado = await sumaAsincrona(...parejaDeNumeros);
      resultados.push(resultado);
    }),
  );

  console.log(resultados);
  // -> [3, 7, 11]

  const tiempoFinal = new Date();
  console.log('Tiempo total (segundos):', (tiempoFinal - tiempoInicial) / 1000); // Dividir entre 1000 para obtener los segundos
  // -> Tiempo total (segundos): 1.101
}

main();
```

Verás que ahora el tiempo se ha reducido significativamente, pero analicemos mejor lo que hicimos. Empecemos por el `map`, al recibir como parámetro una función **async**, lo que retorna es un arreglo de promesas (por definición, toda función **async** retorna una promesa). Puedes verlo si lo imprimes por consola:

```js
const arregloDePromesas = parejasDeNumeros.map(async (parejaDeNumeros) => {
  const resultado = await sumaAsincrona(...parejaDeNumeros);
  resultados.push(resultado);
});

console.log(arregloDePromesas);
// -> [Promise, Promise, Promise]
```

Esto es así porque `map` al igual que `forEach` no espera a la ejecución de código asíncrono, pero esto es justo lo que queremos. Finalmente ese arreglo se pasa como argumento a `Promise.allSettled()` y listo.

```js
await Promise.allSettled(arregloDePromesas);
```

`Promise.allSettled()` retorna una promesa con los resultados de las promesas en el arreglo, es por eso que agregamos el `await` para esperar a que se resuelva.

## Conclusión

Espero te ayuden estas alternativas para trabajar código asíncrono y arreglos. Sé que el código de la segunda solución es más complejo pero te recomiendo optar por esa opción siempre que puedas. Verás que tus programas serán mucho más rápidos y eficientes. Créeme que tus usuarios lo agradecerán.

Happy coding! 🥸

<Disqus />
