const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const dev = require("./webpack.dev.js");
const prod = require("./webpack.prod.js");

module.exports = (env) => {
    const commonConfig = common(env);
    if(env.NODE_ENV !== 'production') {
        console.log("building development");
        const devConfig = dev(env);
        return merge(commonConfig, devConfig);
    } else {
        console.log("building production");
        const prodConfig = prod(env);
        return merge(commonConfig, prodConfig);
    }
}