const webpack = require("webpack");
const path = require("path");
const isDevEnv = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDevEnv ? "development" : "production",
  entry: {
    vendors: ["react", "react-dom", "@material-ui/core"]
  },

  output: {
    path: path.join(__dirname, "build"),
    filename: "commons.js",
    publicPath: "/",
    library: "Commons"
  },

  plugins: [
    new webpack.DllPlugin({
      format: isDevEnv ? true : false,
      context: __dirname,
      path: path.join(__dirname, "build", "manifest.json")
    })
  ]
};