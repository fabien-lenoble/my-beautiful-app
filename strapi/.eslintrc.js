module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        // 'plugin:nuxt/typescript/recommended',
        // "@nuxt/typescript/recommended",
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        'semi': 'error',
        'indent': ['error', 4],
        'no-trailing-spaces': 'error',
    }
};
