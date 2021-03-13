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
    filename: "commons.js",
    library: "commons"
  },

  plugins: [
    new webpack.DllPlugin({
      format: isDevEnv ? true : false,
      path: path.join(__dirname, "build", "commons-manifest.json"),
      name: "commons"
    })
  ]
};