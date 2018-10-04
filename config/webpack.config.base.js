const webpack = require("webpack");
const path = require("path");

module.exports = {
  resolve: {
    alias: {
      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      "react-native": "react-native-web",
      "vibe-ui-core": path.resolve(__dirname, "../src/components")
    }
  }
};
