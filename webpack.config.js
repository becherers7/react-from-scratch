const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
  mode: 'development',
  entry: {
    print: ['./src/print.js', hotMiddlewareScript],
    app: ['./src/index.js', hotMiddlewareScript],
  },
  //use source maps, maps compiled code back into it's original source code.
  devtool: 'inline-source-map',
  //This tells webpack-dev-server to serve the files from the dist directory on localhost:8080
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    //clean the dist folder after each time we run.
     new CleanWebpackPlugin(),
     //creates an index.html file for us in dist. this way if we rename an entry it will rename it for us
     new HtmlWebpackPlugin({
       template: 'src/public/index.html',
       // title: 'Output Management'
     }),
     //following two are for hot replacement over node server.
     new webpack.HotModuleReplacementPlugin,
     new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    //dynamically create bundle file names from webpack.
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
     rules: [
       //handle jsx and js compilation
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
       //handle styling processing
        {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
        },
       //handle image loading
        {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
        },
       //handle font loading
        {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
        }
     ]
   }
};
