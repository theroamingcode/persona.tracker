module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/vue3-essential",
        "@vue/standard"
    ],
    parserOptions: {
        parser: "@babel/eslint-parser"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "off" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "off" : "off",
        quotes: ["error", "double"],
        indent: ["error", 4],
        "no-tabs": 0,
        "brace-style": ["error", "stroustrup"],
        "no-mixed-spaces-and-tabs": 0,
        "no-unused-vars": "off",
        "vue/multi-word-component-names": "off",
        "vue/valid-template-root": "off", // remove this,
        "vue/no-mutating-props": "off" // update and remove tis warn
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)"
            ],
            env: {
                jest: true
            }
        }
    ]
}
