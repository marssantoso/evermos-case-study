const formatArgs = ({ path }) => {
  let name = path
  if (/_/.test(name)) name = name.replace(/_/, '')
  if (/-/.test(name)) name = name.replace(/-/, '/')
  name = name
    .split('/')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
  name = `Page${name}`
  return { path, name }
}

module.exports = {
  prompt: ({ prompter }) => {
    return prompter
      .prompt({
        name: 'path',
        type: 'input',
        message: `Specify the path for the new page:`,
      })
      .then(formatArgs)
  },
}
