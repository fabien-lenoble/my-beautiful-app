module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        'plugin:nuxt/recommended',
        "plugin:vue/recommended",
        // 'plugin:nuxt/typescript/recommended',
        // "@nuxt/typescript/recommended",
        'prettier'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        'semi': 'error',
        'indent': ['error', 4],
        'no-trailing-spaces': 'error',
        'vue/script-indent': ['error', 4, { baseIndent: 0 }],
        'vue/html-indent': ['error', 4, { baseIndent: 1 }],
    }
};
