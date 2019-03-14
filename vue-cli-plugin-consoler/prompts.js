module.exports = [
  {
    type: 'input',
    name: 'appName',
    message: '请填写应用名称:',
    validate: input => !!input,
  },
  {
    type: 'input',
    name: 'appDesc',
    message: '请填写应用描述:',
    validate: input => !!input,
  },
  {
    type: 'confirm',
    name: 'innerComp',
    message: '是否启用自带组件?',
  },
  {
    type: 'checkbox',
    name: 'choiceComp',
    message: '请选择需要的组件:',
    choices: [
      { name: '表格树', value: 'table' },
      { name: '计数器', value: 'count' }
    ],
    when: answers => answers.innerComp
  },
  {
    type: 'confirm',
    name: 'proxy',
    message: '是否启用反向代理设置?',
  },
  {
    type: 'input',
    name: 'choiceProxy',
    message: '请输入反向代理服务器地址',
    validate: input => !!input,
    when: answers => answers.proxy
  },
]
