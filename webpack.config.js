const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
__webpack_base_uri__ = 'http://localhost:8080';
console.log('WEBPACK.CONFIG GELADEN. path:', path)

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: { main: './src/main.ts' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'dist'),
    // },
    disableHostCheck: true
  },
  plugins: [htmlPlugin],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
};