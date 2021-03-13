const webpack = require("webpack");
const path = require("path");
const isDevEnv = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDevEnv ? "development" : "production",
  entry: {
    vendors: ["react"]
  },

  output: {
    path: path.join(__dirname, "build"),
    filename: "common.js",
    publicPath: "/",
    library: "Common"
  },

  plugins: [
    new webpack.DllPlugin({
      format: isDevEnv ? true : false,
      context: __dirname,
      path: path.join(__dirname, "build", "manifest.json")
    })
  ]
};