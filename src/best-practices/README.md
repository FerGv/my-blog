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

## Retorno rápido

## Módulos

## No condiciones para booleanos

## Operador ternario

## Guías de estilo

## Triple igual

## Objeto en lugar de switch
