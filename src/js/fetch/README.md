# Fetch (Consumiendo APIs)

Un caso muy común en los sistemas web es obtener recursos de algún sitio externo, por ejemplo, imágenes, videos, datos, etc. Antes, estas peticiones HTTP se realizaban con [jQuery](../jquery/) (también había uno que otro loco que lo hacía con [XMLHttpRequest](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) puro) pero hoy en día los navegadores integran una [API](https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Introduction) conocida como [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API) que nos evita el uso de librerías externas.

Hoy veremos cómo funciona y también una pequeña alternativa en caso de ser necesaria.

<p style="text-align: center">
  <img src="./programmer.gif" alt="Programmer" />
</p>

::: tip
Para este artículo usaremos [Dog API](https://dog.ceo/dog-api/). Esta API nos provee imágenes bonitas de perritos 🐶.
:::

::: tip
Te recomiendo revisar mi artículo de promesas ["Infierno de Callbacks (Promesas y async/await)"](../callback-hell/) por si no estás muy familiarizado con ellas.
:::

## [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

Partamos del ejemplo más sencillo de fetch para entender su sintaxis:

```js
fetch('https://dog.ceo/api/breeds/image/random')
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(error));
```

Si todo sale bien, verás un mensaje en la consola como este:

```json
{
  "body": (...),
  "bodyUsed": false,
  "headers": Headers {},
  "ok": true,
  "redirected": false,
  "status": 200,
  "statusText": "OK",
  "type": "cors",
  "url": "https://dog.ceo/api/breeds/image/random",
}
```

¿Extraño? Bueno, es que eso no era lo que realmente queríamos, este es el objeto de respuesta con toda la información HTTP que nos da fetch, puede ser útil pero casi siempre solo nos preocuparemos por los datos (texto, imágenes, etc.), por lo que necesitamos usar el método `json()` de este objeto de respuesta. Como nos devuelve otra promesa, encadenaremos otro `then`.

```js
fetch('https://dog.ceo/api/breeds/image/random')
  .then((respuesta) => respuesta.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
```

Y ahora sí obtendremos la respuesta que queríamos, un [JSON](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON) (que no es más que un objeto de Javascript) con un link para la imagen del perrito y un estatus:

```json
{
  "message": "https://images.dog.ceo/breeds/buhund-norwegian/hakon2.jpg",
  "status": "success"
}
```

Ya con el problema resuelto, analicemos su estructura:

- **fetch** es una función que recibe como primer parámetro la URL a la que se hará la petición HTTP. Por defecto, se usará el [verbo](https://developer.mozilla.org/es/docs/Web/HTTP/Methods) `GET`.
- **fetch** retorna una promesa que si resuelve exitósamente, obtendremos un objeto de tipo `Response` con información HTTP de la petición como estatus, cabeceras, cuerpo, etc.
- El objeto `Response` provee varios [métodos para transformar el cuerpo de la respuesta](https://developer.mozilla.org/es/docs/Web/API/Body#methods). Entre ellos `json()`, `text()` y `blob()`. Todos los métodos retornan una promesa con el resultado.
- **fetch** recibe un segundo parámetro opcional con un objeto de configuración con el que podemos establecer el método HTTP, cabeceras, tipo de contenido, etc.

Ahora veamos como realizar un `POST`:

::: tip
Para este caso usaremos [JSONPlaceholder API](https://jsonplaceholder.typicode.com/), ya que esta API sí nos provee una ruta para creación.
:::

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'El título',
    body: 'El cuerpo',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((respuesta) => respuesta.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
```

El **body** de la petición debe ser un string, por esta razón usamos `JSON.stringify()` para convertir nuestro objeto. Como queremos que el servidor interprete nuestro JSON, debemos agregar una cabecera indicando el tipo de contenido que es enviado en **headers**.

En la respuesta veremos los mismos datos que enviamos junto con un atributo **id** que simula la creación del objeto.

```json
{
  "body": "El cuerpo",
  "id": 101,
  "title": "El título",
  "userId": 1
}
```

Con `fetch` podemos realizar cualquier tipo de petición HTTP que necesitemos y manipular la respuesta cómo necesitemos sin necesidad de ninguna librería externa, pero conforme la aplicación comienza a crecer, puede que sí sea buena opción considerar alguna librería que nos evite escribir código innecesario o repetido. La más conocida de este tipo de librerías es [axios](https://axios-http.com/).

## [axios](https://axios-http.com/)

Axios se define en su documentación como un "Cliente HTTP basado en promesas para el navegador y node.js", y toca un punto muy importante que es su principal ventaja frente a `fetch`: la multiplataforma. Fetch solo funciona en el navegador, por el contrario el mismo código de axios funciona en el navegador y en Node.

::: tip
Bueno, sí tenemos opciones para `fetch` en Node como [node-fetch](https://www.npmjs.com/package/node-fetch) o [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) pero nuestras dependencias serían diferentes en cada entorno, ya que en el navegador no tendría caso instalar alguna de ellas.
:::

### Instalación

Te recomiendo el uso de **npm**, pero si solo vas a hacer un pequeño proyecto, también te puede funcionar el **CDN**.

- **npm**

```sh
$ npm install axios
```

- **CDN**

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### Uso

**axios** nos provee un método para cada uno de los principales verbos HTTP.

```js
axios.get(url);
axios.post(url, data);
axios.put(url, data);
axios.delete(url);
```

Todos los métodos retornan una promesa con un objeto `Response` de axios. Este objeto contendrá toda la información HTTP pero nos enfocaremos en su atributo `data` con el que obtendremos los datos:

```js
axios
  .get('https://dog.ceo/api/breeds/image/random')
  .then((respuesta) => console.log(respuesta.data))
  .catch((error) => console.log(error));

// Data
// {
//   "message": "https://images.dog.ceo/breeds/buhund-norwegian/hakon2.jpg",
//   "status": "success"
// }
```

Si queremos enviar datos, simplemente pasamos el JSON como segundo parámetro:

```js
axios
  .post('https://jsonplaceholder.typicode.com/posts', {
    title: 'El título',
    body: 'El cuerpo',
    userId: 1,
  })
  .then((respuesta) => console.log(respuesta.data))
  .catch((error) => console.log(error));

// Data
// {
//   "body": "El cuerpo",
//   "id": 101,
//   "title": "El título",
//   "userId": 1
// }
```

Ya no necesitamos convertir el JSON ni indicar las cabeceras, **axios** se encarga de esto por nosotros.

### Buenas prácticas

**axios** nos facilita el manejo de peticiones de HTTP de varias maneras, veamos algunas de ellas:

- **Evitar escribir la URL base en todas las peticiones**

  Podemos crear un objeto al cual le indicamos la URL base, y después solo escribir el path (la parte después del dominio que representa el recurso que queremos). [Documentación](https://axios-http.com/docs/instance/)

  ```js
  const cliente = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/',
  });

  cliente.get('image/random'); // -> https://dog.ceo/api/breeds/image/random
  cliente.get('list/all'); // -> https://dog.ceo/api/breeds/list/all
  ```

- **Configuración**

  Podemos pasar un objeto de configuración para cambiar cabeceras, tipo de contenido, etc. Por ejemplo, si lo que recibimos es una imagen en lugar de un JSON, debemos indicar el tipo de contenido de la respuesta. [Documentación](https://axios-http.com/docs/req_config/)

  ```js
  axios.get('https://images.dog.ceo/breeds/buhund-norwegian/hakon2.jpg', {
    responseType: 'blob',
  });
  ```

- **Interceptores**

  Finalmente, podemos crear funciones que intercepten y manipulen la petición antes y/o después de realizarla (podemos decir que son [middlewares](https://es.wikipedia.org/wiki/Middleware)). Como viste, normalmente solo nos interesa la data de nuestra respuesta, por lo que podemos crear un interceptor que obtenga esta data y nos la regrese en lugar de todo el objeto de respuesta: [Documentación](https://axios-http.com/docs/interceptors/)

  ```js
  axios.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error);
  );
  ```

## Conclusión

Me gusta mucho `fetch` porque es parte de la plataforma (navegador) y es muy fácil de usar, pero cuando desarrollo proyectos grandes siempre opto por `axios` por esas pequeñas ventajas que ofrece como la multiplataforma y la configuración. Te recomiendo que pruebes los dos y escojas el que mejor se adapte a tus necesidades.

Hasta la próxima. Happy coding! 🥸

<Disqus />
