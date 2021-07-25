module.exports = {
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
      'plugin:vue/vue3-recommended',
      '@vue/typescript/recommended'
      // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
      'semi': 'error',
      'indent': ['error', 4],
      'no-trailing-spaces': 'error',
      'vue/script-indent': ['error', 4, { baseIndent: 0 }],
      'vue/html-indent': ['error', 4, { baseIndent: 1 }],
      '@typescript-eslint/explicit-module-boundary-types': ['off'],
      '@typescript-eslint/ban-types': ['off', { 'types': ['Object'] }]
    }
  }