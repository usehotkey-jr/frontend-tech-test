const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [
            "*",
            ".js",
            ".jsx"
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {presets: ["env", "stage-0"]}
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: "TODO"
        })
    ],
    devServer: {
        compress: true,
        port: 9000
    },
    devtool: "eval-source-map"
};
