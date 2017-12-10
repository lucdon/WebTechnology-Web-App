const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
    return merge([
        {
            context: __dirname + "/../",
            devServer: {
                contentBase: './dist',
                historyApiFallback: true
            },
            entry: "./webpack/webpack.entry.js",
            output: {
                filename: "js/client.bundle.js",
                path: __dirname + "/../dist/",
                publicPath: "/"
            },
            plugins: [
                new ExtractTextPlugin("css/client.bundle.css"),
                new CopyWebpackPlugin([
                    {
                        from: "wwwroot/favicon.ico",
                        to: "favicon.ico"
                    }
                ]),
                new HtmlWebpackPlugin({template: "wwwroot/index-dev.html"})
            ],
            stats: {
                children: false
            }
        }
    ]);
};