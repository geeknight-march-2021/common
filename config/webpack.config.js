const webpack = require("webpack");
const path = require("path");
const isDevEnv = process.env.NODE_ENV === "development";
const paths = require('./paths');

module.exports = function() {
  return {
    mode: isDevEnv ? "development" : "production",
    entry: {
      commons: ["react", "react-dom", "@material-ui/core"]
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