exports.decorateConfig = config => {
  return Object.assign({}, config, {
    borderColor: '#000',
    fontFamily: 'Hack, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace'
  })
}