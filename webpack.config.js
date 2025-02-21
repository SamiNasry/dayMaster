const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Use your src/index.html as the template
      filename: 'index.html',       // Output it to dist/index.html
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve from dist/
    },
    compress: true,
    port: 8080,
    open: true, // Automatically open the browser
  },
  mode: 'development',
};