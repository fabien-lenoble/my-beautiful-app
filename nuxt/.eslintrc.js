module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        'plugin:nuxt/recommended',
        'plugin:vue/recommended',
        '@nuxtjs/eslint-config-typescript'
    ],
    plugins: [
        '@typescript-eslint'
    ],
    // add your custom rules here
    rules: {
        semi: ['error', 'always'],
        '@typescript-eslint/semi': ['error'],
        indent: ['error', 4],
        'no-trailing-spaces': 'error',
        'vue/script-indent': ['error', 4, { baseIndent: 0 }],
        'vue/html-indent': ['error', 4, { baseIndent: 1 }],
        'vue/max-len': ['error', {
            code: 120,
            template: 120,
            tabWidth: 4,
            comments: 120,
            ignorePattern: '',
            ignoreComments: false,
            ignoreTrailingComments: false,
            ignoreUrls: false,
            ignoreStrings: false,
            ignoreTemplateLiterals: false,
            ignoreRegExpLiterals: false,
            ignoreHTMLAttributeValues: false,
            ignoreHTMLTextContents: false
        }],
        '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/explicit-function-return-type': ['warn']
    }
};
