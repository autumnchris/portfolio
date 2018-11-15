const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.(jpg|png|svg|json|ttf|otf|eot|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use:['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
