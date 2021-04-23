# Babel

[Babel](https://babeljs.io/) es una herramienta de Javascript que nos permite transpilar el código de versiones modernas del lenguaje a código que cualquier plataforma (navegador/[Node](https://nodejs.org/es/)) pueda entender. Te muestro un ejemplo sacado de la documentación oficial:

![Babel example](./babel-example.png)

> De lado izquierdo es el código de ECMAScript2020 usando el [nullish coalescing operator ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) y de lado derecho el código transpilado por Babel.

Aunque el código generado no es tan legible para humanos, la verdad es que no interesa porque ese código es para el intérprete, no para nosotros. Babel nos da la oportunidad de escribir código legible y él se encargará de generar el código que sea necesario para que corra donde sea.

Hoy te mostraré una pequeña configuración que utilizó para mis proyectos backend en Node. Para el frontend te recomiendo usar algún framework como [Vue](https://vuejs.org/), [React](https://es.reactjs.org/) o [Svelte](https://svelte.dev/), ellos ya se encargan de la configuración por ti.

::: tip
Usé la palabra **"transpilar"** porque a pesar de que se hace una compilación de código, la diferencia es que la transformación se aplica entre lenguajes de similar nivel de abstracción (en este caso versiones diferentes de JS). Si conoces [Typescript](https://www.typescriptlang.org/), podríamos decir que también **transpila** el código porque sigue siendo JS. Por el contrario, el código de Java se **compila** a lenguaje máquina.

Te dejo unos links que espero despejen tus dudas:

- [Transpilador](https://es.wikipedia.org/wiki/Transpilador)
- [¿Cuáles son las diferencias entre compilar y transpilar?](https://es.quora.com/Cu%C3%A1les-son-las-diferencias-entre-compilar-y-transpilar)

:::

## Requerimientos

- [Node](https://nodejs.org/es/) (versión 12+)
- npm (versión 6+)

> `npm` se instala junto con Node.

## Creación del proyecto

1. Crea una carpeta para el proyecto y entra en ella.

```sh
$ mkdir babel-project
$ cd babel-project
```

> Si te quieres ver pro, puedes ejecutar `mkdir babel-project && cd $_`. Solo funciona en UNIX.

::: tip
Puedes abrir este proyecto en tu editor de código preferido. En lo personal, yo uso [Visual Studio Code](https://code.visualstudio.com/).
:::

1. Inicia un proyecto con **npm**.

```sh
$ npm init -y
```

> `-y` nos evita ingresar manualmente la configuración y utiliza todos los valores por defecto.

## Instalación

Necesitamos 3 librerías base de Babel:

- [@babel/core](https://www.npmjs.com/package/@babel/core)

  Funcionalidad base de Babel

- [@babel/cli](https://www.npmjs.com/package/@babel/cli)

  Interfaz de comandos de Babel

- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)

  Los [presets](https://babeljs.io/docs/en/presets/) de Babel ayudan a agregar funcionalidad a la base de Babel. Este preset ayuda a compilar código de ES2015

```sh
# Puedes usar -D como atajo para --save-dev
# Puedes usar `i` como atajo para `install`
$ npm i -D @babel/core @babel/cli @babel/preset-env
```

Las instalamos como dependencias de desarrollo porque son necesarias para generar el código de producción pero no para que funcione.

## Uso

Ahora crearemos una carpeta `src` en la que guardaremos todo el código de la aplicación.

```sh
$ mkdir src
$ cd src
```

Y dentro crearemos un archivo `index.js` con el siguiente contenido:

```js
// src/index.js
console.log('Hola Mundo');
```

Para que Babel compile nuestros archivos, necesitaremos crear un archivo `babel.config.json` en la raíz del proyecto y agregar un script en el `package.json`.

```json
// babel.config.json
{
  "presets": ["@babel/env"]
}
```

```json
// package.json
{
  ...
  "scripts": {
    "build": "babel src --out-dir dist"
  }
  ...
}
```

## Aliases
