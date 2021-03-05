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

## [Desestructuración](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## [Operador spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## [Operador rest](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters)

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
