# Expresiones regulares (Regex)

En la vida de todo programador llega el momento de utilizar algo conocido como [**"Expresiones Regulares"**](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions), un término que a simple vista no pareciera nada extraño hasta que te encuentras con:

```js
[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+
```

Y te dicen que esa cosa rara es la expresión regular para validar un email 🤯.

![Scared](./scared.gif)

::: tip
Te recomiendo visitar este sitio llamado [iHateRegex](https://ihateregex.io/) para conocer más acerca de expresiones regulares. Tiene una gran variedad de ellas y explica cada una de sus partes.
:::

## Conceptos básicos

Según la MDN, las expresiones regulares son **patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas**, es decir, con ellas podemos realizar búsquedas para validar o encontrar cierto conjunto de caracteres que puede incluir cualquier letra, número y/o símbolo.

Normalmente las expresiones regulares se escriben entre dos diagonales `/.../`, aunque cada lenguaje de programación tiene su propia sintaxis.

::: tip
**Regex** es un nombre corto que se le da a las expresiones regulares.
:::

::: tip
Puedes practicar con expresiones regulares en [regex101](https://regex101.com/), tiene una interfaz amigable y permite validar tus expresiones en diferentes lenguajes como Javascript, Python, PHP y Java.
:::

### Buscar letras/palabras/frases

Para saber si una cadena de texto incluye la letra `a`, es tan fácil como escribir `/a/`. Así, si quisieras saber si una cadena incluye la palabra `perro`, entonces sería `/perro/`.

Como puedes ver, la búsqueda más sencilla se puede realizar simplemente escribiendo entre diagonales la letra, palabra o frase que necesitas.

```js
'Este es el texto donde queremos realizar la búsqueda'

// Regex para buscar una frase.
/es el texto/
```

Este tipo de búsqueda es estricta, deben estar todos los caracteres presentes y justo en el orden que se indican. El lugar donde se encuentren no es importante aunque veremos que sí se puede especificar.

::: warning
Por defecto, las expresiones regulares son **case-sensitive** (sensibles a mayúsculas y minúsculas). Esto se puede cambiar pero tenlo en cuenta.
:::

## Comodines

Los comodines son símbolos con significado especial, es decir, tendrán alguna función diferente a su valor como tal. Veamos una pequeña lista de estos comodines para que se entienda mejor:

- **. (punto)**

  _Representa un caracter dentro de la regex._

  `/gat./` buscará cualquier palabra de 4 letras que comience con `gat` sin importar el cuarto caracter.

  **Ejemplo:** `gato, gata, gatx`

<br>

- **\* (asterisco)**

  _Busca cero o más coincidencias._

  `/ba*/` buscará una `b` sola o con cualquier número de `a` juntas.

  **Ejemplo:** `b, ba, baa, baaa`

<br>

- **+ (más)**

  _Busca una o más coincidencias._

  `/ba+/` buscará una `b` con al menos una `a` juntas.

  **Ejemplo:** `ba, baa, baaa`

<br>

- **? (pregunta)**

  _Busca una o ninguna coincidencia._

  `/solo?/` buscará la palabra `sol` con una `o` al final opcional.

  **Ejemplo:** `sol, solo`

<br>

- **| (barra vertical)**

  _Permite buscar un caracter(es) u otros._

  `/pala|palo/` buscará la palabra `pala` o `palo`.

  **Ejemplo:** `pala, palo`

<br>

- **^ (acento circunflejo)**

  _Busca los caracteres al inicio de la cadena._

  `/^el/` buscará la palabra `el` solo al inicio de la oración.

  **Ejemplo:** <code><b>el</b> perro es el mejor amigo del hombre</code>

<br>

- **\$ (pesos)**

  _Busca los caracteres al final de la cadena._

  `/sobre$/` buscará la palabra `sobre` al final de la oración.

  **Ejemplo:** <code>sobre la mesa está el <b>sobre</b></code>

<br>

- **{} (llaves)**

  _Buscará un cierto número de caracteres._

  `/a{1}/` buscará solo una letra `a`.

  **Ejemplo:** `a`

  `/a{1,3}/` buscará de una a tres letras `a`.

  **Ejemplo:** `a, aa, aaa`

  `/a{1,}/` buscará al menos una letra `a`.

  **Ejemplo:** `a, aa, aaa, aaaa`

<br>

- **() (paréntesis)**

  _Agrupa caracteres y guarda cada grupo por separado._

  `/pal(a|o)/` buscará la palabra `pal` con terminación `a` ó `o` y guardará dos grupos.

  **Ejemplo:** <code>la <b>pala</b> está hecha con un <b>palo</b></code>

  `Coincidencias: pala, palo`

  `Grupo 1: a`

  `Grupo 2: o`

<br>

- **\[] (corchetes)**

  _Buscará cualquier caracter de un conjunto de caracteres._

  `/pal[ao]/` buscará la palabra `pal` con terminación `a` ó `o`.

  **Ejemplo:** <code>la <b>pala</b> está hecha con un <b>palo</b></code>

  `Coincidencias: pala, palo`

  ::: tip
  También existe la posibilidad de definir el conjunto de caracteres que **no** queremos encontrar. Para esto se utiliza el `^` al inicio del conjunto.

  Por ejemplo, si queremos validar que una cadena no contenga algunos caracteres especiales, podemos escribir `/[^#@+-&]/`.
  :::

<br>

- **- (guión)**

  _Permite crear un conjunto de caracteres de forma simplificada._

  `/[a-z]/` buscará cualquier letra del abecedario en minúsculas.

  `/[A-Z]/` buscará cualquier letra del abecedario en mayúsculas.

  `/[0-9]/` buscará cualquier dígito.

## Caracteres de escape

Existen algunos caracteres de escape que representan conjuntos o caracteres especiales, esto nos ayuda a escribir expresiones regulares más sencillas de leer.

<table>
  <tr>
    <td><b>/\d/</b></td>
    <td>
      <code>/[0-9]/</code>
      Cualquier dígito
    </td>
  </tr>
  <tr>
    <td><b>/\D/</b></td>
    <td>
      <code>/[^0-9]/</code>
      Cualquier caracter que no sea dígito
    </td>
  </tr>
  <tr>
    <td><b>/\w/</b></td>
    <td>
      <code>/[A-Za-z0-9_]/</code>
      Cualquier letra mayúscula o minúscula, dígito o guión bajo
    </td>
  </tr>
  <tr>
    <td><b>/\W/</b></td>
    <td>
      <code>/[^A-Za-z0-9_]/</code>
      Cualquier caracter que no sea letra mayúscula o minúscula, dígito o guión bajo
    </td>
  </tr>
  <tr>
    <td><b>/\s/</b></td>
    <td>Cualquier tipo de espacio (incluye tabulación)</td>
  </tr>
  <tr>
    <td><b>/\S/</b></td>
    <td>Cualquier caracter que no sea de tipo de espacio</td>
  </tr>
  <tr>
    <td><b>/\t/</b></td>
    <td>Tabulación horizontal</td>
  </tr>
  <tr>
    <td><b>/\r/</b></td>
    <td>Retorno de carro</td>
  </tr>
  <tr>
    <td><b>/\n/</b></td>
    <td>Salto de línea</td>
  </tr>
  <tr>
    <td><b>/\/</b></td>
    <td>
      Escapa caracteres para darles un significado especial o diferente al que normalmente tienen.
      <br>
      <br>
      <b>Ejemplo:</b>
      <br>
      <ul>
        <li>
          <code>/1+2/</code> buscará al menos un <code>1</code> seguido de un <code>2</code>.
        </li>
        <li>
          <code>/1\+2/</code> buscará la suma <code>1+2</code>.
        </li>
        <br>
        <li>
          <code>/d/</code> buscará una letra <code>d</code>.
        </li>
        <li>
          <code>/\d/</code> buscará un dígito.
        </li>
      </ul>
      <br>
      Para escapar la diagonal invertida, debes duplicarla: <code>/\\/</code>
    </td>
  </tr>
</table>

## Modificadores / banderas

Los modificadores son parámetros especiales que alteran la expresión regular en general. Estos se escriben justo a lado de la diagonal de cierre `/.../<modificador>`.

- **g (global)**

  _Busca todas las coincidencias._

  **Ejemplo:**

  <table>
    <tr>
      <td><b>/el/</b></td>
      <td>
        <code><b>el</b> carro rojo es el más veloz</code>
      </td>
    </tr>
    <tr>
      <td><b>/el/g</b></td>
      <td>
        <code><b>el</b> carro rojo es <b>el</b> más veloz</code>
      </td>
    </tr>
  </table>

  ::: warning
  Por defecto, las expresiones regulares solo buscarán la primera coincidencia.
  :::

- **m (multilínea)**

  _Busca las coincidencias por línea en el texto usando los comodines `^` y `$`._

  **Ejemplo:**

  <table>
    <tr>
      <td><b>/línea$/</b></td>
      <td>
        <code>
        Esta es la primera línea <br>
        Esta es la segunda <b>línea</b>
        </code>
      </td>
    </tr>
    <tr>
      <td><b>/línea$/m</b></td>
      <td>
        <code>
        Esta es la primera <b>línea</b> <br>
        Esta es la segunda <b>línea</b>
        </code>
      </td>
    </tr>
  </table>

  ::: warning
  Por defecto, las expresiones regulares solo buscarán coincidencias al inicio o fin del texto total.
  :::

- **i (case-insensitive)**

  _Busca las coincidencias sin importar mayúsculas y minúsculas._

  **Ejemplo:**

  <table>
    <tr>
      <td><b>/el/</b></td>
      <td>
        <code>el carro rojo es <b>el</b> más veloz</code>
      </td>
    </tr>
    <tr>
      <td><b>/el/i</b></td>
      <td>
        <code><b>El</b> carro rojo es <b>el</b> más veloz</code>
      </td>
    </tr>
  </table>

  ::: warning
  Por defecto, las expresiones regulares harán distinción entre mayúsculas y minúsculas.
  :::

## Condicionales

En ocasiones lo que requieres es validar que un conjunto de caracteres se encuentre antes o después de otro cierto grupo de caracteres, es decir, una búsqueda condicional. Las expresiones regulares también cuentan con una sintaxis especial para esto.

### Búsqueda hacia adelante

_Este tipo de búsqueda verificará los caracteres a la derecha del conjunto a buscar._

- Positiva `/(?=...)/`

  `/a(?=b)/` encontrá la `a` en `ab` pero no en `ac`.

- Negativa `/(?!...)/`

  `/a(?!b)/` encontrá la `a` en `ac` pero no en `ab`.

### Búsqueda hacia atrás

_Este tipo de búsqueda verificará los caracteres a la izquierda del conjunto a buscar._

- Positiva `/(?<=...)/`

  `/(?<=b)a/` encontrá la `a` en `ba` pero no en `ca`.

- Negativa `/(?<!...)/`

  `/(?<!b)a/` encontrá la `a` en `ca` pero no en `ba`.

## Ejemplos

Finalmente, analicemos algunas de las expresiones regulares más comunes para clarificar todo lo visto hasta ahora.

### Validar nombre de usuario

> Acepta letras, números y guiones. Mínimo 3 y máximo 15.

```sh
/^[a-z0-9_-]{3,15}$/
```

<table>
  <tr>
    <th>Expresión</th>
    <th>Significado / Uso</th>
  </tr>
  <tr>
    <td><b>/^/</b></td>
    <td>Indica inicio de línea</td>
  </tr>
  <tr>
    <td><b>/[a-z0-9_-]/</b></td>
    <td>Letras minúsculas, números, guión bajo y guión medio</td>
  </tr>
  <tr>
    <td><b>/{3,15}/</b></td>
    <td>Deben encontrarse de 3 a 15 caracteres</td>
  </tr>
  <tr>
    <td><b>/$/</b></td>
    <td>Indica fin de línea</td>
  </tr>
</table>

### Validar email

> Posiblemente de las más raras pero más fáciles.

```sh
/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
```

<table>
  <tr>
    <th style="min-width: 120px;">Expresión</th>
    <th>Significado / Uso</th>
  </tr>
  <tr>
    <td><b>/[^@ \t\r\n]+/</b></td>
    <td>
      Cualquier caracter que no sea un arroba, un espacio, una tabulación, un retorno de carro o un salto de línea
      <br>
      (Mínimo 1)
    </td>
  </tr>
  <tr>
    <td><b>/@/</b></td>
    <td>Signo de arroba</td>
  </tr>
  <tr>
    <td><b>/\./</b></td>
    <td>Escapa el punto</td>
  </tr>
</table>

### Validar contraseña

> Al menos debe contener una mayúscula, una minúscula, un número y un caracter especial. Mínimo 8.

```sh
/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
```

<table>
  <tr>
    <th>Expresión</th>
    <th>Significado / Uso</th>
  </tr>
  <tr>
    <td><b>/^/</b></td>
    <td>Indica inicio de línea</td>
  </tr>
  <tr>
    <td><b>/(?=.*?[A-Z])/</b></td>
    <td>Busca al menos una letra mayúscula</td>
  </tr>
  <tr>
    <td><b>/(?=.*?[a-z])/</b></td>
    <td>Busca al menos una letra minúscula</td>
  </tr>
  <tr>
    <td><b>/(?=.*?[0-9])/</b></td>
    <td>Busca al menos un número</td>
  </tr>
  <tr>
    <td><b>/(?=.*?[#?!@$ %^&*-])/</b></td>
    <td>Busca al menos un caracter especial</td>
  </tr>
  <tr>
    <td><b>/.{8,}/</b></td>
    <td>Cualquier caracter. Mínimo 8</td>
  </tr>
  <tr>
    <td><b>/$/</b></td>
    <td>Indica fin de línea</td>
  </tr>
</table>

::: tip
Aquí encontramos una combinación especial de comodines: `.*?`

Te dejo [esta pregunta de StackOverflow](https://stackoverflow.com/questions/3075130/what-is-the-difference-between-and-regular-expressions) donde explican a detalle su funcionamiento (lectura en inglés).
:::

## Conclusión

Si hasta aquí no has comprendido nada, no te preocupes, es un tema que a todos nos cuesta trabajo entender en un principio (la verdad es que no es una sintaxis muy amigable) pero las expresiones regulares pueden ayudarte en muchísimas cosas.

Te recomiendo que practiques e investigues la teoría de cada componente, después de unos cuantos ejercicios no te prometo que dejen de ser feas pero sí serán más comprensibles 😅.

Happy coding! 🥸

<Disqus />
