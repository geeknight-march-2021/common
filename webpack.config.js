const webpack = require("webpack");
const path = require("path");
const isDevEnv = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDevEnv ? "development" : "production",
  entry: {
    commons: ["react", "react-dom", "@material-ui/core"]
  },

  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
    library: "[name]_[fullhash]"
  },

  plugins: [
    new webpack.DllPlugin({
      format: isDevEnv ? true : false,
      path: path.join(__dirname, "build", "[name]-manifest.json"),
      name: "[name]_[fullhash]"
    })
  ]
};