import globals from "globals"
import pluginJs from "@eslint/js"
import pluginVue from "eslint-plugin-vue"

export default [
  {
    languageOptions: { globals: globals.browser },
    files: ["**/*.js", "**/*.vue", "**/*.mjs"],
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      semi: ['error', 'never'],
      "no-console": "off",
      "indent": ["error", 2, { "SwitchCase": 1 }],
      'vue/html-indent': ['error', 2],
      'max-len': ['error', { 'code': 120 }],
      'vue/html-closing-bracket-spacing': ['error', {
        'startTag': 'never',
        'endTag': 'never',
        'selfClosingTag': 'always'
      }],
      'no-multi-spaces': [2, { ignoreEOLComments: true }],
      "vue/no-multi-spaces": ["error", {
        "ignoreProperties": false
      }],
      "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
      'vue/valid-template-root': 'off',
      'prefer-const': 2,
      'no-useless-escape': 0,
      'no-dupe-keys': 2,
      'no-duplicate-case': 2,
      'new-parens': 2,
      "vue/first-attribute-linebreak": ["error", {
        "singleline": "beside",
        "multiline": "below"
      }],
      "vue/max-attributes-per-line": ["error", {
        "singleline": {
          "max": 2
        },      
        "multiline": {
          "max": 1
        },
      }],
      "vue/attributes-order": ["error", {
        "order": [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          ["UNIQUE", "SLOT"],
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT"
        ],
        "alphabetical": false
      }],
      'object-curly-spacing': ["error", "always", { "objectsInObjects": true }],
      'comma-spacing': ["error", { "before": false, "after": true }],
      'arrow-spacing': ["error", { "before": true, "after": true }],
      'space-infix-ops': "error",
    }
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  
]