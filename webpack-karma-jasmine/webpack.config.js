var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var glob = require('glob');

module.exports = {
  entry: [
    './src/app.js', 
    './spec/SpecHelper.js',
    './spec/PlayerSpec.js',
  ],
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  module: {
    rules: [
    ]
  },

  target: "web",

  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')], {
        verbose: true,
        dry: false
    }),

    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './SpecRunner.html',
        inject: 'body',
    }),
  ],
};
