const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const endpoints = require("./config/endpoints");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {presets: ["env", "stage-0"]},
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: "TODO",
        }),
    ],
    devServer: {
        compress: true,
        port: endpoints.CLIENT_PORT,
        proxy: {
            [endpoints.API_PATH]: {
                pathRewrite: {[`^${endpoints.API_PATH}`]: ""},
                target: "http://localhost:9001",
            },
        },
    },
    devtool: "eval-source-map",
};
