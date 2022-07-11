module.exports = {
  env: {
    node: true,
    es2020: true,
    jest: true,
  },
  extends: [
    "eslint-config-airbnb-base",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: "module",
  },
  "rules": {
    // Possible Errors (overrides from recommended set)
    "no-extra-parens": ERROR,
    "no-unexpected-multiline": ERROR,
    // All JSDoc comments must be valid
    "valid-jsdoc": [ ERROR, {
        "requireReturn": false,
        "requireReturnDescription": false,
        "requireParamDescription": true,
        "prefer": {
            "return": "returns"
        }
    }],
  },
};
