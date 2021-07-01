const items = [
  ['/', 'Inicio'],
  '/welcome/',
  {
    title: 'Javascript',
    path: '/js/',
    children: [
      {
        title: 'Conceptos',
        path: '/js/concepts/',
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
        ],
      },
      {
        title: 'Tips',
        path: '/js/tips/',
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
        path: '/js/libraries/',
        collapsable: false,
        children: ['/js/jquery/', '/js/babel/'],
      },
    ],
  },
];

module.exports = items;
