const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode:'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react','@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use:[
            { loader: "style-loader" },
            { loader: "css-loader",
                query:{
                    modules:true
                }
             }
        ]
      }
    ]
  }
};

