# Métodos de arreglos

A partir de la versión de ECMAScript 2015 (ES6), se incorporaron al lenguaje algunos métodos para los arreglos bastantes útiles. Esto nos permite programar en Javascript usando el [paradigma funcional](https://es.wikipedia.org/wiki/Programaci%C3%B3n_funcional), en el cual se busca ser más declarativo, es decir, preocuparnos por el **qué** se debe hacer y no por el **cómo** se debe hacer.

Así que manos a la obra.

![Mr Incredible](./mr-incredible.jpg)

## forEach

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

::: tip
Durante este tutorial estaremos usando [funciones flecha](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions) para simplificar el código pero puedes usar funciones tradicionales sin ningún problema.
:::

## filter

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

## find

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

## map

A veces necesitamos modificar todos los elementos de un arreglo de una forma especial pero sin alterar el arreglo original. Para esto tenemos `map`, el cual nos regresará un nuevo arreglo con los datos modificados en él. Veamos un ejemplo:

```js
const numeros = [1, 2, 3, 4, 5];

const numerosDoble = numeros.map((numero) => numero * 2);
// -> [2, 4, 6, 8, 10]
```

Dentro de la función `map` puedes hacer cualquier tipo de operación, así que imagina las posibilidades 😮. Pero ten cuidado si vas a hacer algo asíncrono, no obtendrás el resultado esperado 😬.

## some

## every

## reduce

## join

## findIndex

## includes

Happy coding! 🥸

<Disqus />
