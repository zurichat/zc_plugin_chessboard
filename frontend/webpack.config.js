const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

const mergeRules = {
  devServer: {
    static: {
      directory: "replace",
    },
  },

  module: {
    rules: {
      test: "match",
      include: "replace",
      exclude: "replace",
      use: "replace",
    },
  },
};

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "zuri",
    projectName: "zuri-plugin-chessboard",
    webpackConfigEnv,
    argv,
  });

  return mergeWithRules(mergeRules)(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output: {
      path: path.join(__dirname, "dist"), // string (default)
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: "[local]--[hash:base64:5]__[name]",
                },
              },
            },
          ],
        },
      ],
    },
  });
};
