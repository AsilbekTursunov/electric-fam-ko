export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    "@vue/eslint-config-airbnb", // <-- added
    'plugin:vue/vue3-recommended',
  ],
  plugins: ["vue", "html"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  files: ["src/**/*.js"],
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "error",
    semi: ['error', 'never'],
    "prefer-const": "error",
    "no-console": "off",
    "indent": 'off',
    "vue/html-indent": "off",
    'vue/valid-template-root': 'off',
  }
}