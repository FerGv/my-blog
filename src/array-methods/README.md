# Métodos de arreglos

A partir de la versión de ECMAScript 2015 (ES6), se incorporaron al lenguaje algunos métodos para los arreglos bastantes útiles. Esto nos permite programar en Javascript usando el [paradigma funcional](https://es.wikipedia.org/wiki/Programaci%C3%B3n_funcional), en el cual se busca ser más declarativo, es decir, preocuparnos por el **qué** se debe hacer y no por el **cómo** se debe hacer.

Así que manos a la obra.

![Mr Incredible](./mr-incredible.jpg)

::: tip
La mayoría de los métodos que veremos usan [callbacks](https://developer.mozilla.org/es/docs/Glossary/Callback_function), así que procura darle una checada antes de seguir.
:::

## forEach [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)

¿Te ha pasado que deserías una forma más fácil de recorrer un arreglo sin tener que preocuparte por los índices o estar obteniendo la longitud del arreglo? A mí me pasó y estoy seguro que a ti también, pero ya no es problema gracias al nuevo método `forEach` ya que él se encargará de hacer el trabajo sucio por nosotros. Te muestro cómo:

```js
const perritos = ['Bobby', 'Firulais', 'Tom'];

// Antes
for (let i = 0; i < perritos.length; i++) {
  console.log(perritos[i]);
}

// Ahora
perritos.forEach((perrito) => console.log(perrito));
// -> Bobby
// -> Firulais
// -> Tom
```

En cada iteración, el método `forEach` pasará como argumento el siguiente elemento del arreglo hasta llegar al final y automáticamente terminará la ejecución. Adiós contadores e índices 👋.

Pero si necesitas el índice del elemento actual, puedes recibirlo como segundo argumento.

```js
const perritos = ['Bobby', 'Firulais', 'Tom'];

perritos.forEach((perrito, index) => console.log(`${index}.- ${perrito}`));
// -> 0.- Bobby
// -> 1.- Firulais
// -> 2.- Tom
```

::: tip
Durante este tutorial estaremos usando [funciones flecha](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions) para simplificar el código pero puedes usar funciones tradicionales sin ningún problema.
:::

## filter [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)

Un caso de uso muy común es obtener solo ciertos elementos que cumplan determinada condición, por ejemplo, usuarios activos, tareas terminadas, etc. Para esto usaremos el método `filter`, el cual recibe una función que debe retornar un valor [falsy/truthy](../bang-bang-operator/). Al final nos regresará un nuevo arreglo con los elementos que hayan retornado verdadero.

```js
const usuarios = [
  { nombre: 'Fer', activo: true },
  { nombre: 'Pedro', activo: false },
  { nombre: 'Juan', activo: true },
];

const usuariosActivos = usuarios.filter((usuario) => usuario.activo);
// -> [{ nombre: 'Fer', activo: true }, { nombre: 'Juan', activo: true }]
```

::: warning
Recuerda que `filter` no modifica el arreglo original.
:::

## find [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find)

El método `find` es muy parecido a `filter`, ya que nos ayuda a buscar un elemento que cumpla una determinada condición. La única diferencia es que `find` nos regresará solo un elemento o `null` en caso de que no lo encuentre.

```js
const ordenes = [
  { ordenId: '001', total: 10, cliente: 'Juan' },
  { ordenId: '002', total: 20, cliente: 'Fer' },
  { ordenId: '003', total: 50, cliente: 'Pedro' },
];

const miOrden = ordenes.find((orden) => orden.cliente === 'Fer');
// -> { ordenId: '002', total: 20, cliente: 'Fer' }

const ordenNoEncontrada = ordenes.find((orden) => orden.cliente === 'Pepito');
// -> null
```

## findIndex [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/findIndex)

`findIndex` es muy similar a `find`, pero en lugar de regresar el elemento, únicamente regresará el índice donde lo encontró. En caso de no encontrar coincidencia, retornará -1.

```js
const ordenes = [
  { ordenId: '001', total: 10, cliente: 'Juan' },
  { ordenId: '002', total: 20, cliente: 'Fer' },
  { ordenId: '003', total: 50, cliente: 'Pedro' },
];

const miOrdenIndice = ordenes.findIndex((orden) => orden.cliente === 'Fer');
// -> 1

const ordenNoEncontradaIndice = ordenes.findIndex((orden) => orden.cliente === 'Pepito');
// -> -1
```

::: warning
Ten cuidado al utilizar el valor devuelto por `findIndex` en una condición, ya que tienes que ser explícito en la comparación.

```js
const ordenes = [
  { ordenId: '001', total: 10, cliente: 'Juan' },
  { ordenId: '002', total: 20, cliente: 'Fer' },
  { ordenId: '003', total: 50, cliente: 'Pedro' },
];

const ordenIndice = ordenes.findIndex((orden) => orden.cliente === 'Pepito');
// -> -1

// MAL
if (ordenIndice) {
  console.log('Esto sí se ejecuta');
}

// BIEN
if (ordenIndice !== -1) {
  console.log('Esto no se ejecuta');
}
```

La clave está en que -1 no es un valor [falsy](../bang-bang-operator/), es decir, no se evalúa como falso en la condición.

:::

## map [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)

A veces necesitamos modificar todos los elementos de un arreglo de una forma especial pero sin alterar el arreglo original. Para esto tenemos `map`, el cual nos regresará un nuevo arreglo con los datos modificados en él. Veamos un ejemplo:

```js
const numeros = [1, 2, 3, 4, 5];

const numerosDoble = numeros.map((numero) => numero * 2);
// -> [2, 4, 6, 8, 10]
```

Dentro de la función `map` puedes hacer cualquier tipo de operación, así que imagina las posibilidades 😮. Pero ten cuidado si vas a hacer algo asíncrono, no obtendrás el resultado esperado 😬.

## some [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/some)

Con `some` podemos verificar si algún elemento dentro de nuestro arreglo cumple cierta condición. Con al menos uno que cumpla, `some` retornará verdadero. En caso contrario, retornará falso.

Si recuerdas los [operadores lógicos](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operadores_l%C3%B3gicos), esto sería un `OR`.

```js
function esPar(numero) {
  return numero % 2 === 0;
}

const numeros = [1, 2, 5];
const hayPar = numeros.some(esPar);
// -> true

const numeros = [1, 3, 5];
const hayPar = numeros.some(esPar);
// -> false
```

::: tip
No es necesario pasar una función anónima como callback, también puedes usar funciones nombradas.

Pero recuerda no poner paréntesis, ya que se está pasando como argumento y no ejecutándose en el momento.

```js
function esPar(numero) {
  return numero % 2 === 0;
}

const numeros = [1, 3, 5];
const hayPar = numeros.some(esPar());
// -> ERROR
```

:::

## every [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/every)

Con este método podemos verificar que todos los elementos de la colección cumplan cierta condición. Podríamos decir que es el contrario de `some`, porque con un elemento que no cumpla, `every` retornará falso.

En [operadores lógicos](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operadores_l%C3%B3gicos), `every` sería un `AND`.

```js
function aproboExamen(calificacion) {
  return calificacion >= 6;
}

const calificaciones = [10, 8, 10, 6];
const todosAprobaron = calificaciones.every(aproboExamen);
// -> true

const calificaciones = [10, 8, 10, 5];
const todosAprobaron = calificaciones.every(aproboExamen);
// -> false
```

## reduce [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)

`reduce` te permite operar todos los elementos de un arreglo y al final obtener un único valor como resultado. Esto suena raro pero un ejemplo lo puede explicar mejor:

```js
const ordenItems = [
  { item: 'Manzana', precio: 15, cantidad: 1 },
  { item: 'Pera', precio: 9, cantidad: 5 },
  { item: 'Mango', precio: 12, cantidad: 3 },
];
const totalOrden = ordenItems.reduce((total, item) => {
  const totalItem = item.precio * item.cantidad;
  return total + totalItem;
}, 0);
// -> 96
```

`reduce` recibe como primer argumento una función a la cual se le pasa el acumulador y el elemento actual. Esta función debe retornar el valor que será usado como acumulador en la siguiente iteración. Opcionalmente, puedes pasar un segundo argumento que se tomará como valor inicial del acumulador. En caso de no pasar ese valor, el primer elemento ocupará ese lugar.

Te dejo el mismo ejemplo pero con la sintaxis un poco más clara:

```js
const ordenItems = [
  { item: 'Manzana', precio: 15, cantidad: 1 },
  { item: 'Pera', precio: 9, cantidad: 5 },
  { item: 'Mango', precio: 12, cantidad: 3 },
];

function funcionAcumuladora(total, item) {
  const totalItem = item.precio * item.cantidad;
  return total + totalItem;
}
const valorInicial = 0;
const totalOrden = ordenItems.reduce(funcionAcumuladora, valorInicial);
// -> 96
```

::: tip
El acumulador puede ser cualquier tipo de variable (string, número, objeto, arreglo, etc.), te muestro un ejemplo con el que me enfrenté en el trabajo:

```js
const grupos = [
  {
    nombre: 'Grupo A',
    topicos: [
      { nombre: 'Topico 1A', porcentaje: 60 },
      { nombre: 'Topico 2A', porcentaje: 40 },
    ],
  },
  { nombre: 'Grupo B', topicos: [{ nombre: 'Topico 1B', porcentaje: 80 }] },
  { nombre: 'Grupo C', topicos: [{ nombre: 'Topico 1C', porcentaje: 50 }] },
];

const topicos = grupos.reduce((topicosObjeto, grupo) => {
  grupo.topicos.forEach((topico) => {
    topicosObjeto[topico.nombre] = topico.porcentaje;
  };

  return topicosObjeto;
}, {});
// -> { 'Topico 1A': 60, 'Topico 2A': 40, 'Topico 1B': 80, 'Topico 1C': 50 }
```

Para ese sistema necesitaba mostrar una tabla con cada tópico como columna sin importar el nombre del grupo al que perteneciera. Como puedes ver, el valor inicial era un objeto al que en cada iteración se le agregaba una nueva llave (el nombre de cada tópico) y un valor (el porcentaje del tópico).

Normalmente `reduce` se usa para valores numéricos, pero la gama de posibilidades es realmente grande.
:::

## join [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join)

Con `join` podemos formar un nuevo string (cadena de texto) uniendo todos los elementos de la colección. Nosotros podemos elegir el caracter o caracteres que se intercalarán entre los elementos. Si no pasamos ningún argumento, por defecto unirá los elementos con una coma (,).

```js
const nombres = ['Fer', 'Raúl', 'Pedro'];

nombres.join();
// -> Fer,Raúl,Pedro

nombres.join(' - ');
// -> Fer - Raúl - Pedro
```

Un método simple pero bastante útil.

## includes [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/includes)

`includes` nos permite verificar si un elemento se encuentra en un arreglo. El valor de retorno será un booleano, por lo que puedes usarlo en condicionales.

```js
const nombres = ['Fer', 'Raúl', 'Pedro'];

nombres.includes('Fer');
// -> true

nombres.includes('Pepito');
// -> false
```

Para casos sencillos, donde lo que se busca es un string o un número, puede ser muy efectivo.

## flat [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/flat)

## flatMap [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/flatMap)

Happy coding! 🥸

<Disqus />
