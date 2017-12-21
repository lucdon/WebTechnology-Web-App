const Webpack = require("webpack");
const merge = require("webpack-merge");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = (env) => {
    return merge([
        {
            context: __dirname + "/../",
            entry: {
                client: "./webpack/webpack.entry.js",
                vendor: [
                    "react",
                    "react-dom",
                    "react-redux",
                    "react-router-dom",
                    "react-router-redux",
                    "axios",
                    "redux",
                    "redux-thunk",
                    "redux-logger",
                    "redux-promise-middleware",
                    "jquery",
                    "bootstrap",
                    "popper.js",
                    "react-bootstrap",
                    "react-datepicker",
                    "react-responsive-modal",
                    "react-bootstrap-time-picker"
                ]
            },
            output: {
                filename: "js/[name].[chunkhash].js",
                path: __dirname + "/../../WebTech-Website-Deploy/WebTech-Webapp-Deploy/"
            },
            plugins: [
                new Webpack.ProvidePlugin({
                    "window.jQuery": "jquery", //For bootstrap
                    $: "jquery",
                    jQuery: "jquery",
                    Popper: ["popper.js", "default"]
                }),
                new ExtractTextPlugin("css/[name].[chunkhash].css"),
                new CopyWebpackPlugin([
                    {
                        from: "wwwroot/favicon.ico",
                        to: "favicon.ico"
                    }
                ]),
                new Webpack.EnvironmentPlugin({
                    NODE_ENV: 'production',
                    }),
                new Webpack.HashedModuleIdsPlugin(),
                new Webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
                new Webpack.optimize.CommonsChunkPlugin({name: "manifest"}),
                new CopyWebpackPlugin([
                    {
                        from: "wwwroot/404.html",
                        to: "404.html"
                    }
                ]),
                new MinifyPlugin(),
                new HtmlWebpackPlugin({template: "wwwroot/index.html", filename: 'index.html'})
            ],
            stats: {
                children: false
            }
        }
    ]);
};