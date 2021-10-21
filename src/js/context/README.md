# Contexto de ejecución (apply, call, bind)

Recientemente en mi trabajo estaba desarrollando un proyecto, en el cual tenía que conectarme a una carpeta compartida en un Windows Server para obtener unos archivos que se enviarían como adjuntos en un correo. Para esta conexión, utilicé [smb2](https://www.npmjs.com/package/smb2) pero esta librería trabaja con callbacks y en lo personal no me gusta esta forma (ya hablé acerca de esto en mi artículo ["Infierno de Callbacks (Promesas y async/await)"](../callback-hell/)).

<p style="text-align: center">
  <img src="./programming.gif" alt="Programming" />
</p>

Así que traté de utilizar [es6-promisify](https://www.npmjs.com/package/es6-promisify) para convertir los callbacks en promesas. Siguiendo la documentación de las dos librerías llegué a este código:

```js
const smb2Client = new SMB2({
  share: config.samba.share,
  domain: config.samba.domain,
  username: config.samba.username,
  password: config.samba.password,
});

const existsPromise = promisify(smb2Client.exists);
const readFilePromise = promisify(smb2Client.readFile);
```

::: tip
Revisa mi artículo sobre [variables de entorno](../environment-variables/) para aprender algunas buenas prácticas sobre cómo trabajar con ellas dentro de un proyecto JS.
:::

Pero cuando mandaba a llamar mis nuevas funciones, siempre obtenía un error y no entendía el porqué hasta que leyendo la documentación de **es6-promisify** encontré una parte que hablaba de [métodos](https://www.npmjs.com/package/es6-promisify#promisify-methods).

```js
const { promisify } = require('es6-promisify');

// Create a promise-based version of send_command
const redis = require('redis').createClient(6379, 'localhost');
const client = promisify(redis.send_command.bind(redis));
```

> Tomado de la [documentación oficial](https://www.npmjs.com/package/es6-promisify#promisify-methods).

Entonces entendí que el **contexto de ejecución** era la respuesta. Este término hace referencia al "lugar" donde se manda a llamar la función y al cual accedemos a través de la palabra [this](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this). Para entender mejor, veamos un ejemplo:

```js
function saludar() {
  console.log(`Hola ${this.nombre}`);
}

const miContexto = {
  nombre: 'Fer',
  saludar,
};

saludar();
// -> 'Hola undefined'
miContexto.saludar();
// -> 'Hola Fer'
```

Verás que la misma función regresa valores diferentes dependiendo cómo se manda a llamar. Cuando se ejecuta solita `saludar()`, toma el contexto global que en este caso es [Window](https://developer.mozilla.org/es/docs/Web/API/Window) y por eso no encuentra la propiedad **nombre**. En cambio, al llamar a la función anteponiendo `miContexto.saludar()` ya le estamos indicando que ese objeto será el contexto de ejecución y ahí sí está definida la propiedad **nombre**.

Existen varias maneras de indicarle el contexto de ejecución a JS pero hoy solo veremos 3 de ellas usando métodos que toda función posee.

## [Call](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/call) / [Apply](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

`Call` y `apply` nos permiten indicar el contexto de ejecución **explícitamente** ya que se lo pasamos como argumento. Los dos métodos se comportan de manera muy similar, su principal diferencia es el cómo reciben los argumentos que serán usados en la función a ejecutar.

Modificaremos nuestro ejemplo para usar estos métodos:

```js
function saludar(saludo) {
  console.log(`${saludo}, ${this.nombre}`);
}

const miContexto = {
  nombre: 'Fer',
};

saludar.call(miContexto, 'Hola con call');
// -> 'Hola con call, Fer'
saludar.apply(miContexto, ['Hola con apply']);
// -> 'Hola con apply, Fer'
```

El primer parámetro de los dos métodos es el contexto que será utilizado para la ejecución. El resto de parámetros se refieren a los argumentos que se pasarán. La diferencia es que `apply` recibe un arreglo con los argumentos y `call` recibe cada argumento individualmente.

## [Bind](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

`Bind` funciona diferente a los dos anteriores métodos porque no ejecuta la función en el momento, en lugar de eso retorna una nueva función pero ligada al contexto que le indiquemos. Y este contexto ya no se puede cambiar de ninguna manera.

```js
function saludar(saludo) {
  console.log(`${saludo}, ${this.nombre}`);
}

const miContexto = {
  nombre: 'Fer',
};

const saludarConContexto = saludar.bind(miContexto);
saludarConContexto('Hola con bind');
// -> 'Hola con bind, Fer'
```

Con esta información ahora sí podemos entender la documentación. Lo modificaré un poquito para que sea más claro:

```js
const redis = require('redis').createClient(6379, 'localhost');
const client = promisify(redis.send_command.bind(redis));

// Equivalente a:
const contexto = require('redis').createClient(6379, 'localhost');
const sendCommandConContexto = contexto.send_command.bind(contexto);
const sendCommandPromise = promisify(sendCommandConContexto);
```

El truco es que para convertir un método de un objeto en una promesa debemos ligar ese objeto como contexto. De esta manera no perderemos el contexto correcto en el que queremos que se ejecute.

## Conclusión

No te preocupes si esto no tiene mucho sentido para ti en este momento, entender el **contexto de ejecución (this)** es de los temas más difíciles de JS y requiere su tiempo. Con la práctica lo entenderás 😉.

Nos vemos la próxima. Happy coding! 🥸

<Disqus />
