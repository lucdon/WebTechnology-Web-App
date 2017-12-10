const merge = require("webpack-merge");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = (env) => {
    return merge([
        {
            context: __dirname + "/../",
            entry: "./webpack/webpack.entry.js",
            output: {
                filename: "js/client.bundle.js",
                path: __dirname + "/../../WebTech-Website-Deploy/WebTech-Webapp-Deploy/"
            },
            plugins: [
                new ExtractTextPlugin("css/client.bundle.css"),
                new CopyWebpackPlugin([
                    {
                        from: "wwwroot/favicon.ico",
                        to: "favicon.ico"
                    }
                ]),
                new CopyWebpackPlugin([
                    {
                        from: "404.html",
                        to: "404.html"
                    }
                ]),
                new MinifyPlugin(),
                new HtmlWebpackPlugin({template: "wwwroot/index.html"})
            ],
            stats: {
                children: false
            }
        }
    ]);
};