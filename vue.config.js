const path = require("path")

module.exports = {
    css: {loaderOptions: {postcss: {plugins: [require("autoprefixer")({})]}}},
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "scss",
            patterns: [path.resolve(__dirname, "src", "styles", "index.scss")],
        },
    },
}
