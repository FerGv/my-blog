const items = [
  ['/', 'Inicio'],
  '/welcome/',
  {
    title: 'Javascript',
    path: '/js/',
    children: [
      {
        title: 'Conceptos',
        collapsable: false,
        children: [
          '/js/var-let-const/',
          '/js/reference-vs-value/',
          '/js/callback-hell/',
          '/js/context/',
          '/js/bang-bang-operator/',
          '/js/array-methods/',
          '/js/es6-features/',
          // '/js/es6-features-part-2/',
          // '/js/es6-features-part-3/',
          '/js/regex/',
          '/js/fetch/',
          '/js/recursion/',
          '/js/dom/',
          '/js/local-storage/',
        ],
      },
      {
        title: 'Tips',
        collapsable: false,
        children: [
          '/js/environment-variables/',
          '/js/state-of-js-2020/',
          '/js/best-practices/',
          '/js/asynchronous-foreach/',
        ],
      },
      {
        title: 'Librerías',
        collapsable: false,
        children: ['/js/jquery/', '/js/babel/'],
      },
    ],
  },
  {
    title: 'Visual Studio Code',
    path: '/vscode/',
    children: ['/vscode/extensions/'],
  },
];

module.exports = items;
