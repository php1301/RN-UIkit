const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'RN UIkit',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/shyn/DEV/UIkit/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'RN UIkit',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/shyn/DEV/UIkit',
          templates:
            '/Users/shyn/DEV/UIkit/node_modules/docz-core/dist/templates',
          docz: '/Users/shyn/DEV/UIkit/.docz',
          cache: '/Users/shyn/DEV/UIkit/.docz/.cache',
          app: '/Users/shyn/DEV/UIkit/.docz/app',
          appPackageJson: '/Users/shyn/DEV/UIkit/package.json',
          appTsConfig: '/Users/shyn/DEV/UIkit/tsconfig.json',
          gatsbyConfig: '/Users/shyn/DEV/UIkit/gatsby-config.js',
          gatsbyBrowser: '/Users/shyn/DEV/UIkit/gatsby-browser.js',
          gatsbyNode: '/Users/shyn/DEV/UIkit/gatsby-node.js',
          gatsbySSR: '/Users/shyn/DEV/UIkit/gatsby-ssr.js',
          importsJs: '/Users/shyn/DEV/UIkit/.docz/app/imports.js',
          rootJs: '/Users/shyn/DEV/UIkit/.docz/app/root.jsx',
          indexJs: '/Users/shyn/DEV/UIkit/.docz/app/index.jsx',
          indexHtml: '/Users/shyn/DEV/UIkit/.docz/app/index.html',
          db: '/Users/shyn/DEV/UIkit/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
