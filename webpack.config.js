// webpack.config.js (only if you've ejected or customized Webpack)

module.exports = {
  devServer: {
    host: "0.0.0.0", // Allow any host to connect
    allowedHosts: "all", // Accept any host header
    port: process.env.PORT || 3000, // Dynamically use the correct port
    // other settings...
  },
};
