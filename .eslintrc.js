module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'arrow-parens': 0,
    'no-console': 0,//禁止使用console
    'no-const-assign': 2,//禁止修改const声明的变量
    'no-multi-spaces': 0,//不能用多余的空格
    'semi': [0, 'always'],//语句结尾不检查分号
    'no-undef': 0,//不能有未定义的变量
    'no-multiple-empty-lines': [0, { 'max': 2 }],//空行最多不能超过2行
    'spaced-comment': 0,//注释风格要不要有空格什么的
    'no-unused-vars': 0,//不能有声明后未被使用的变量或参数
    "space-before-function-paren": 0, //括号左侧没有空格
    // allow async-await
    'generator-star-spacing': 0,
    'indent': ['off', 2],
    'no-trailing-spaces': 2,//一行结束后面不要有空格
    'arrow-spacing': 2,//=>的前/后空格
    '@typescript-eslint/no-var-requires': 0,
    "@typescript-eslint/no-explicit-any": ["off"],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
