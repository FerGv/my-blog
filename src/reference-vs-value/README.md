# Por referencia vs por valor

Un pequeño problema con el que te puedes enfrentar más de una vez en Javascript es algo así:

```js
const nombres = ['Fer', 'Miri'];
const nombresCopia = nombres;

nombresCopia.push('Andrea');
console.log(nombres);
// -> ['Fer', 'Miri', 'Andrea']
console.log(nombresCopia);
// -> ['Fer', 'Miri', 'Andrea']
```

Sin que nadie lo esperara, el arreglo original también se modificó 😯. El problema está en que cualquier valor que no sea [primitivo](https://developer.mozilla.org/es/docs/Glossary/Primitive) (string, number, boolean) en realidad no se copia su valor, sino su referencia.

::: warning
Javascript no permite ver las referencias de cada objeto como lo hacen otros lenguajes (ej. Python).

```python
>>> persona = { 'nombre': 'Fer', 'edad': 23 }
>>> id(persona)
#  2894665420096
```

:::

Veamos un ejemplo con un primitivo:

```js
let nombre = 'Fer';
let nombreCopia = nombre;

nombreCopia += ' Gv';
console.log(nombre);
// -> Fer Gv
console.log(nombreCopia);
// -> Fer
```

Como puedes ver, los strings al ser primitivos, se crea una copia de su valor. Lo mismo ocurre cuando se pasan como argumentos, si es primitivo no se modificará el original.

```js
// ---------- PRIMITIVOS ----------
function modificarMensaje(mensaje) {
  mensaje += '!';
  console.log(mensaje);
  // -> Hola!
}
const mensaje = 'Hola';
modificarMensaje(mensaje);
console.log(mensaje);
// -> Hola

// ---------- NO PRIMITIVOS ----------
function modificarPersona(persona) {
  persona.edad = 23;
  console.log(persona);
  // -> { nombre: 'Fer', edad: 23 }
}
const persona = { nombre: 'Fer' };
modificarPersona(persona);
console.log(persona);
// -> { nombre: 'Fer', edad: 23 }
```

::: tip
Para crear una copia de un arreglo o un objeto, puedes usar el [operador spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

```js
const nombres = ['Fer', 'Miri'];
const nombresCopia = [...nombres];

nombresCopia.push('Andrea');
console.log(nombres);
// -> ['Fer', 'Miri']
console.log(nombresCopia);
// -> ['Fer', 'Miri', 'Andrea']
```

Pero ten cuidado, este operador solo copia el primer nivel dentro de la colección, si tienes arreglos u objetos anidados, mantendrá las referencias a ellos. Para hacer una copia a más niveles de profundidad te recomiendo usar [Lodash `cloneDeep`](https://lodash.com/docs/#cloneDeep)
:::

Como conclusión, para valores primitivos se crea una copia de su valor y para los no primitivos, lo que se copia es la referencia. Recuerda esto la siguiente vez que necesites referenciar un valor o pasarlo como argumento.

Happy coding! 🥸
