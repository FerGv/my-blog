# Buenas prácticas

Las **buenas prácticas** hacen referencia a las guías o estándares que se recomiendan seguir para **escribir código de calidad** (legible, fácil de entender, etc). Por calidad no se refiere a que funcione mejor o más rápido (no necesariamente), porque hasta el código más feo y con malas prácticas puede funcionar y hacer lo que debe hacer, pero ese no es el chiste de ser programador 😎.

<p style="text-align: center">
  <img src="./polite.jpg" alt="Polite" />
</p>

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

::: warning
Dos recomendaciones con este operador:

- Aunque es posible anidar operadores ternarios, no es buena práctica hacerlo porque es muy complicado de leer.

<!-- prettier-ignore -->
```js
// MAL
const esIgualMenorMayor = numero1 === numero2
  ? 'Son iguales'
  : numero1 > numero2
    ? 'Número 1 es mayor'
    : 'Número 2 es mayor';
```

- De preferencia tampoco lo uses para realizar otro tipo de acciones que no sea retornar un valor.

```js
// MAL
guardarDescuento ? await guardarConDescuento() : await guardarSinDescuento();
```

:::

## Condiciones con booleanos

Cuando uses variables [falsy/truthy](../bang-bang-operator/) no es necesario que explícitamente las compares con **true/false/null**, ya que JS los puede interpretar correctamente:

```js
const esAdmin = true;
// MAL
if (esAdmin === true) {...}
// BIEN
if (esAdmin) {...}

const nombre = null;
// MAL
if (nombre === null) {...}
// BIEN
if (!nombre) {...}
```

Igualmente si quieres retornar un booleano con base en un valor **falsy/truthy**, no es necesario crear una condición, simplemente retorna el valor.

```js
// MAL
function esAdmin(usuario) {
  if (usuario.esAdmin) {
    return true;
  } else {
    return false;
  }
}

// BIEN
function esAdmin(usuario) {
  return usuario.esAdmin;
}


// MAL
function esAdmin(usuario) {
  const usuariosAdmin = [...];
  if (usuariosAdmin.includes(usuario)) {
    return true;
  } else {
    return false;
  }
}

// BIEN
function esAdmin(usuario) {
  const usuariosAdmin = [...];
  return usuariosAdmin.includes(usuario);
}
```

## Triple igual

Javascript posee dos operadores para las comparaciones: `==` y `===`. Al doble igual se le conoce como el [operador de igualdad débil](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Equality) y al triple igual como el [operador de igualdad estricta](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Strict_equality).

La principal diferencia entre ellos es que la igualdad estricta compara **valor y tipo**, mientras que la otra solo compara valor y realiza una [coerción de tipos](https://developer.mozilla.org/es/docs/Glossary/Type_coercion) para igualarlos, es decir, tratará de convertirlos al mismo tipo de dato. El cómo hace esta conversión es algo confuso y no te recomiendo que confíes en ello. Es por esto que siempre usa el triple igual `===` para tus condiciones.

```js
// MAL
2 == '2'; // -> true

// BIEN
2 === '2'; // -> false
2 === 2; // -> true
```

::: danger
Al comparar objetos (objetos literales, arreglos, instancias de clases, etc.) ninguna condición te servirá para saber si su contenido es igual porque lo que se compara en ellos son las referencias. Para esto te recomiendo el método [`isEqual` de Lodash](https://lodash.com/docs/#isEqual).

```js
{ a: 1 } === { a: 1 } // -> false
[1, 2, 3] === [1, 2, 3] // -> false

const objeto1 = { a: 1 };
const objeto2 = objeto1;
objeto1 === objeto2 // -> true
```

La única forma en que obtendrás verdadero es si los dos objetos apuntan a la misma referencia.

Revisa mi artículo ["Por referencia vs por valor"](../reference-vs-value/) para más información.
:::

## Objeto en lugar de switch

En algunas ocasiones usamos un switch para realizar una acción entre varias opciones dependiendo de algún valor. Algo como esto:

```js
let colorHexadecimal;
switch (nombreColor) {
  case 'rojo':
    colorHexadecimal = '#ff0000';
    break;
  case 'verde':
    colorHexadecimal = '#28a745';
    break;
  default:
    colorHexadecimal = '#000';
}
```

::: warning
No olvides escribir la palabra **break** al final de cada caso del switch. La sección **default** no lo necesita por ser la última.
:::

Pero ese switch lo podemos escribir de una manera más elegante usando un objeto:

```js
const COLORES = {
  rojo: '#ff0000',
  verde: '#28a745',
};
const colorHexadecimal = COLORES[nombreColor] || '#000';
```

Para el caso **default** usamos el operador `OR` ya que si no encuentra la llave en el objeto, retornará `undefined` y al ser evaluado será falso, por lo que se tomará la segunda parte de laexpresión.

## Módulos

Con los nuevos módulos de ES6, podemos darle una mejor estructura a nuestros archivos separando la lógica y evitando el problema de saber de dónde proviene cada cosas que usamos proveniente de diferente archivo.

### Exportar

Puedes exportar individualmente o por defecto los componentes de tu archivo. ¿Cuál es mejor? Bueno, eso depende mucho de tu caso de uso pero si solo vas a exportar una cosa en tu archivo, lo mejor sería que lo exportes por defecto.

```js
// Individualmente
export const suma = (a, b) => a + b;
export const resta = (a, b) => a - b;
export const multiplicación = (a, b) => a * b;
export const división = (a, b) => a / b;

// Por defecto
export default {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b,
  multiplicación: (a, b) => a * b,
  división: (a, b) => a / b,
};
```

### Importar

Para la importación depende mucho de cómo hayan sido exportados los componentes. Veamos los casos principales.

- Si fue una exportación por defecto, entonces puedes usar el nombre que quieras para guardar el elemento.

```js
import operaciones from './operaciones';
```

- Si fueron exportados individualmente, entonces puedes obtenerlos uno por uno escribiendo el mismo nombre con el que fue exportado. O si necesitas renombrar, puedes usar la palabra reservada `as`.

```js
import { suma, resta, multiplicacion, division } from './operaciones';
import { suma as miSuma, resta as miResta, multiplicacion, division } from './operaciones';
```

- Y si fueron exportados individualmente pero requieres importar todos los elementos y agruparlos, entonces puedes usar el asterisco `*` para importar todo y `as` para darle un nombre al agrupamiento.

```js
import * as operaciones from './operaciones';
```

::: warning
Debes usar la ruta relativa a tus archivos para indicarle a JS que no son módulos de librerías.
:::

## Guías de estilo

Las guías de estilo nos dan ciertas reglas o estándares que debemos cumplir para seguir su manera de programar. Éstas son creadas por la comunidad y están más orientadas a la legibilidad más que a la funcionalidad (aunque también ayudan). Y principalmente dependen del gusto del programador cuál seguir.

Las dos principales en JS son: [standardjs](https://standardjs.com/) y [la guía de estilos de Airbnb](https://github.com/airbnb/javascript).

¿Cuál es mejor? Realmente ninguna. Las dos te dan buenas reglas a seguir y te enseñan buenas prácticas de programación. En lo personal, yo comencé siguiendo **standardjs** pero hoy en día uso la de **Airbnb**.

::: tip
Todos mis artículos usan [la guía de estilos de Airbnb](https://github.com/airbnb/javascript).
:::

## Conclusión

Estas fueron solo unas pocas de la gran cantidad de buenas prácticas que existen. La verdad sería muy complicado recopilar todo pero no te preocupes, las irás encontrando en tu camino como programador. Solo presta mucha atención y trata de informarte en la mayor cantidad de fuentes que puedas. Y sobretodo, **lee y escribe código**.

Happy coding! 🥸

<Disqus />
