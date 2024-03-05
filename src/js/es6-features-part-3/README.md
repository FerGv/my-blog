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

El objeto `Set` nos permite crear una lista de elementos pero sin duplicados.

```js
const miSet = new Set(); // (1)
miSet.add(1); // (2)
miSet.add(2);
miSet.add(2); // Como el elemento ya existe, no se agrega nuevamente

console.log(miSet);
// -> {1, 2}

console.log(miSet.has(1)); // (3)
// -> true

console.log(miSet.size); // (4)
// -> 2

miSet.delete(1); // (5)
console.log(miSet);
// -> {2}

miSet.clear(); // (6)
console.log(miSet);
// -> {}
```

1. Creamos un objeto con la sintasix de contructor `new Set()`.
2. Agregamos elementos con el método `add(item)`. Internamente el _set_ validará si ya fue guardado el item para no repetirlo.
3. Con el método `has(item)` podemos validar si existe un item en el _set_.
4. Con la propiedad `size` podemos conocer la cantidad de elementos.
5. Para borrar un elemento, usamos el método `delete()`.
6. Para borrar todos los elementos, usamos el método `clear()`.

Podemos recorrer los elementos dentro de un `Set` directamente con un `for..of`:

```js
const miSet = new Set();
miSet.add(1);
miSet.add(2);

// Recorrer todos los items
for (const item of miSet) {
  console.log(item);
}
```

Desafortunadamente el objeto `Set` no tiene una forma de acceder a un elemento por índice, pero usando la [desestructuración](../es6-features/#desestructuracion) podemos simular esta funcionalidad:

```js
const miSet = new Set();
miSet.add('a');
miSet.add('b');

const segundoElemento = [...miSet][1];
console.log(segundoElemento);
// -> b
```

## [Clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/class)

Javascript no es un lenguaje orientado a objectos tradicional como Java, Python o PHP; ya que internamente trabaja con [prototipos](https://es.wikipedia.org/wiki/Programaci%C3%B3n_basada_en_prototipos). Por esta razón no existían las clases hasta que llegó ES6.

Una clase nos permite modelar el cómo se "ve" y "comporta" un objeto, es decir, describir las propiedades que posee y las acciones que puede realizar. Y por objeto nos referimos a cualquier cosa tangible (persona, perro, carro) o intangible (préstamo, pago, compra).

Revisemos paso a paso la definición de la clase:

```js
class Persona {
  nombre = 'Fer';
  profesion = 'programador';

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.profesion}.`);
  }
}

const fer = new Persona();
fer.saludar();
// -> Hola, mi nombre es Fer y soy programador.
```

Una clase se define con la palabra reservada `class` y el nombre del objeto que se va a modelar en singular con la nomenclatura [UpperCamelCase](https://es.wikipedia.org/wiki/Camel_case).

```js
class Persona {}
class Perro {}
class Pago {}
class Prestamo {}
```

Después definimos las propiedades que posee; a las que llamaremos **atributos**. Los atributos simplemente son variables que pertenecen a un determinado objeto, por lo que pueden almacenar cualquier tipo de dato.

```js
class Persona {
  nombre = 'Fer';
  profesion = 'programador';
  edad = 26;
  gustos = ['programación', 'futbol', 'series'];
}
```

Después definimos las acciones que nuestro objeto puede hacer; a estas las llamaremos **métodos**. Los métodos son funciones que normalmente trabajan con los **atributos**. Para acceder a ellos es necesario utilizar la palabra reservada `this`.

```js
class Persona {
  // atributos...

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.profesion}.`);
  }
}
```

Finalmente, para crear un objeto de nuestra clase utilizamos la palabra reservada `new`. Y para llamar a los **atributos** o **métodos** de nuestro objeto agregamos un `punto (.)` y el nombre de lo que necesitamos.

```js
// Agregamos paréntesis como si llamáramos a una función.
const fer = new Persona();

// Agregamos paréntesis porque los métodos son funciones.
fer.saludar();
// -> Hola, mi nombre es Fer y soy programador.

// Los atributos no necesitan paréntesis porque solo son variables.
console.log(fer.nombre);
// -> Fer
```

::: tip
Revisa mi artículo [Programación orientada a objetos](../oop) para más información.
:::

## [Atributos privados](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

Continuando con las clases, cuando definimos _atributos_ y _métodos_, estos son "públicos" por defecto, es decir, se pueden llamar fuera de la clase, como vimos en el ejemplo anterior:

```js
const fer = new Persona();

fer.saludar();
// -> Hola, mi nombre es Fer y soy programador.

console.log(fer.nombre);
// -> Fer
```

Pero hay ocasiones en las que este comportamiento no es el ideal y lo que nos gustaría fuera que solo dentro de la clase se pudieran utilizar estos _atributos_ y _métodos_. Esto es conocido como [**encapsulamiento**](<https://es.wikipedia.org/wiki/Encapsulamiento_(inform%C3%A1tica)>) y se refiere a restringir el acceso a los componentes de una clase.

Para esto, ES6 implementó los _atributos y métodos privados_ usando el símbolo de gato o numeral _(#)_ (para los más millenial, "hashtag" 😅) para identificarlos. Veamos un ejemplo:

```js
class Persona {
  nombre = 'Fer';
  #secreto = 'Esto no lo debe saber nadie. Shhh';

  saludar() {
    console.log('Hola');
  }

  #contarSecreto() {
    console.log('shhhh');
  }
}

const fer = new Persona();
console.log(fer.nombre);
// -> Fer

console.log(fer.secreto);
// -> undefined

console.log(fer.#secreto);
// -> Error

fer.saludar();
// -> Fer

fer.contarSecreto();
// -> Error

fer.#contarSecreto();
// -> Error
```

Ahora ya no se puede acceder desde fuera de la clase a los atributos y métodos que tienen el `#` en su nombre, por lo que decimos que han sido "encapsulados".

Para acceder a ellos, podemos usar un método público o un getter:

```js
class Persona {
  #secreto = 'Esto no lo debe saber nadie. Shhh';

  publicarSecreto() {
    console.log(this.#secreto);
  }

  get secreto() {
    return this.#secreto;
  }
}

const fer = new Persona();
fer.publicarSecreto();
// -> Esto no lo debe saber nadie. Shhh

console.log(fer.secreto);
// -> Esto no lo debe saber nadie. Shhh
```

::: tip
Revisa mi artículo [Programación orientada a objetos (Parte 2)](../oop-part-2) para más información.
:::

## Nuevos métodos de objetos

Se agregaron algunos métodos al objeto `Object` con los que podemos trabajar con objetos más fácilmente. Así que veamos diferentes maneras de manipular el siguiente objeto que contiene los números de empleado y sus respectivos nombres.

```js
const empleados = {
  123: 'Fer',
  456: 'Pedro',
  678: 'Juan',
};
```

### [values()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

Este método nos permite obtener un arreglo con los valores dentro del objeto. Al resultado le podemos aplicar cualquiera de los [métodos de arreglos](../array-methods/).

```js
console.log(Object.values(empleados));
// -> ['Fer', 'Pedro', 'Juan']

console.log(Object.values(empleados).find((nombre) => nombre === 'Fer'));
// -> Fer
```

### [entries()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

Este método nos permite obtener un arreglo con las llaves y valores dentro del objeto. El resultado es un arreglo de arreglos o matriz con la siguiente estructura:

`[ [llave1, valor1], [llave2, valor2], ... ]`

```js
console.log(Object.entries(empleados));
// -> [ ['123', 'Fer'], ['456', 'Pedro'], ['678', 'Juan'] ]

// Podemos desestructurar el arreglo con la llave y el valor
// pero ten cuidado con los paréntesis
//                                ⬇️           ⬇️
Object.entries(empleados).forEach(([llave, valor]) => {
  console.log(`Llave: ${llave} - Valor: ${valor}`);
});
// -> Llave: 123 - Valor: Fer
// -> Llave: 456 - Valor: Pedro
// -> Llave: 678 - Valor: Juan
```

::: warning
Recuerda que las llaves de un objeto siempre son **cadenas de texto (strings)**.
:::

### [fromEntries()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

El método `fromEntries` es la operación contraria a `entries`, ya que en este caso creamos un objeto a partir de un arreglo de llaves y valores:

`[ [llave1, valor1], [llave2, valor2], ... ]`

```js
const empleadosArreglo = [ ['123', 'Fer'], ['456', 'Pedro'], ['678', 'Juan'] ];
const empleadosObjeto = Object.fromEntries(empleadosArreglo);
console.log(empleadosObjeto);
// -> { 123: 'Fer', 456: 'Pedro', 678: 'Juan' }
```

::: tip
También puedes usar un objeto [Map](#map) en lugar de un arreglo.

```js
const empleadosMap = new Map([ ['123', 'Fer'], ['456', 'Pedro'], ['678', 'Juan'] ]);
const empleadosObjeto = Object.fromEntries(empleadosMap);
console.log(empleadosObjeto);
// -> { 123: 'Fer', 456: 'Pedro', 678: 'Juan' }
```

:::

## Nuevos métodos de arreglos

De estos hablé en detalle en mi artículo [Métodos de arreglos](../array-methods/).

## Nuevos métodos de strings

### [matchAll()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)

`matchAll` nos permite encontrar todas las coincidencias de un patrón o [expresión regular (regex)](../regex/), es decir, buscar texto en un string.

El resultado de este método es un objeto `RegExpStringIterator`, al cual le podemos aplicar el [operador spread](../es6-features/#operador-spread) para convertirlo en un arreglo.

```js
const miRegex = /flor[a-z]*/g;
const miTexto = 'El florista puso muchas flores en el florero.';
const coincidencias = [...miTexto.matchAll(miRegex)];
console.log(coincidencias);
// -> ['florista', index: 3, input: 'El florista puso muchas flores en el florero.', groups: undefined]
// -> ['flores', index: 24, input: 'El florista puso muchas flores en el florero.', groups: undefined]
// -> ['florero', index: 37, input: 'El florista puso muchas flores en el florero.', groups: undefined]
```

Cada coincidencia se almacena en un arreglo con el texto encontrado, la posición (índice) donde se encontró, el texto en el que se buscó y los grupos encontrados (en caso de ser definidos).

::: warning
Algo importante para recordar es que la expresión regular siempre debe tener el modificador `/.../g`, lo que quiere decir que es **global**.
:::

### [replaceAll()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)

`replaceAll` nos permite reemplazar todas las coincidencias de un patrón o [expresión regular (regex)](../regex/).

Para buscar podemos usar una cadena de texto o una regex, mientras que el valor de reemplazo siempre es una cadena de texto. El resultado será una nueva cadena de texto con los todos los reemplazos.

```js
const miTexto = 'Los perros son animales muy bonitos. Los perros son muy buenas mascotas';
const nuevoTexto = miTexto.replaceAll('perros', 'gatos');
console.log(nuevoTexto);
// -> Los gatos son animales muy bonitos. Los gatos son muy buenas mascotas

const miTexto = 'Los perros son animales muy bonitos. Mi perro es muy buena mascota';
const nuevoTexto = miTexto.replaceAll(/perro/g, 'gato');
console.log(nuevoTexto);
// -> Los gatos son animales muy bonitos. Mi gato es muy buena mascota
```

::: warning
Algo importante para recordar es que la expresión regular siempre debe tener el modificador `/.../g`, lo que quiere decir que es **global**.
:::

## [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

`BigInt` es un nuevo tipo de dato para trabajar con números excesivamente grandes o pequeños. Y cuando digo "excesivamente" me refiero a un número mayor a: <code>2<sup>53</sup> - 1</code> (muy muy grande o pequeño 😅).

Aunque este número parece muy aleatorio, en realidad es el límite seguro para trabajar con números en Javascript, ya que pasando ese límite se puede perder la precisión en las operaciones.

```js
console.log(Number.MAX_SAFE_INTEGER);
// -> 9007199254740991

console.log(2 ** 53);
// -> 9007199254740992
// Supera el límite seguro 😬
```

Para crear un número `BigInt` tenemos dos opciones:

1. Agregar una `n` al final del número.

```js
const unNumeroSuperGrande = 1234567890n;
```

2. Utilizar el objeto `BigInt`.

```js
const unNumeroSuperGrande = BigInt(1234567890);
```

Puedes realizar las operaciones tradicionales como suma, resta, multiplicación y división:

```js
const unNumeroSuperGrande = BigInt(9876543210);
const otroNumeroSuperGrande = 1234567890n;

console.log(unNumeroSuperGrande + otroNumeroSuperGrande);
// -> 11111111100n

console.log(unNumeroSuperGrande - otroNumeroSuperGrande);
// -> 8641975320n

console.log(unNumeroSuperGrande * otroNumeroSuperGrande);
// -> 12193263111263526900n

console.log(unNumeroSuperGrande / otroNumeroSuperGrande);
// -> 8n
```

::: warning
Se recomienda que todos los operandos sean del tipo `BigInt` para evitar errores en el cálculo.
:::

## Métodos de promesas

### [all()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

Con `Promise.all()` podemos lanzar varias promesas a la vez y esperar a que **todas ellas resuelvan** o a la **primera que falle**. Para pasar las promesas utilizamos un arreglo como argumento:

```js
const primeraPromesa = new Promise((resolve) => resolve('Primera promesa'));
const segundaPromesa = new Promise((resolve) => resolve('Segunda promesa'));
const resultado = await Promise.all([ primeraPromesa, segundaPromesa ]);

console.log(resultado);
// -> [ 'Primera promesa', 'Segunda promesa' ]
```

Como dijimos, si una falla, en ese momento se termina la ejecución y retorna el error. Por lo que no espera a que las demás promesas resuelvan.

```js
const primeraPromesa = new Promise((resolve, reject) => reject('Primera promesa'));
const segundaPromesa = new Promise((resolve) => resolve('Segunda promesa'));
const resultado = await Promise.all([ primeraPromesa, segundaPromesa ]);
// -> Error
```

Podemos usar un bloque `try..catch` para cachar el error:

```js
const primeraPromesa = new Promise((resolve, reject) => reject('Primera promesa'));
const segundaPromesa = new Promise((resolve) => resolve('Segunda promesa'));

try {
  const resultado = await Promise.all([ primeraPromesa, segundaPromesa ]);
  console.log(`Éxito: ${resultado}`)
} catch(error) {
  console.log(`Falló: ${error}`);
}

// -> Falló: Primera promesa
```

::: tip
Los resultados siempre conservan el mismo orden que el arreglo de promesas.
:::

### [allSettled()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)

`Promise.allSettled()` es similar a `Promise.all()` pero con la diferencia de que **allSettled** va a esperar la resolución de todas las promesas (exitosas o fallidas), y regresará un arreglo indicando el estatus de cada una junto con su respectivo resultado o error.

```js
const primeraPromesa = new Promise((resolve, reject) => reject('Primera promesa'));
const segundaPromesa = new Promise((resolve) => resolve('Segunda promesa'));
const resultado = await Promise.allSettled([ primeraPromesa, segundaPromesa ]);

console.log(resultado);
// -> [
//      { "status": "rejected", "reason": "Primera promesa" },
//      { "status": "fulfilled", "value": "Segunda promesa" }
//    ]
```

- Si la promesa fue **exitosa**, el estatus será **fulfilled** y el resultado estará en la propiedad **value**.
- Si la promesa fue **fallida**, el estatus será **rejected** y el error estará en la propiedad **reason**.

::: tip
Los resultados siempre conservan el mismo orden que el arreglo de promesas.
:::

### [any()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)

`Promise.any()` igualmente recibe una arreglo de promesas pero en este caso solo devuelve un único resultado:

- El resultado de la **primera** promesa en resolver exitósamente ó
- Un error si **todas** las promesas fallan o el arreglo está vacío

```js
// Simulamos que esta promesa tarda 200ms en resolver
const primeraPromesa = new Promise(
  (resolve, reject) => setTimeout(() => reject('Primera promesa'), 200)
);

// Simulamos que esta promesa tarda 400ms en resolver
const segundaPromesa = new Promise(
  (resolve) => setTimeout(() => resolve('Segunda promesa'), 400)
);

const resultado = await Promise.any([ primeraPromesa, segundaPromesa ]);
console.log(resultado);
// -> Segunda promesa
```

### [race()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

`Promise.race()` a diferencia de `Promise.any()` devolverá el **primer resultado o error** que encuentre.

```js
// Simulamos que esta promesa tarda 200ms en resolver
const primeraPromesa = new Promise(
  (resolve, reject) => setTimeout(() => reject('Primera promesa'), 200)
);

// Simulamos que esta promesa tarda 400ms en resolver
const segundaPromesa = new Promise(
  (resolve) => setTimeout(() => resolve('Segunda promesa'), 400)
);

const resultado = await Promise.race([ primeraPromesa, segundaPromesa ]);
// -> Error
```

## [Separador numérico](https://github.com/tc39/proposal-numeric-separator)

## Conclusión

Te veo pronto. Happy coding! 🥸

<Disqus />
