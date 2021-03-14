# ES6+ características (Parte 1)

Con la versión de ECMAScript 2015 (ES6) y todas las que siguieron, Javascript dio un giro total e incorporó muchas nuevas características que mejoraron y arreglaron el lenguaje. Hoy trataré de mostrarte algunas de las más relevantes pero te recomiendo revisar este [repositorio](https://github.com/tc39/proposals) para estar al tanto de las novedades en JS.

![Iron Man](./iron-man.gif)

> Imagina que ES6+ es a JS como la armadura es a Tony Stark 😎.

Este artículo se dividirá para no hacerlo muy largo y para poder actualizarlo fácilmente conforme vaya evolucionando el estándar.

<!-- Aquí tienes los enlaces:

- Parte 1 **(aquí estás)**
  - Funciones flecha, Interpolación, Desestructuración, Operador spread, Parámetros rest, Parámetros por defecto
- [Parte 2](../es6-features-part-2/)
  - Promesas, Async/await, Encadenamiento opcional, Operador nullish, Módulos, Comas finales (trailing commas)
- [Parte 3](../es6-features-part-3/) -->

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
const alumnos = ['Fernando', 'Anahí'];
const alumno1 = alumnos[0];
const alumno2 = alumnos[1];

const persona = { nombre: 'Fer', edad: 23 };
const nombre = persona.nombre;
const edad = persona.edad;

// ---------------- Ahora ----------------
const [alumno1, alumno2] = ['Fernando', 'Anahí'];
// -> Fernando, Anahí

const { nombre, edad } = { nombre: 'Fer', edad: 23 };
// -> Fer, 23
```

También puedes declarar las variables primero, pero debes cambiar a `let`.

```js
let alumno1, alumno2, nombre, edad;
[alumno1, alumno2] = ['Fernando', 'Anahí'];
// Debes agrupar esta sentencia en paréntesis para evitar errores de sintaxis.
// Esto se debe a que las llaves representan bloques de código.
({ nombre, edad } = { nombre: 'Fer', edad: 23 });
```

Puedes usar el [operador rest](#parámetros-rest) para guardar en un arreglo u objeto el resto de valores.

```js
const [alumno1, ...restoAlumnos] = ['Fernando', 'Anahí', 'Pedro', 'Laura'];
// -> Fernando, [Anahí, Pedro, Laura]

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
const [alumno1, alumno2 = 'Anahí'] = ['Fernando'];
// -> Fer, Anahí

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

::: tip
También puedes desestructurar los parámetros de una función.

```js
const persona = { nombre: 'Fer', edad: 23 };

const logPersona = (persona) => console.log(persona.nombre, persona.edad);
// -> Fer, 23

const logPersona = ({ nombre, edad }) => console.log(nombre, edad);
// -> Fer, 23
```

Debes escribir los paréntesis siempre que quieras desestructurar.
:::

## [Operador spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

Con esta nueva sintaxis podemos "expandir" un arreglo u objeto dentro de otro arreglo, objeto o función. Lo que hará el **operador spread (`...`)** es tomar cada item o propiedad y los copiará donde tú le indiques.

```js
const grupoA = ['Carlos', 'Pedro'];
const grupoB = ['Fernando', ...grupoA];
// -> ['Fernando', 'Carlos', 'Pedro']

const persona = { nombre: 'Anahí' };
const estudiante = { ...persona, clase: 'Programación' };
// -> { nombre: 'Anahí', clase: 'Programación' }

const numeros = [3, 5];
const suma = (a, b) => a + b;
suma(...numeros);
// -> 8
```

Con esto puedes copiar fácilmente un arreglo u objeto.

```js
const numeros = [1, 2, 3];
const numerosCopia = [...numeros];

const orden = { id: 1, total: 10 };
const ordenCopia = { ...orden };
```

::: warning
En caso de que tengas arreglos u objetos anidados, sus referencias se mantendrán y cualquier cambio afectará a los originales. Revisa mi artículo sobre [referencias](../reference-vs-value/) para saber más.
:::

## [Parámetros rest](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters)

Los `parámetros rest` usan la misma sintaxis que el [operador spread](#operador-spread): los tres puntos (...). Pero en este caso se usa para indicar que se recibirá un número indefinido de parámetros en una función. Veamos cómo:

```js
function suma(...numeros) {
  return numeros.reduce((total, numero) => total + numero, 0);
}

suma(1, 2, 3, 4);
// -> 10
```

Los argumentos se guardan en un arreglo, el cual **posee todos los métodos y propiedades de arreglos (map, filter, reduce, etc.)**. Hago énfasis en esto porque la forma antigua de resolver este problema era con **arguments**, el cual es un [Array-like](https://stackoverflow.com/questions/29707568/javascript-difference-between-array-and-array-like-object), es decir, comparte cierta similitud con los arreglos pero no es uno, por lo que no puedes usar métodos como map.

Este es el mismo ejemplo pero con **arguments**. Como ves, **arguments** no es definido como parámetro, simplemente accedemos a él dentro la función. Bastante extraño a mi parecer. **Ya no lo uses 😅.**

```js
function suma() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

suma(1, 2, 3, 4);
// -> 10
```

::: tip
Si requieres más parámetros en tu función, **siempre deja el parámetro rest al final**.

```js
function separarNombres(separador, ...nombres) {
  return nombres.join(separador);
}

separarNombres('-', 'Fer', 'Anahí', 'Ana');
// -> Fer-Anahí-Ana
```

:::

## [Parámetros por defecto](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Default_parameters)

Esta funcionalidad es una de las que más necesitaba el lenguaje, ya que es muy común que nuestras funciones no requieran todos los parámetros en todas las llamadas. Y la forma en que se hacía anteriormente era algo incómoda.

```js
// ----------- Antes -----------
function formatearFecha(fecha, mostrarHora) {
  mostrarHora = mostrarHora || false;

  // Mandamos `undefined` para evitar que la propiedad
  // `timeStyle` aparezca en el objeto final.
  const options = {
    dateStyle: 'short',
    timeStyle: mostrarHora ? 'short' : undefined,
  };

  return new Intl.DateTimeFormat('es-MX', options).format(fecha);
}

// ----------- Ahora -----------
function formatearFecha(fecha, mostrarHora = false) {
  const options = {
    dateStyle: 'short',
    timeStyle: mostrarHora ? 'short' : undefined,
  };

  return new Intl.DateTimeFormat('es-MX', options).format(fecha);
}
```

Con el operador `OR ||` conseguíamos el resultado esperado, ya que si un parámetro no es definido, llega a la función como `undefined` y evalúa a falso. En pocas palabras le decíamos "toma el primer valor si existe, sino toma el segundo".

```js
mostrarHora = undefined || false;
```

Funcionaba pero no era lo ideal, ya que escribíamos código innecesario. Ahora con el simple hecho de igualar el parámetro al valor que necesitamos, es más que suficiente.

```js
function formatearFecha(fecha, mostrarHora = false) {...}
```

::: warning
Si quieres forzar a que un parámetro tome el valor por defecto, debes pasar `undefined` explícitamente, ya que es el único valor con el que indicamos que el parámetro no existe.

```js
function mostrarNombre(nombre = 'Juan', apellido = 'Hernandez') {
  console.log(`${nombre} ${apellido}`);
}

mostrarNombre();
// -> Juan Hernandez
mostrarNombre('Pedro');
// -> Pedro Hernandez
mostrarNombre(undefined, 'Sánchez');
// -> Juan Sánchez
```

:::

::: tip
Con la nueva API [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) del navegador para fechas, podemos evitar el uso de librerías externas en muchos casos.
:::

::: tip
La sintaxis `condición ? verdadero : falso` se conoce como [operador ternario](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) y es útil para escribir `if`s de manera sencilla.
:::

## Conclusión

En lo personal, me encantan las mejoras que se implementaron al lenguaje. Ahora se puede escribir código muy limpio y elegante 😎👌.

Te veo pronto. Happy coding! 🥸

<Disqus />
