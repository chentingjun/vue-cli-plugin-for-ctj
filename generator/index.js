module.exports = (api, options) => {
  console.log('options: ', options)
  const pkgJson = {
    description: options.description,
    author: options.author,
    keywords: options.keywords,
    scripts: {
      start: 'npm run serve'
    }
  }
  if (options.useElementUI) {
    pkgJson.dependencies = {
      "element-ui": "^2.14.1",
    }
  }
  api.render('./template')
  api.extendPackage({
    ...pkgJson
  })
}