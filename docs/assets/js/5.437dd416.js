(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{281:function(t,e,a){t.exports=a.p+"assets/img/dom.c2f170b1.png"},282:function(t,e,a){t.exports=a.p+"assets/img/blow-mind.8ea40ab6.gif"},283:function(t,e,a){t.exports=a.p+"assets/img/node-options.4ce61fa2.png"},342:function(t,e,a){"use strict";a.r(e);var s=a(13),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"dom-manipulando-html-con-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dom-manipulando-html-con-js"}},[t._v("#")]),t._v(" DOM (Manipulando HTML con JS)")]),t._v(" "),e("p",[t._v("El "),e("a",{attrs:{href:"https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("DOM"),e("OutboundLink")],1),t._v(" es una "),e("a",{attrs:{href:"https://developer.mozilla.org/es/docs/Glossary/API",target:"_blank",rel:"noopener noreferrer"}},[t._v("API"),e("OutboundLink")],1),t._v(" del navegador que nos permite manipular nuestro documento HTML a través del mapeo de todos sus datos. Por mapear me refiero a armar una "),e("a",{attrs:{href:"https://es.wikipedia.org/wiki/%C3%81rbol_(inform%C3%A1tica)",target:"_blank",rel:"noopener noreferrer"}},[t._v("estructura de árbol jerárquico"),e("OutboundLink")],1),t._v(" en donde cada elemento HTML se representa como un nodo.")]),t._v(" "),e("p",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:a(281),alt:"DOM"}})]),t._v(" "),e("p",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:a(282),alt:"Blow mind"}})]),t._v(" "),e("blockquote",[e("p",[t._v("El "),e("strong",[t._v("DOM")]),t._v(" también nos permite manipular XML 🤯.")])]),t._v(" "),e("h2",{attrs:{id:"obtener-elementos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#obtener-elementos"}},[t._v("#")]),t._v(" Obtener elementos")]),t._v(" "),e("p",[t._v("Tradicionalmente tenemos métodos para obtener elementos por:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("ID ("),e("a",{attrs:{href:"https://developer.mozilla.org/es/docs/Web/API/Document/getElementById",target:"_blank",rel:"noopener noreferrer"}},[t._v("getElementById"),e("OutboundLink")],1),t._v(")")])]),t._v(" "),e("li",[e("strong",[t._v("Clase ("),e("a",{attrs:{href:"https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByClassName",target:"_blank",rel:"noopener noreferrer"}},[t._v("getElementsByClassName"),e("OutboundLink")],1),t._v(")")])]),t._v(" "),e("li",[e("strong",[t._v('Atributo "name" para inputs de un formulario ('),e("a",{attrs:{href:"https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByName",target:"_blank",rel:"noopener noreferrer"}},[t._v("getElementsByName"),e("OutboundLink")],1),t._v(")")])]),t._v(" "),e("li",[e("strong",[t._v("Etiqueta ("),e("a",{attrs:{href:"https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByTagName",target:"_blank",rel:"noopener noreferrer"}},[t._v("getElementsByTagName"),e("OutboundLink")],1),t._v(")")])])]),t._v(" "),e("p",[t._v("Y la manera de usarlos es siempre invocando al objeto "),e("a",{attrs:{href:"https://developer.mozilla.org/es/docs/Web/API/Document",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("document")]),e("OutboundLink")],1),t._v(", el cual nos permite acceder a todas las funcionalidades del DOM:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'un-identificador'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByClassName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'una-clase'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'un-input'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Pero ahora tenemos dos nuevos métodos que nos permiten utilizar todo el poder de los "),e("a",{attrs:{href:"https://developer.mozilla.org/es/docs/Learn/CSS/Building_blocks/Selectors",target:"_blank",rel:"noopener noreferrer"}},[t._v("selectores CSS"),e("OutboundLink")],1),t._v(" en los cuales nos enfocaremos hoy:")]),t._v(" "),e("h3",{attrs:{id:"queryselector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#queryselector"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector",target:"_blank",rel:"noopener noreferrer"}},[t._v("querySelector"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Este método nos permite obtener el primer elemento que coincida con el selector pasado como argumento. El selector puede ser tan simple o tan complejo como sea necesario. Así podemos replicar la misma funcionalidad de los métodos anteriores y extenderla.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Obtener por ID")]),t._v("\ndocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#mi-identificador'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Obtener por Clase")]),t._v("\ndocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.mi-clase'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Obtener por Atributo "name"')]),t._v("\ndocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name=\"mi-input\"]'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Obtener por Etiqueta")]),t._v("\ndocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Combinando selectores")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Busca un elemento con el ID "contenedor", después busca el primer elemento div')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// y dentro un elemento con la clase "link"')]),t._v("\ndocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#contenedor > div .link'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),t._v(" "),e("p",[t._v("No solo podemos usar "),e("code",[t._v("querySelector")]),t._v(" en el objeto "),e("code",[t._v("document")]),t._v(", si ya previamente obtuvimos un elemento, podemos usarlo como nuestro nodo raíz (el nodo a partir del cual comienza la estructura de árbol) y buscar en él.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" contenedor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#contenedor'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" imagenContenedor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" contenedor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Como puedes ver, la primera llamada de "),e("code",[t._v("querySelector")]),t._v(" se realiza sobre "),e("code",[t._v("document")]),t._v(" pero la segunda ya no. En este sentido, la búsqueda de la imagen no se hace en todo el documento, solo en los elementos hijos del nodo "),e("code",[t._v("#contenedor")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"queryselectorall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#queryselectorall"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll",target:"_blank",rel:"noopener noreferrer"}},[t._v("querySelectorAll"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v('Este método es prácticamente igual que el anterior, la única diferencia es que retornará un "arreglo" de nodos llamado '),e("a",{attrs:{href:"https://developer.mozilla.org/es/docs/Web/API/NodeList",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeList"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Obtener todos los elementos con la clase "link"')]),t._v("\ndocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.link'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Un objeto "),e("code",[t._v("NodeList")]),t._v(" no es un arreglo como tal, por lo que no podrás usar métodos como "),e("code",[t._v("map")]),t._v(" o "),e("code",[t._v("reduce")]),t._v(". El único permitido es "),e("code",[t._v("forEach")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"manipular-elementos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manipular-elementos"}},[t._v("#")]),t._v(" Manipular elementos")]),t._v(" "),e("p",[t._v("Pero obtener elementos no sirve de nada si no se hace algo con ellos. Así que veamos cómo manipularlos y realmente sacarles provecho.")]),t._v(" "),e("h3",{attrs:{id:"detalle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#detalle"}},[t._v("#")]),t._v(" Detalle")]),t._v(" "),e("p",[t._v("Lo más sencillo es obtener información acerca de los elementos. Esto es tan simple como imprimir en consola.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" titulo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("titulo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> <title>DOM (Manipulando HTML con JS) | FerGv blog</title>")]),t._v("\n")])])]),e("p",[t._v("Pero podemos ir más allá, cada nodo nos ofrece toda la información relacionada al elemento como su etiqueta, contenido, clases, id, atributos, etc.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parrafo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parrafo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> P")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parrafo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("classList"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> DOMTokenList(2) ['una-clase', 'otra-clase', value: 'una-clase otra-clase']")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parrafo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> texto del párrafo")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parrafo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> CSSStyleDeclaration {alignContent: '', alignItems: '', alignSelf: '', ...}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("De hecho, puedes consultar la lista de opciones para cada nodo escribiendo en la consola de tu navegador el selector y un punto:")]),t._v(" "),e("p",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:a(283),alt:"Options"}})]),t._v(" "),e("p",[t._v("Verás que las posibilidades son bastantes 😅.")])]),t._v(" "),e("h3",{attrs:{id:"borrar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#borrar"}},[t._v("#")]),t._v(" Borrar")]),t._v(" "),e("p",[t._v("Lo segundo más sencillo es eliminar un nodo. Pero ten cuidado, tal vez es demasiado sencillo ⚠😬.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"editar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#editar"}},[t._v("#")]),t._v(" Editar")]),t._v(" "),e("p",[t._v("Editar un nodo es parecido al detalle, solo que en lugar de consultar le asignamos los nuevos valores.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parrafo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nparrafo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nuevo contenido'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parrafo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> nuevo contenido")]),t._v("\n\nparrafo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parrafo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> red")]),t._v("\n")])])]),e("h3",{attrs:{id:"agregar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#agregar"}},[t._v("#")]),t._v(" Agregar")]),t._v(" "),e("p",[t._v("Lo más difícil manipulando nodos es la creación, no es la gran cosa pero tenemos varias maneras de hacerlo:")]),t._v(" "),e("h4",{attrs:{id:"document-createelement"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#document-createelement"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://developer.mozilla.org/es/docs/Web/API/Document/createElement",target:"_blank",rel:"noopener noreferrer"}},[t._v("document.createElement()"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("La manera tradicional de agregar elementos es crear una instancia del elemento y manualmente establecer cada uno de sus atributos para finalmente agregarlo en cualquier nodo de nuestro DOM.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" link "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Crea la instancia del elemento")]),t._v("\nlink"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Se agrega una clase")]),t._v("\nlink"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mi-link'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Se agrega un id")]),t._v("\nlink"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Este es un link'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Se agrega el contenido del elemento")]),t._v("\ndocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("link"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// El elemento se agrega como nodo hijo de `body`")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[e("code",[t._v("createElement")]),t._v(" siempre se llama desde "),e("code",[t._v("document")]),t._v(" pero "),e("code",[t._v("appendChild")]),t._v(" puede ser usado en cualquier elemento del DOM.")])]),t._v(" "),e("h4",{attrs:{id:"element-insertadjacenthtml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#element-insertadjacenthtml"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentHTML",target:"_blank",rel:"noopener noreferrer"}},[t._v("{element}.insertAdjacentHTML()"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Por otro lado, la manera moderna de hacer esto es usando "),e("code",[t._v("insertAdjacentHTML")]),t._v(" el cual nos permite escribir el HTML del elemento(s) que queremos agregar y nos permite indicar fácilmente si debe agregarse al inicio o al final del elemento padre.")]),t._v(" "),e("p",[t._v("El ejemplo anterior podría ser escrito en una sola línea:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("document"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertAdjacentHTML")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeend'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'<a id="mi-link" class="link">Este es un link</a>\'')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"conclusion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusión")]),t._v(" "),e("p",[t._v("Trabajar con el DOM es algo con lo que te enfrentas día a día como desarrollador web, por ello es muy importante que entiendas cómo funciona y perfecciones tu habilidad para manipularlo.")]),t._v(" "),e("p",[t._v("Happy coding! 🥸")]),t._v(" "),e("Disqus"),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code")])])],1)}),[],!1,null,null,null);e.default=n.exports}}]);