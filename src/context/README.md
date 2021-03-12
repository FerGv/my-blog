# Contexto de ejecución (apply, call, bind)

Recientemente en mi trabajo estaba desarrollando un proyecto, en el cual tenía que conectarme a una carpeta compartida en un Windows Server para obtener unos archivos que se enviarían como adjuntos en un correo. Para esta conexión, utilicé [smb2](https://www.npmjs.com/package/smb2) pero esta librería trabaja con callbacks y en lo personal no me gusta esta forma (ya hablé acerca de esto en mi artículo ["Infierno de Callbacks (Promesas y async/await)"](../callback-hell/)).

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

Pero me encontré con un problema. Cuando mandaba a llamar mis nuevas funciones, siempre obtenía un error como este:

```sh
ERROR: TypeError: Cannot read property 'unshift' of undefined
  at addErrorListener (C:\Users\fernandog\Documents\Apps\tracking-qa\backend\node_modules\smb2\lib\tools\smb2-connection.js:149:27)
  at scheduleAutoClose (C:\Users\fernandog\Documents\Apps\tracking-qa\backend\node_modules\smb2\lib\tools\smb2-connection.js:135:3)
```

Y estuve peleando con esto un buen rato hasta que entendí el origen del problema. Te daré oportunidad de que analices el código y trates de adivinar lo que pasaba.

> Una pista: las librerías no están mal.

¿List@? El **contexto de ejecución** es la respuesta.
