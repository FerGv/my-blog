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

<br>

- **- (guión)**

  _Permite crear un conjunto de caracteres de forma simplificada._

  `/[a-z]/` buscará cualquier letra del abecedario en minúsculas.

  `/[A-Z]/` buscará cualquier letra del abecedario en mayúsculas.

  `/[0-9]/` buscará cualquier dígito.

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

## Grupos

## Condicionales

Si hasta aquí no has comprendido nada, no te preocupes, es un tema que a todos nos cuesta trabajo entender en un principio.

## Conclusión

Sé que las expresiones regulares son muy complicadas la primera vez que las conoces (la verdad es que no es una sintaxis muy amigable) pero pueden ayudarte en muchísimas cosas. Te recomiendo que practiques e investigues la teoría de cada componente, después de unos cuantos ejercicios no te prometo que dejen de ser feas pero sí serán más comprensibles 😅.

Happy coding! 🥸

<Disqus />
