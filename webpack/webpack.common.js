const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");

module.exports = (env) => {
    return merge([
        {
            module: {
                rules: [
                    {
                        exclude: /(node_modules|bower_components)/,
                        test: /\.(js|jsx)$/,
                        use: [
                            {
                                loader: "babel-loader",
                                options: {
                                    plugins: [
                                        "react-html-attrs", "transform-class-properties", "transform-decorators-legacy"
                                    ],
                                    presets: ["react", "env", "stage-0"]
                                }
                            }
                        ]
                    }, {
                        test: /\.(scss)$/,
                        use: ExtractTextPlugin.extract({
                            use: [
                                {
                                    loader: "css-loader",
                                    options: {
                                        minimize: true
                                    }
                                }, {
                                    loader: "sass-loader"
                                }
                            ]
                        })
                    }, {
                        test: /\.(css)$/,
                        use: ExtractTextPlugin.extract({
                            use: [
                                {
                                    loader: "css-loader",
                                    options: {
                                        minimize: true
                                    }
                                }
                            ]
                        })
                    }, {
                        loader: "html-loader",
                        test: /\.(html)$/
                    }, {
                        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
                        use: [
                            {
                                loader: "file-loader",
                                options: {
                                    name: "[name].[ext]",
                                    outputPath: "images/",
                                    publicPath: "/"
                                }
                            }
                        ]
                    }, {
                        test: /\.(woff|woff2|eot|otf|ttf)$/,
                        use: [
                            {
                                loader: "file-loader",
                                options: {
                                    name: "[name].[ext]",
                                    outputPath: "fonts/",
                                    publicPath: "/"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    ]);
}
