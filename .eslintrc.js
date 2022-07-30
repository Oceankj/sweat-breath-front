module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    ignorePatterns: [".eslintrc.js","webpack.config.js"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "react"
    ],
    rules: {
    }
}
