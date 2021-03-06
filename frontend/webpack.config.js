const webpack = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: __dirname + "/public"
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    host: "0.0.0.0",
    port: 8080
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          //{
          //  loader: "babel-loader",
          //  options: {
          //    presets: ["@babel/preset-env"]
          //  }
          //},
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: "file-loader",
          options: { outputPath: "images" }
        }]
      },
      {
        test: /\.(scss|css)/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    //new WorkboxPlugin.GenerateSW({
    //  clientsClaim: true,
    //  skipWaiting: true
    //}),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      title: "Lords and Lands"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
};