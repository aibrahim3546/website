module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "files": ['*.ts', '*.tsx'],
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "project": './tsconfig.eslint.json',
    },
    "ignorePatterns": ['.eslintrc.js'],
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-param-reassign": 0,
        "no-underscore-dangle": 0,
        "react-hooks/exhaustive-deps": 0,
        "react/prop-types": 0
    }
};
