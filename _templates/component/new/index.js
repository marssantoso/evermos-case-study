// CONST

const TYPES = ['atoms', 'molecules', 'organisms']

// HELPER

const typePrefixer = (type) => type.substring(0, 1).toUpperCase()

const nameSplitter = (name) => {
  if (/\s/.test(name)) return name.split(' ')
  else if (/-/.test(name)) return name.split('-')
  return [name]
}

const namePascalize = (name) =>
  nameSplitter(name.toLowerCase())
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

// FORMATTER

const typeMapper = TYPES.reduce((a, c) => ({ ...a, [typePrefixer(c)]: c }), {})

const typeFormatter = (type) => typeMapper[typePrefixer(type)]

const nameFormatter = (type, name) =>
  `${typePrefixer(type)}${namePascalize(name)}`

const componentFormatter = (type, name) => {
  if (/\s/.test(name)) name = name.split(' ').join('-')
  return `${typePrefixer(type).toLowerCase()}-${name.toLowerCase()}`
}

const storyFormatter = (type, name) => `${type}/${namePascalize(name)}`

// PROMPTER HELPER

const getParams = (args) => {
  if (!Object.keys(typeMapper).includes(typePrefixer(args.type)))
    throw new Error('Type invalid')

  const type = typeFormatter(args.type)
  const name = nameFormatter(args.type, args.name)
  const componentName = componentFormatter(args.type, args.name)
  const storyName = storyFormatter(type, args.name)

  return { type, name, componentName, storyName }
}

const getPrompt = (name) => ({ name, type: 'input', message: `Enter ${name}:` })

// PROMPTER

module.exports = {
  prompt: ({ prompter, args }) => {
    if (!args.type) {
      return prompter.prompt(getPrompt('type')).then(({ type }) => {
        if (!args.name)
          return prompter
            .prompt(getPrompt('name'))
            .then(({ name }) => getParams({ type, name }))
        return getParams({ ...args, type })
      })
    }
    if (!args.name) {
      return prompter
        .prompt(getPrompt('name'))
        .then(({ name }) => getParams({ ...args, name }))
    }
    return getParams(args)
  },
  // params: ({ args }) => getParams(args),
}
