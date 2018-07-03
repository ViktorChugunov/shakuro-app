
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var path = require("path");

module.exports = {
  entry: ['./src/index.js', 
          './src/index.pug',
          './src/styles/style.scss'
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'     
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
            "style-loader",
            //MiniCssExtractPlugin.loader,
            "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          //MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      { 
        test: /\.html\.haml$/,
        loader: "haml-loader"
      },
      {
        test: /\.pug/,
        loaders: [
            'html-loader',
            'pug-html-loader'
        ]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'url-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    //compress: true,
    stats: "errors-only",
    open: true
  },
  plugins: [
    /*
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),*/
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: 'index.html'
    }),
  ]
};