const path = require('path');
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "zuri",
    projectName: "zuri-plugin-chessboard",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    context: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, "src", "zuri-zuri-plugin-chessboard.js"),
    resolve: {    
      modules: [
        /* assuming that one up is where your node_modules sit,
           relative to the currently executing script
        */
        path.join(__dirname, '../node_modules')
      ]
    },
    stats: {
      errorDetails: true,
      errorStack: true,
      reasons: true,
    },
  });
};
