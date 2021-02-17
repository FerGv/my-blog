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
```

::: warning
Recuerda que `filter` no modifica el arreglo original.
:::

## find
## map
## some
## every
## reduce
## join

Happy coding! 🥸

<Disqus />
