module.exports = {
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "flowtype"
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    },
    "import/extensions": ["js", "jsx"]
  },
  "env": {
    "browser": true,
    "jest": true
  },
  "rules": {
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "flowtype/no-types-missing-file-annotation": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ]
  }
}