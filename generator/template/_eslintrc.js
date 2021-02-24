module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    /**
     * https://blog.csdn.net/weixin_33966365/article/details/91424112
     * 释放 no console 部署会因 eslint 报错失败
     */
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'only-multiline'], // 仅后跟 ]} 时要求不能有逗号
  }
}
