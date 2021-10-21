# Variables de entorno

En todo sistema se usa información o claves que no cualquiera debería tener acceso, por ejemplo, una clave de acceso a alguna API, credenciales de autenticación, URLs, etc. Cualquier cosa que no quieras compartir puede entrar en esta categoría y la mejor manera de darle tratamiento es usando **variables de entorno**.

Así que veamos cómo usarlas correctamente.

<p style="text-align: center">
  <img src="./come.gif" alt="Come" />
</p>

Las **variables de entorno** son variables que **se crean a nivel de sistema operativo**, por eso son tan seguras (no soy experto en ciberseguridad pero al menos es mucho mejor que ["harcodearlas"](https://es.wikipedia.org/wiki/Hard_code)).

::: tip
Existe un conjunto de buenas prácticas para el desarrollo y despliegue de aplicaciones conocido como [The twelve-factor app](https://12factor.net/es/). El tema de variables de entorno es el [punto 3](https://12factor.net/es/config) pero te recomiendo leer los doce.
:::

Estas variables las podrías crear desde la terminal (dependiendo tu sistema operativo) así:

```sh
# Unix
export NUEVA_ENV_VAR=Hola

# Windows
set NUEVA_ENV_VAR=Hola
```

Pero sería muy complicado llevar un control sobre ellas de este modo. Así que una mejor opción es usar archivos `.env` y la librería [dotenv](https://www.npmjs.com/package/dotenv).

## Usando `dotenv`

Lo primero que debes hacer es instalar la librería:

```sh
npm i dotenv
```

> Esto la agregará como dependencia a tu proyecto.
>
> Previamente debe existir un `package.json`, si no es así, lo puedes crear ejecutando `npm init -y`.
>
> `npm` se instala junto con [Node JS](https://nodejs.org/es/).

Después debes crear un archivo `.env` en la raíz de tu proyecto y dentro escribir las variables con el formato `CLAVE=VALOR`.

```sh
DEBUG=true
API_KEY=cddw$324&sad/dsa&as/adsa
```

> La buena práctica es escribir el nombre de la variable en mayúsculas.

Y en el archivo JS donde necesites las variables de entorno, necesitas escribir esta línea al inicio:

```js
// Sintaxis de Node
require('dotenv').config();

// Módulos de ES6
import dotenv from 'dotenv';
dotenv.config();
```

Finalmente, accedes a las variables de la siguiente manera:

```js
console.log(process.env.DEBUG);
// -> 'true'
console.log(process.env.API_KEY);
// -> 'cddw$324&sad/dsa&as/adsa'
```

Y eso es todo lo que debes hacer para trabajar con variables de entorno en tu proyecto 🤭.

::: warning
Todas las variables de entorno se crean como cadenas de texto, así que debes tener cuidado con valores booleanos.

```sh
# Esto se evaluará como verdadero porque lo que se guarda es el string 'false'
DEBUG=false

# Esto se evaluará como falso porque será un string vacío ''
DEBUG=
```

Si te queda duda sobre los valores falsy/truthy revisa mi artículo ["Operador Bang Bang (Valores Falsy/Truthy)"](../bang-bang-operator/).
:::

::: danger
**Nunca subas tu archivo `.env` a tu repositorio de código**.

Mejor crea un archivo `.env.example` con la estructura base pero sin ningún valor que pueda ser comprometido y sube este archivo a tu repo.
:::

## Creando un archivo `config`

Aunque ya estás listo para trabajar con variables de entorno, te voy a mostrar una buena práctica para tener centralizadas las variables.

Crea un archivo llamado `config.js` y dentro de él exporta un objeto con todas las variables de entorno que necesites.

> El archivo se puede llamar como quieras pero este archivo lo podrías usar para la configuración general de tu proyecto.

```js
// Sintaxis de Node
require('dotenv').config();

module.exports = {
  debug: !!process.env.DEBUG,
  apiKey: process.env.API_KEY,
};

// Módulos de ES6
import dotenv from 'dotenv';
dotenv.config();

export default {
  debug: !!process.env.DEBUG,
  apiKey: process.env.API_KEY,
};
```

> Usamos el [operador Bang Bang](../bang-bang-operator/) para obtener un valor booleano en lugar del string.

De esta manera, cuando necesites tus variables solo debes importar el archivo config y acceder a cada una como propiedades. Una forma más eficiente de programar 👌.

```js
// Sintaxis de Node
const config = require('./config.js');
console.log(config.debug);
// -> true

// Módulos de ES6
import config from './config.js';
console.log(config.apiKey);
// -> 'cddw$324&sad/dsa&as/adsa'
```

## Conclusión

Espero este artículo te ayude a tener una mejor organización en tus futuros proyectos con respecto al uso de información confidencial. Siempre procura seguir las buenas prácticas de desarrollo y despliegue para evitar la mayor cantidad de problemas posibles. Hay que hacerle caso a los gurús de la informática 🤓.

Nos vemos en la siguiente. Happy coding! 🥸

<Disqus />
