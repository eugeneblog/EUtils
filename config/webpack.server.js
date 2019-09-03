const path = require("path");

const config = {
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 5408
  }
};

module.exports = config;
