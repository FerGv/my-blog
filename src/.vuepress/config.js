const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#base
   */
  // base: '/my-blog/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#dest
   */
  dest: './docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Mi blog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }], ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'fergv/my-blog',
    editLinks: true,
    docsDir: 'src',
    smoothScroll: true,
    displayAllHeaders: true,
    nav: [
      { text: 'fergv.com', link: 'https://fergv.com' },
    ],
    locales: {
      '/': {
        selectText: 'Idiomas',
        // label for this locale in the language dropdown
        label: 'Español',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Idiomas',
        // text for the edit-on-github link
        editLinkText: 'Editar esta página en GitHub',
        // text for the last updated label
        lastUpdated: 'Última actualización',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'Nuevo contenido disponible.',
            buttonText: 'Actualizar'
          }
        },
        sidebar: [
          ['/', 'Inicio'],
          '/welcome/',
          '/state-of-js-2020/',
        ],
      },

      '/en/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // text for the last updated label
        lastUpdated: 'Last Updated',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        sidebar: [
          ['/en/', 'Home'],
          '/en/welcome/',
          '/en/state-of-js-2020/',
        ],
      },
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  /**
   * Locales，ref：https://v1.vuepress.vuejs.org/guide/i18n.html
   */
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'es-MX', // this will be set as the lang attribute on <html>
      title: 'Mi blog',
      description: 'Mi blog personal'
    },

    '/en/': {
      lang: 'en-US',
      title: 'My blog',
      description: 'My personal blog'
    }
  }
};
