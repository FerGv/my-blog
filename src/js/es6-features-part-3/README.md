# ES6+ características (Parte 3)

Continuemos viendo lo nuevo en Javascript, recuerda que este es el tercer artículo en el que hablamos sobre las características de ES6+, si quieres consultar los demás aquí tienes los enlaces:

- [Parte 1](../es6-features/)
  > Funciones flecha, Interpolación, Desestructuración, Operador spread, Parámetros rest, Parámetros por defecto
- [Parte 2](../es6-features-part-2/)
  > Promesas, Async/await, Encadenamiento opcional, Operador nullish, Módulos, Comas finales (trailing commas)
- Parte 3 **(aquí estás)**
  > Map, Set, Clases, Atributos privados, métodos de objetos, arreglos, strings, promesas.
  <!-- TODO: complete links -->
  <!-- - [Parte 4](../es6-features-part-4/) -->

<!-- TODO add gif -->

## [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

El objeto `Map` es parecido a un objeto tradicional `{}` pero la principal diferencia entre ellos está en sus respectivas llaves: un objeto `Map` puede tener cualquier tipo de variable como llave mientras que el objeto tradicional `{}` solo puede tener llaves que sean cadenas de texto (strings).

```js
// Map
const miMapa = new Map(); // (1)
miMapa.set('nombre', 'Fer'); // (2)
miMapa.set('edad', 25);
miMapa.set('gustos', ['programación', 'música', 'escribir']);

// Objeto
const miObjeto = {
  nombre: 'Fer', // No es necesario usar comillas para las llaves
  edad: 25,
  gustos: ['programación', 'música', 'escribir'],
};
```

::: danger
Por favor no uses la sintaxis de constructor de objetos `new Object()`. Técnicamente no está mal pero es considerada mala práctica. Puedes revisar el porqué en el siguiente link: [Documentación de ESLint](https://eslint.org/docs/latest/rules/no-new-object).

```js
// Mala práctica
const miObjeto = new Object();

// Buena práctica
const miObjeto = {};
```

:::

1. Creamos una instancia de la clase `Map` con la sintaxis de contructor `new Map()`.

> Similar a cómo lo hacemos con `Date`.

```js
const miMapa = new Map();
```

2. Agregamos pares llave-valor con el método `set(llave, valor)`. Tanto `llave` como `valor` pueden ser de cualquier tipo de dato (números, cadenas de texto, booleanos, objetos, arreglos, etc.).

```js
// Llave como cadena de texto
miMapa.set('nombre', 'Fer');

// Llave como número
miMapa.set(1, 'uno');

// Llave como arreglo
miMapa.set([1,2,3], 'arreglo');

// Llave como objeto
miMapa.set({ a: 'b' }, 'objeto');

// Un poquito raro pero válido
miMapa.set([1,2,3], { a: 'b' });
```

Y para obtener los valores usamos el método `get(llave)`.

```js
miMapa.get('nombre');
miMapa.get(1);
miMapa.get([1,2,3]);
miMapa.get({ a: 'b' });
```

Otro punto importante de los mapas es que conservan el orden en que fueron agregadas las llaves y sus valores, por lo que cada ocasión que intentes iterar sobre ellos, obtendrás el mismo resultado. Esto en teoría funciona igual en los objetos, pero no es el estándar.

```js
const miMapa = new Map();
miMapa.set('llave1', 1);
miMapa.set('llave2', 2);

// Recorrer solo las llaves
for (const llave of miMapa.keys()) {
  console.log(llave, miMapa.get(llave));
}

// Recorrer solo los valores
for (const valor of miMapa.values()) {
  console.log(valor);
}

// Recorrer llaves y valores al mismo tiempo
for (const [llave, valor] of miMapa.entries()) {
  console.log(llave, valor);
}
```

## [Set](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set)

El objeto `Set` es parecido a un arreglo pero sin la posibilidad de repetir items, además de que nos permite realizar operaciones especiales con otros objetos `Set`.

```js
const miSet = new Set(); // (1)
miSet.add(1); // (2)
miSet.add(2);
miSet.add(2);
console.log(miSet);
// -> {1, 2}
console.log(miSet.has(1)); // (3)
// -> true
```

1. Creamos un objeto con la sintasix de contructor `new Set()`.
2. Agregamos elementos con el método `add(item)`. Internamente el _set_ validará si ya fue guardado el item para no repetirlo.
3. Con el método `has(item)` podemos validar si existe un item en el _set_.

## [Clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/class)

## [Atributos privados](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

## Nuevos métodos de objetos

### [values()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

### [entries()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

### [fromEntries()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

## Nuevos métodos de arreglos

De estos hablé en detalle en mi artículo [Métodos de arreglos](../array-methods/).

## Nuevos métodos de strings

### [matchAll()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)

### [replaceAll()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

(Lo siento, no encontré la documentación oficial en español 😬)

## [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

## Métodos de promesas

### [all()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

### [allSettled()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

(Lo siento, no encontré la documentación oficial en español 😬)

### [any()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

(Lo siento, no encontré la documentación oficial en español 😬)

### [race()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

## [Separador numérico](https://github.com/tc39/proposal-numeric-separator)

(Lo siento, no encontré la documentación oficial en español 😬)

## Conclusión

Te veo pronto. Happy coding! 🥸

<Disqus />
