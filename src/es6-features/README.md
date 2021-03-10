# ES6+ características

Con la versión de ECMAScript 2015 (ES6) y todas las que siguieron, Javascript dio un giro total e incorporó muchas nuevas características que mejoraron y arreglaron el lenguaje. Hoy trataré de mostrarte algunas de las más relevantes pero te recomiendo revisar este [repositorio](https://github.com/tc39/proposals) para estar al tanto de las novedades en JS.

## [Funciones flecha](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

Se incorporó una nueva forma de crear funciones (más limpia a mi parecer 😅). Te muestro cómo:

```js
function funcionTradicional() {
  console.log('Hola Mundo');
}

const funcionFlecha = () => {
  console.log('Hola Mundo');
};
```

Como puedes ver, se eliminó la palabra `function` y se agregó el símbolo de flecha `=>` (de ahí su nombre). Pero en algunos casos, la sintaxis puede ser todavía más compacta:

```js
// Declaración tradicional
const suma = (a, b) => {
  return a + b;
};

// Equivalente a:
const suma = (a, b) => a + b;
```

Cuando tu función es de una sola línea, puedes eliminar las llaves `{}`. Y si lo único que hace es retornar un valor, también puedes eliminar la palabra `return`. Es más, si solo recibes un parámetro, también puedes eliminar los paréntesis.

<!-- prettier-ignore -->
```js
[1, 2, 3].forEach(numero => console.log(numero));
```

::: tip
Aunque es válido no poner paréntesis, según la [guía de estilos de Airbnb](https://github.com/airbnb/javascript), es buena práctica siempre escribirlos. Depende mucho del estilo que uses para programar pero siempre es bueno seguir estándares y guías de estilos predefinidas.
:::

En lo personal, me gusta bastante esta nueva forma de crear funciones y procuro usarla en la mayoría de casos. Pero ten cuidado, no suplen a las funciones tradicionales en todo, deja te muestro en ejemplito:

```js
const persona = {
  nombre: 'Fer',
  saludarTradicional: function() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
  saludarFlecha: () => {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

persona.saludarTradicional();
// -> 'Hola, mi nombre es Fer'
persona.saludarFlecha();
// -> 'Hola, mi nombre es undefined'
```

Esto tiene que ver con el contexto que toma cada tipo de función, **las funciones tradicionales toman el contexto en el que son ejecutadas, mientras que las funciones flecha toman el contexto externo en el que son declaradas**. Revisa esta [pregunta de StackOverflow](https://es.stackoverflow.com/questions/1799/cuando-usar-una-funci%C3%B3n-flechaarrow-function-en-vez-de-una-funci%C3%B3n-com%C3%BAn) para más información.

::: tip
También puedes usar la sintaxis reducida al declarar funciones tradicionales dentro de objetos o clases.

```js
const persona = {
  nombre: 'Fer',
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

class Persona {
  nombre = 'Fer';

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
}
```

Más adelante veremos acerca de [clases](#clases).
:::

## [Interpolación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)

Ahora podemos interpolar variables en cadenas de texto con los backticks `` ` `` (es el símbolo de acento grave, checa la distribución de tu teclado para saber cómo obtenerlo).

```js
const nombre = 'Fer';

// Concatenación
console.log('Hola ' + nombre);

// Interpolación
console.log(`Hola ${nombre}`);
```

Esto nos ayuda a escribir código mucho más claro y evitar esos molestos símbolos de `+` entre las cadenas de texto. También nos permiten escribir cadenas multilínea. Un caso muy común es cuando queremos agregar un elemento HTML mediante JS.

<!-- prettier-ignore -->
```js
const estudiante = 'Fer';
const listaEstudiantes = document.querySelector('ul');

// Concatenación
listaEstudiantes.insertAdjacentHTML('beforeend',
  '<li>' +
    '<a href="http://midominio.com/estudiantes/' + estudiante + '">' +
      estudiante +
    '</a>' +
  '</li>'
);

// Interpolación
listaEstudiantes.insertAdjacentHTML('beforeend',
  `<li>
    <a href="http://midominio.com/estudiantes/${estudiante}">
      ${estudiante}
    </a>
  </li>`
);
```

Definitivamente mucho mejor y limpio 🤓👌.

::: tip
[insertAdjacentHTML](https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentHTML) es la nueva forma de agregar un elemento HTML escribiendo su estructura como cadena de texto. Si estás familiarizado con [jQuery](https://jquery.com/), sería el equivalente a [append](https://api.jquery.com/append/) y [prepend](https://api.jquery.com/prepend/).

Por cierto, **ya no uses jQuery, por favor 🥺**.
:::

## [Desestructuración](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

La `desestructuración` nos permite obtener valores de un arreglo u objeto y asignarlos a variables en una misma sentencia.

```js
// ---------------- Antes ----------------
const alumnos = ['Fernando', 'Anahi'];
const alumno1 = alumnos[0];
const alumno2 = alumnos[1];

const persona = { nombre: 'Fer', edad: 23 };
const nombre = persona.nombre;
const edad = persona.edad;

// ---------------- Ahora ----------------
const [alumno1, alumno2] = ['Fernando', 'Anahi'];
// -> Fernando, Anahi

const { nombre, edad } = { nombre: 'Fer', edad: 23 };
// -> Fer, 23
```

También puedes declarar las variables primero, pero debes cambiar a `let`.

```js
let alumno1, alumno2, nombre, edad;
[alumno1, alumno2] = ['Fernando', 'Anahi'];
// Debes agrupar esta sentencia en paréntesis para evitar errores de sintaxis.
// Esto se debe a que las llaves representan bloques de código.
({ nombre, edad } = { nombre: 'Fer', edad: 23 });
```

Puedes usar el [operador rest](#parámetros-rest) para guardar en un arreglo u objeto el resto de valores.

```js
const [alumno1, ...restoAlumnos] = ['Fernando', 'Anahi', 'Pedro', 'Laura'];
// -> Fernando, [Anahi, Pedro, Laura]

const { nombre, ...restoPersona } = {
  nombre: 'Fer',
  edad: 23,
  profesion: 'desarrollador',
  género: 'masculino',
};
// -> Fer, { edad: 23, profesion: 'desarrollador', género: 'masculino' }
```

Para los objetos puedes cambiar el nombre de la propiedad que estás desestructurando. Solo escribe dos puntos y el nuevo nombre.

```js
const { nombre: miNombre, edad: miEdad } = { nombre: 'Fer', edad: 23 };
console.log(miNombre, miEdad);
// -> Fer, 23
```

También puedes asignar valores por defecto en caso de que el objeto no tenga la propiedad que buscas o no exista ese índice en el arreglo.

```js
const [alumno1, alumno2 = 'Anahi'] = ['Fernando'];
// -> Fer, Anahi

const { nombre: miNombre, edad: miEdad = 30 } = { nombre: 'Fer' };
// -> Fer, 30
```

::: tip
Ahora puedes hacer un intercambio de valores fácilmente. Olvídate de declarar una variable auxiliar como en los viejos tiempos.

```js
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);
// -> 2, 1
```

:::

## [Operador spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## [Parámetros rest](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters)

## [Parámetros por defecto](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Default_parameters)

## [Promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## [Async/await](https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Async_await)

## [Encadenamiento opcional](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## [Operador nullish](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

(Lo siento, no encontré la documentación oficial en español 😬)

## [Módulos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)

## [Comas finales (trailing commas)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas)

(Lo siento, no encontré la documentación oficial en español x2 😬)

Te dejo esta [lectura](https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8)(en inglés 😬) y esta [pregunta de StackOverflow](https://es.stackoverflow.com/questions/202727/como-funcionan-los-trailing-commas-en-javascript) para más información.

## [Map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map)

## [Set](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set)

## [Clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/class)

## [Atributos privados](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

<Disqus />
