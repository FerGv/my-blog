# Buenas prácticas

Las **buenas prácticas** hacen referencia a las guías o estándares que se recomiendan seguir para **escribir código de calidad** (legible, fácil de entender, etc). Por calidad no se refiere a que funcione mejor o más rápido (no necesariamente), porque hasta el código más feo y con malas prácticas puede funcionar y hacer lo que debe hacer, pero ese no es el chiste de ser programador 😎.

![Polite](./polite.jpg)

::: tip
Varias cosas de las que veremos hoy y muchas más las puedes encontrar en este repositorio de GitHub llamado ["Clean code Javascript"](https://github.com/ryanmcdermott/clean-code-javascript).
:::

## Nombres de variables, funciones, etc.

De las principales cosas que debes cuidar al escribir código es el nombre que asignas a variables, funciones, clases o cualquier objeto. Aunque parece algo obvio, créeme que me he encontrado código como este:

```js
const f = new Date();
const m = f.getMonth();
```

Sé que en ese momento `f` y `m` tenían mucho sentido para ti, pero en unos meses ya ni tú recordarás qué hacían, ahora imagínate a alguien más que le tenga que dar mantenimiento. **Por favor, asigna nombres descriptivos**.

Te dejo 2 recomendaciones que aplican en JS:

- Usar `lowerCamelCase` para variables y funciones. Y `PASCAL_CASE` para enumeradores.

```js
const fechaActual = new Date();

function calcularAreaCirculo(radio) {
  const PI = 3.1416;
  return PI * radio * radio;
}
```

- Usar `UpperCamelCase` para clases.

```js
class Empleado {
  constructor(nombre) {
    this.nombre = nombre;
  }
}
```

::: tip
**Escribe tu código en inglés**. Yo lo escribo en español para mantener la consistencia con el idioma del artículo pero en el mundo real todo lo hago en inglés.
:::

## Declarar propiedades en objetos

Al definir propiedades en objetos, normalmente coincide el nombre de la propiedad con el nombre de la variable que guarda su valor. Para estos casos ya no es necesario repetir el nombre. Veamos cómo:

```js
const nombre = 'Fer';

// Antes
const persona = { nombre: nombre };

// Ahora
const persona = { nombre };
```

::: tip
Cuando el nombre de la propiedad sigue el estilo `lowerCamelCase`, puedes omitir las comillas.
:::

## Modo estricto

El [modo estricto](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode) le indica al intérprete que debe ser más riguroso en cómo procesa cada instrucción. Javascript es un lenguaje muy "relajado", me refiero a que te permite hacer muchas cosas que normalmente no podrías en otro lenguaje como sumar números y cadenas de texto, usar variables que no han sido declaradas, entre algunas otras.

El modo estricto se activa por defecto en los módulos de ES6, pero si no los estás usando, simplemente agrega la siguiente línea al inicio de tu script:

```js
'use strict';
```

Aunque parece un simple string, el intérprete sabe identificarlo y ahora lanzará errores en lugar de fallar silenciosamente. El modo estricto tiene muchos beneficios pero uno de los principales es evitar la creación accidental de variables que no han sido declaradas.

```js
'use strict';

const nombre = 'Fer';
Nombre = 'Pedro'; // -> Uncaught ReferenceError: Nombre is not defined
console.log(nombre);
```

## Retorno rápido

Cuando aprendes a programar te enseñan que un `if` puede tener su contraparte `else` y que debes usarla cuando no se cumpla la condición. Así que con esto en mente, el siguiente código sería correcto:

```js
function saludar(nombre) {
  if (nombre) {
    return `Hola ${nombre}`;
  } else {
    return null;
  }
}
```

Y no está mal pero podemos hacerlo más legible. Ya que solo tenemos dos caminos, uno de ellos podría ser el camino por defecto y el otro la excepción. Así podemos eliminar el `else` y hasta podemos eliminar las llaves y el `null`.

```js
function saludar(nombre) {
  if (!nombre) return;

  return `Hola ${nombre}`;
}
```

Este patrón se llama **"early return" (retorno rápido)** y es muy usado para terminar la ejecución de una función en cuanto se encuentre un error o excepción. Podríamos decir que es más fácil verificar cuándo no debemos hacer nada.

## Operador ternario

El [operador ternario](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) es una simplificación de un `if..else`. La sintaxis es `condicion ? verdadero : falso` y retornará el valor de las expresiones.

```js
let nombre;
if (true) {
  nombre = 'Fer';
} else {
  nombre = 'Pedro';
}

const nombre = true ? 'Fer' : 'Pedro';
// -> 'Fer'
```

Con este operador podemos adaptar el ejemplo del punto anterior de la siguiente manera:

```js
function saludar(nombre) {
  return nombre ? `Hola ${nombre}` : null;
}

// Usando funciones flecha
const saludar = (nombre) => (nombre ? `Hola ${nombre}` : null);
```

## No condiciones para booleanos

## Triple igual

## Objeto en lugar de switch

## Módulos

## Guías de estilo
