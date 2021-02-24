module.exports = options => {
  return [
    {
      name: 'usePlatform',
      message: 'Pick a platform you need to build: ',
      type: 'list',
      choices: [
        {
          name: 'PC',
          value: 'pc'
        },
        {
          name: 'H5',
          value: 'h5',
        }
      ],
    },
    {
      when: answers => answers.usePlatform === 'pc',
      name: 'useElementUI',
      message: 'Use element ui ?',
      type: 'confirm',
      default: false
    },
    {
      name: 'description',
      message: 'Please enter the project description: ',
      type: 'input',
    },
    {
      name: 'author',
      message: 'Please enter the author name: ',
      type: 'input',
    },
  ]
}
