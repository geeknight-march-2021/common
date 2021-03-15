const materialUIDependencies = [
  'Link',
  'Button',
  'Typography',
  'TextField',
  'Card',
  'CardContent',
  'CardActions'
].map(dep => `@material-ui/core/${dep}`)

module.exports = [
  "react",
  "react-dom",
  "styled-components",
  "react-modal",
  ...materialUIDependencies
]
