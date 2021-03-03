# Var, let, const

En los tiempos oscuros de Javascript, cuando era el chico feo de los lenguajes de programación, solo existía un tipo de declaración de variables, el famoso y odiado `var`.

```js
var miVariable = 'hola';
```

Por la naturaleza de JS, no es necesario declarar el tipo de variable, ya que es [dinámicamente tipado](https://developer.mozilla.org/es/docs/Glossary/Dynamic_typing), es decir, el intérprete reconoce el tipo al momento de la ejecución. Es por esto que nunca verás declaraciones al estilo Java o C:

```java
String miVariable = "hola";
```

::: tip
Como dato curioso, en Java sí hay distinción entre comillas simples (') y dobles ("). Así que ten cuidado 👁️.
:::

::: warning
Recuerda ejecutar JS en [modo estricto](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode). Así evitarás varios errores silenciosos como el uso de variables que no han sido declaradas previamente.
:::

## Ámbito (scope)

Lo primero que hay que entender, es el [ámbito (scope)](<https://es.wikipedia.org/wiki/%C3%81mbito_(programaci%C3%B3n)>) que una variable puede tener. En Javascript encontramos 3 tipos:

- **Global**

  El ámbito global está disponible para todo el programa, fuera y dentro de funciones, en cualquier estructura de control (if, for, while).

  ```js
  const nombre = 'Fer';

  function miFuncion() {
    console.log(nombre);
    // -> Fer
  }

  function miFuncion2() {
    console.log(nombre);
    // -> Fer
  }

  if (nombre) {
    console.log(nombre);
    // -> Fer
  }
  ```

- **Local**

  Las variables declaradas dentro de funciones, solo pueden ser usadas dentro de la misma, es decir, su alcance es local.

  ::: tip
  Las funciones anidadas o [closures](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures) también pueden acceder a dichas variables.
  :::

  ```js
  function miFuncion() {
    const nombre = 'Fer';
    console.log(nombre);
    // -> Fer

    function miFuncionAnidada() {
      console.log(nombre);
      // -> Fer
    }
  }

  function miFuncion2() {
    console.log(nombre);
    // -> ERROR
  }

  // ERROR
  if (nombre) {
    console.log(nombre);
  }
  ```

- **Bloque**

  El ámbito de bloque está limitado a las llaves `{}` que rodean la declaración, es decir, dentro de la función o estructura de control.

  ```js
  function miFuncion() {
    // Solo se puede usar dentro de la función.
    const nombre = 'Fer';
  }

  if (true) {
    // Solo se puede usar dentro del if.
    const nombre = 'Fer';
    console.log(nombre);
    // -> Fer
  } else {
    // Solo se puede usar dentro del else.
    const nombre = 'Pedro';
    console.log(nombre);
    // -> Pedro
  }

  for (let i = 0; i < 5; i++) {
    // Solo se puede usar dentro del for.
    console.log(i);
  }
  ```

Con esto en mente, `let` y `const` son de tipo `bloque`, pero dependiendo dónde las declares pueden entrar en diferente ámbito. Por su parte, `var` solo entra en los primeros 2 ámbitos.

## [var](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/var)

Con `var` puedes reasignar las veces que necesites y cualquier tipo de valor.

```js
var miVariable = 'hola';
miVariable = 10;
miVariable = true;
```

Si `var` se utiliza dentro de una función, se toma como local y si es fuera, como global.

```js
var variableGlobal = 'Global';

function miFuncion() {
  var variableLocal = 'Local';
}
```

Hasta aquí no parece haber ningún problema con `var`, pero existen algunas situaciones donde se puede comportar de manera extraña:

**Redeclaración**

`var` se puede redeclarar, por lo que podrías sobreescribir una variable por error.

```js
var PI = 3.14;
// ... mucho código espagueti ...
var PI = 3.1416;
```

**Ámbito (scope)**

Debido a lo anterior, una variable podría ser cambiada en un ámbito de bloque.

```js
function cambiarPI() {
  var PI = 3.14;
  console.log(PI);
  // -> 3.14

  if (true) {
    var PI = 3.1416;
    console.log(PI);
    // -> 3.1416
  }

  console.log(PI);
  // -> 3.1416
}
```

[**Hoisting**](https://developer.mozilla.org/es/docs/Glossary/Hoisting)

Cuando declaras una variable con `var`, se le aplica hoisting, es decir, se "eleva" la declaración de la variable. Es un concepto extraño, mejor veamos un ejemplo:

```js
console.log(nombre);
// -> undefined
var nombre = 'Fer';
```

Aunque a primera vista eso debería lanzar un error, internamente lo que pasó fue:

```js
// La declaración de la variable es movida al inicio.
var nombre;
console.log(nombre);
// -> undefined
nombre = 'Fer';
```

Para evitar este tipo de situaciones es que se agregaron al estándar nuevas instrucciones para la declaración de variables: `let` y `const`.

## [let](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let)

Cuando una variable puede cambiar el valor con el que fue inicializada, entonces debes usar `let`, ya que permite reasignar un valor las veces que sean necesarias.

```js
let contador = 0;
contador += 1;
console.log(contador);
// -> 1
```

::: tip
La expresión `contador += 1` es equivalente a `contador = contador + 1` y a `contador++`. Si quieres conocer más acerca de expresiones y operadores, te recomiendo leer la [documentación de la MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators)
:::

## [const](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const)

Pero si tú necesitas un valor que se mantenga constante durante toda la ejecución del programa (que no se reasigna), entonces debes usar `const`.

```js
const nombre = 'Fer';
nombre = 'Pablo';
// -> ERROR
```

::: danger
`const` no permite la reasignación pero cuando trabajas con arreglos u objetos, lo que se asigna a la variable no es el valor del arreglo u objeto, sino la referencia al mismo. Por lo tanto, aunque los declares con `const`, siguen siendo mutables.

```js
const perritos = ['Tobby'];
perritos.push('Bobby');
console.log(perritos);
// -> ['Tobby', 'Bobby']

const edades = { fer: 23, pedro: 30 };
edades.fer = 24;
console.log(edades);
// -> { fer: 24, pedro: 30 }
```

Actualmente no existen arreglos ni objetos inmutables, pero no por mucho tiempo. Ya están trabajando en la propuesta de [Records y Tuplas](https://github.com/tc39/proposal-record-tuple) que muy pronto se incorporará al estándar.
:::

Posiblemente te encuentres con `var` en varios tutoriales o [código legacy](https://es.wikipedia.org/wiki/C%C3%B3digo_heredado), pero como recomendación **ya no lo uses**. Procura usar las nuevas características del lenguaje y siempre opta por `let` y `const`.

Nos vemos en la próxima. Happy Coding! 🥸
