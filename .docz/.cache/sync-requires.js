const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/shyn/DEV/UIkit/.docz/.cache/dev-404-page.js"))),
  "component---components-md": hot(preferDefault(require("/Users/shyn/DEV/UIkit/components.md"))),
  "component---readme-md": hot(preferDefault(require("/Users/shyn/DEV/UIkit/README.md"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/shyn/DEV/UIkit/.docz/src/pages/404.js")))
}

