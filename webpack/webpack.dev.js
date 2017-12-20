const Webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = (env) => {
    return merge([
        {
            context: __dirname + "/../",
            devServer: {
                contentBase: "./dist",
                historyApiFallback: true
            },
            devtool: "cheap-module-source-map",
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
                path: __dirname + "/../dist/",
                publicPath: "/"
            },
            plugins: [
                new ExtractTextPlugin("css/[name].[chunkhash].css"),
                new CopyWebpackPlugin([
                    {
                        from: "wwwroot/favicon.ico",
                        to: "favicon.ico"
                    }
                ]),
                new Webpack.ProvidePlugin({
                    "window.jQuery": "jquery", //For bootstrap
                    $: "jquery",
                    jQuery: "jquery",
                    Popper: ["popper.js", "default"]
                }),
                new Webpack.HashedModuleIdsPlugin(),
                new Webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
                new Webpack.optimize.CommonsChunkPlugin({name: "manifest"}),
                new CleanWebpackPlugin(["dist"], {root: "D:/User Files/Documents/Projects/Coding/Web JS/Web Technology Web App"}),
                new HtmlWebpackPlugin({template: "wwwroot/index-dev.html"})
            ],
            stats: {
                children: false
            }
        }
    ]);
};