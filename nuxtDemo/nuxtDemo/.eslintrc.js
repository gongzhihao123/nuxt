module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-var': 2,
    'no-unused-vars': 2,
    // 禁止分号结尾
    'semi': [2, 'never'],
    // 禁止无用的构造函数
    'no-useless-constructor': 2,
    // 禁止对 const 定义重新赋值
    'no-const-assign': 2,
    // 禁止将 undefined 赋值给变量
    'no-undef-init': 2,
    // 禁止访问未定义的变量或方法
    'no-undef': 2,
    // 最大块嵌套深度为 5 层
    'max-depth': [2, 5],
    //对象字面量项尾不能有逗号
    'comma-dangle': [2, 'never'],
    //逗号前后的空格
    'comma-spacing': 0,
    //逗号风格，换行时在行首还是行尾
    'comma-style': [2, 'last'],
    //大括号内是否允许不必要的空格
    'object-curly-spacing': [0, 'never'],
    // 方法后面有空格
    'space-before-function-paren': [2, 'always'],
    'keyword-spacing': [2, {
      'before': true
    }],
    'no-constant-condition': 2,
    'no-unused-expressions': 2,
    'indent': ['error', 2],
    'no-trailing-spaces': 2,
    'space-before-blocks': 2,
    'quotes': [1, 'single']
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
