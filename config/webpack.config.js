const webpack = require("webpack");
const path = require("path");
const isDevEnv = process.env.NODE_ENV === "development";
const paths = require('./paths');
const commons = require('./commons');

module.exports = function() {
  return {
    mode: isDevEnv ? "development" : "production",
    entry: {
      commons: commons
    },

    output: {
      path: path.join(paths.appBuild),
      filename: "[name].js",
      library: "[name]"
    },
    plugins: [
      new webpack.DllPlugin({
        format: isDevEnv ? true : false,
        context: __dirname,
        path: path.join(paths.appBuild, "[name]-manifest.json")
      })
    ]
  }
};