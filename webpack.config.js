const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode : process.env.NODE_ENV,
  devServer: {
    publicPath: 'http://localhost:8080/', 
    proxy: {
        '/': 'http://localhost:3000/' 
    }
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react']
            }
        },
        exclude: /node_modules/
      },
      
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
            loader: "file-loader",
            options: {
                regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.png$/i,
                esModule: false,
                name: '[path][name].[ext]'
            }
            }]
        },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
    }),
  ],
}