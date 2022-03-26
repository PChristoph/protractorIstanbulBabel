const path = require('path');
console.log('WEBPACK.CONFIG GELADEN. path:', path)

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
  },
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