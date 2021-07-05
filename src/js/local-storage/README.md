# localStorage (Almacenamiento en el navegador)

Hoy en día, el desarrollo web se ha vuelto tan complicado que lo que antes solo se hacía del lado del [backend](https://es.wikipedia.org/wiki/Front_end_y_back_end)**(donde se procesa la lógica, lo que no ve el usuario)**, ahora se reparte en el [frontend](https://es.wikipedia.org/wiki/Front_end_y_back_end)**(lado visual que interactúa con el usuario)** y en algunos casos hasta se delega completamente a este lado.

Un ejemplo de esto es la autenticación, que antes se manejaba en el servidor a través de sesiones las cuales utilizaban [cookies](<https://es.wikipedia.org/wiki/Cookie_(inform%C3%A1tica)>) para almacenar pequeña información en el navegador acerca del usuario. Esto funcionaba bien cuando todo era una [arquitectura monolítica](https://es.wikipedia.org/wiki/Aplicaci%C3%B3n_monol%C3%ADtica) y la lógica y la presentación eran manejados en conjunto. Pero cuando comenzamos a separarlos, tuvimos que buscar nuevas maneras de **almacenar** más información del lado del [cliente](https://es.wikipedia.org/wiki/Cliente-servidor).

Fue así que se creó una [API](https://es.wikipedia.org/wiki/Web_API) del navegador llamada [localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) para almacenar todo lo que una aplicación frontend necesitara. Pero debo aclarar que tiene sus consideraciones:

- Solo se puede almacenar texto.
- Está limitada a guardar máximo 5MB por dominio.
- Todo se almacena como parejas clave-valor.
- Cualquier script JS tiene acceso al almacenamiento.

Pero esto no es necesariamente malo. De hecho, para la mayoría de casos es más que suficiente. Así que veamos cómo usar esta API, te sorprenderá lo sencilla que es:

## Crear/Editar items

Para acceder a la API, usamos el objeto global `localStorage` y los métodos que nos provee. El primero de ellos es `setItem()` que nos ayuda a crear un nuevo item si no existe, o editarlo en caso de que ya se encuentre guardado en el almacén.

Este método recibe como primer parámetro la llave para identificar al item, y como segundo parámetro el valor a guardar.

```js
// Crear items
localStorage.setItem('nombre', 'Fer');
localStorage.setItem('edad', 23);

// Actualizar items
// Simplemente utiliza la misma llave.
localStorage.setItem('nombre', 'Pedro');
```

Ya que solo podemos guardar texto, si intentas almacenar un tipo de dato complejo como un arreglo o un objeto, debes primero convertirlo a texto usando [JSON.stringify()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) y pasando el valor como argumento.

```js
const persona = { nombre: 'Fer', edad: 23 };
localStorage.setItem('persona', JSON.stringify(persona));
```

::: tip
Puedes revisar todo lo que está almacenado en tu navegador, entrando a las **herramientas de desarrollador**.

- Para [Chrome](https://support.google.com/campaignmanager/answer/2828688?hl=es) está en la pestaña **Aplicación**, en la sección **Almacenamiento > Local Storage**.
- Para [Firefox](https://developer.mozilla.org/es/docs/Learn/Common_questions/What_are_browser_developer_tools) está en la pestaña **Almacenamiento**, en la sección **Local Storage**.

Revisa la documentación de tu navegador para saber cómo acceder a esta información.
:::

## Obtener items

Para obtener algo de nuestro almacén usamos el método `getItem()` junto con la llave. Esto nos regresará el texto guardado o `null` en caso de no encontrar esa llave.

```js
localStorage.getItem('nombre');
// -> 'Fer'

localStorage.getItem('edad'); // Retorna texto, no número
// -> '23'

localStorage.getItem('no-existe');
// -> null
```

Recuerda que todo en el **localStorage** es texto, por lo que los objetos más complejos deben ser convertidos antes de usarse. [JSON.parse()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) transforma las cadenas de texto a su tipo de dato original.

```js
localStorage.getItem('persona'); // Retorna texto, no el objeto
// -> '{ nombre: "Fer", edad: 23 }'

JSON.parse(localStorage.getItem('persona'));
// -> { nombre: 'Fer', edad: 23 }
```

## Borrar items

Para borrar un item llamamos al método `removeItem()` y pasamos la llave.

```js
localStorage.removeItem('nombre');
```

Y para borrar todos los items usamos `clear()`.

```js
localStorage.clear();
```

## Conclusión

`localStorage` es solo un [tipo de almacenamiento en el navegador](https://developer.mozilla.org/es/docs/Web/API/Web_Storage_API) pero abre las posibilidades a grandes cosas, ya que ofrece flexibilidad a las aplicaciones cliente para guardar todo tipo de información que necesiten como [tokens de autenticación](<https://es.wikipedia.org/wiki/Token_(inform%C3%A1tica)>) (aunque debes tener cuidado), datos del usuario, preferencias como el tema oscuro, etc.

La API es realmente sencilla, así que te recomiendo que empieces a usarla en tus aplicaciones, podría ser de mucha utilidad.

Happy coding! 🥸

<Disqus />
