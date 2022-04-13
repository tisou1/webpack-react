

const path = require("path");
// 根据相对路径获取绝对路径
const resolvePath = (relativePath) => path.resolve(__dirname, relativePath);
// HTML模板
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 //进度条
const WebpackBar = require('webpackbar')
// 基础配置
const baseConfig = {
  // 入口文件
  entry: resolvePath("../src/index.tsx"),
  // 出口文件
  output: {
    path: resolvePath("../dist"),
    filename: "[name].[contenthash].js",
    clean: true, //打包之前清空dist目录
  },
  resolve: {
    extensions: ['.js','.ts','.jsx','.tsx'],
    alias: {
      '@': resolvePath('../src')
    }
  },

  module: {
    rules: [
      //css处理
      {
        test: /\.(css|scss|sass)$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader',  'sass-loader'],
      },
      //ts,tsx文件
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      //静态资源
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset/resource',
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weboack5 + React',
      template: resolvePath('../public/index.html'),
      filename: 'index.html',//可省略默认就为 index.htmk
      hash: true, //引入的js css文件添加hash结尾
    }),
    new MiniCssExtractPlugin({
      filename: `[name].[contenthash:6].css`,
    }),
    new WebpackBar({
      color: "#85d",  // 默认green，进度条颜色支持HEX
      basic: false,   // 默认true，启用一个简单的日志报告器
      profile:false,  // 默认false，启用探查器。
    })
  ]
};
module.exports = {
  baseConfig,
};
