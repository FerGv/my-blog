# Recursion

El otro día en el trabajo estaba desarrollando una aplicación web en la cual necesitaba conectarme a una carpeta compartida en nuestros servidores para obtener las pruebas de entrega de nuestros proveedores de paquetería que se enviarían al cliente. El problema era que los archivos se organizaban en carpetas por mes y dentro de otras carpetas por proveedor de paquetería, y en algunos casos por día 😬.

<p style="text-align: center">
  <img src="./sheldon.gif" alt="Sheldon" />
</p>

```
pruebas-de-entrega
|-- enero
|   |-- dhl
|   |   |-- orden1.pdf
|   |-- fedex
|       |-- 01
|           |-- orden2.pdf
|-- febrero
    |-- dhl
    |   |-- orden3.pdf
    |   |-- orden5.pdf
    |-- fedex
        |-- 14
            |-- orden4.pdf
```

Esto dificultaba armar una ruta directa a los archivos, así que decidí que la búsqueda iniciara en la carpeta superior y de ahí bajara los niveles que fueran necesarios hasta encontrar el archivo. Para esto tuve que aplicar algo conocido como [recursión](<https://es.wikipedia.org/wiki/Recursi%C3%B3n_(ciencias_de_computaci%C3%B3n)>), ya que la búsqueda se repetía en cada subcarpeta de manera indefinida hasta encontrar el archivo.

## Función recursiva

En programación, una **función recursiva es aquella que se llama a sí misma dentro de su ejecución**. Para mí este término fue difícil de entender en un principio porque no estamos acostumbrados a resolver problemas con este tipo de lógica. Así que primero veamos cómo resolvemos normalmente un problema para después resolverlo con recursión.

Supongamos que queremos sumar todos los números que nos pasen en un arreglo. Podemos hacerlo de varias maneras pero nos enfocaremos solo en dos:

### for

```js{6-8}
const numeros = [1, 2, 3, 4, 5];

function suma(numeros) {
  let total = 0;

  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }

  return total;
}

console.log(suma(numeros));
// -> 15
```

### forEach

```js{6}
const numeros = [1, 2, 3, 4, 5];

function suma(numeros) {
  let total = 0;

  numeros.forEach((numero) => (total += numero));

  return total;
}

console.log(suma(numeros));
// -> 15
```

::: tip
En lugar de `forEach` podemos usar `reduce` para hacer la suma sin necesidad de crear una variable extra:

```js{4}
const numeros = [1, 2, 3, 4, 5];

function suma(numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

console.log(suma(numeros));
// -> 15
```

En mi artículo [métodos de arreglos](../array-methods/) puedes encontrar más información.
:::

Estas son soluciones que normalmente se nos vienen a la cabeza, pero ahora veamos la solución usando recursividad:

```js{4,6,8}
const numeros = [1, 2, 3, 4, 5];

function suma(numeros, total = 0) {
  if (!numeros.length) return total; // (1)

  total += numeros.shift(); // (2)

  return suma(numeros, total); // (3)
}

console.log(suma(numeros));
// -> 15
```

¿No entendiste nada? Bienvenido al club. No te preocupes, como dije antes, pensar de manera recursiva no es algo que hagamos a diario. Déjame explicar paso a paso lo que está ocurriendo aquí:

1. Toda función recursiva requiere de un **caso base**, es decir, una condición con la cual la función termina (ya no hace más llamadas a sí misma).

   Nuestro **caso base** es cuando el arreglo de números esté vacío, como ya no tenemos nada que sumar, regresamos el **total**.

   ```js
   if (!numeros.length) return total;
   ```

2. Lo siguiente es proceder a realizar la funcionalidad principal, en nuestro ejemplo, la suma.

   Obtenemos el primer número del arreglo y lo eliminamos del mismo para que en la siguiente ejecución ese número ya no se cuente.

   ```js
   total += numeros.shift();
   ```

3. Finalmente, como no se cumplió el caso base, lo que debe regresar la función es una llamada a sí misma pero con los datos modificados para la siguiente ejecución.

   Pasamos como argumentos el nuevo arreglo de números (sin el número que acabamos de sumar) y el nuevo total.

   ```js
   return suma(numeros, total);
   ```

4. (Opcional) Utilizamos parámetros por defecto para que en caso de que el total no esté definido, tome un valor inicial. Esto solo aplica en la primera llamada de la función.

   ```js
   function suma(numeros, total = 0) {
     // ...
   }

   console.log(suma(numeros)); // `total` no está definido, por lo tanto toma el valor `0`
   ```

Gráficamente las llamadas de cada función se verían así:

<!-- prettier-ignore -->
```js
        numeros      total
suma([1, 2, 3, 4, 5], 0);   // total += 1
suma([   2, 3, 4, 5], 1);   // total += 2
suma([      3, 4, 5], 3);   // total += 3
suma([         4, 5], 6);   // total += 4
suma([            5], 10);  // total += 5
suma([             ], 15);  // total = 15
```

## Caso de uso

Espero te haya quedado claro cómo funciona la recursividad, ahora veamos la solución al problema inicial de los archivos.

> Para simular la estructura de archivos usaremos un arreglo de objetos, en donde cada objeto tendrá las siguientes propiedades:
>
> - **nombre**: String.
> - **esCarpeta**: Boolean.
> - **items**: Array (opcional).

<!-- prettier-ignore -->
```js
const pruebasDeEntrega = [
  {
    nombre: 'enero',
    esCarpeta: true,
    items: [
      {
        nombre: 'dhl',
        esCarpeta: true,
        items: [
          {
            nombre: 'orden1.pdf',
            esCarpeta: false,
          },
        ],
      },
      {
        nombre: 'fedex',
        esCarpeta: true,
        items: [
          {
            nombre: '01',
            esCarpeta: true,
            items: [
              {
                nombre: 'orden2.pdf',
                esCarpeta: false,
              },
            ],
          },
        ],
      },
    ],
  },
];

function buscarElemento(nombre, items, ruta = '/') {
  const elementoEncontrado = items.find((item) => item.nombre === nombre); // (1)

  if (elementoEncontrado) return { ...elementoEncontrado, ruta }; // (1)

  const carpetas = items.filter((item) => item.esCarpeta); // (2)

  for (const carpeta of carpetas) { // (2)
    const elementoEncontrado = buscarElemento(nombre, carpeta.items, `${ruta}${carpeta.nombre}/`);

    if (elementoEncontrado) return elementoEncontrado;
  }

  return null; // (3)
}

console.log(buscarElemento('orden1.pdf', pruebasDeEntrega));
// -> { nombre: 'orden1.pdf', esCarpeta: false, ruta: '/enero/dhl' }

console.log(buscarElemento('orden2.pdf', pruebasDeEntrega));
// -> { nombre: 'orden2.pdf', esCarpeta: false, ruta: '/enero/fedex/01' }

console.log(buscarElemento('enero', pruebasDeEntrega));
// -> { nombre: 'enero', esCarpeta: true, items: Array(2), ruta: '/' }

console.log(buscarElemento('no-existe.pdf', pruebasDeEntrega));
// -> null
```

Esta implementación es más complicada que el ejemplo de la suma porque necesitamos mezclar la recursión y la iteración, pero los conceptos aplican de igual manera.

1. Primero buscamos si en los elementos pasados como argumento se encuentra el elemento que necesitamos. Este es nuestro **caso base**. Si se encuentra, retornamos todos los datos del elemento junto con la ruta donde se encontró.

```js
const elementoEncontrado = items.find((item) => item.nombre === nombre);

if (elementoEncontrado) return { ...elementoEncontrado, ruta };
```

2. Si no está el elemento buscado, entonces verificamos si existen carpetas para repetir el proceso de búsqueda en cada una y lo mismo en todas las subcarpetas (todos los niveles hacia abajo que sean necesarios). Aquí es donde se hace la llamada a la función. Y en cada iteración volvemos a verificar el caso base para deternos en ese momento y evitar recorrer todas las carpetas restantes.

> En el peor de los casos, recorreríamos todas las carpetas.

<!-- prettier-ignore -->
```js
const carpetas = items.filter((item) => item.esCarpeta); // (2)

for (const carpeta of carpetas) { // (2)
  const elementoEncontrado = buscarElemento(nombre, carpeta.items, `${ruta}${carpeta.nombre}/`);

  if (elementoEncontrado) return elementoEncontrado;
}
```

3. Finalmente, si no se encontró el elemento buscado en la ruta actual ni en las carpetas, simplemente retornamos un valor nulo para indicar que no se halló nada. Podríamos decir que este es el **caso por defecto**.

```js
return null;
```

::: tip
Si te quedaron dudas sobre la sintaxis usada en el código, te recomiendo revisar mi artículo [ES6+ características (Parte 1)](../es6-features/).
:::

## Conclusión

Recursividad es uno de los temas complejos dentro de la programación, yo tardé un tiempo en entender bien los conceptos (y sigo aprendiendo 😅). Y siendo sincero, muy pocas veces he tenido que implementar recursión en los sistemas que he desarrollado, pero siempre es bueno estar preparado para cualquier circunstancia.

Te veo pronto. Happy coding! 🥸

<Disqus />
