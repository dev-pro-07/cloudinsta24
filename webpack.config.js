// webpack.config.js
module.exports = {
  devServer: {
    host: "0.0.0.0", // Allows connections from any host
    allowedHosts: "all", // Accept all incoming host headers
    //   port: 3000,           // Make sure you're using the right port (default is 3000)
    // Other dev server settings you may have
  },
  // Other Webpack configurations...
};
