 

// 合并规则
const { merge } = require("webpack-merge");
// 导入基础配置
const { baseConfig } = require("./webpack.base.js");
// 错误提示插件
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = merge(baseConfig, {
  // 环境设置：开发环境
  mode: "development",
  // 便于开发调试 这里开启source-map模式
  devtool: "source-map",
  // webpack-dev-server 的一下配置，webpack-dev-server 会提供一个本地服务(serve)
  devServer: {
    // host
    host: "localhost",
    // 端口
    port: 3333,
    // 热更新
    hot: true,
    // 启动时打开浏览器
    open: true,
  },
  //压缩bubdle
  optimization: {
    minimize: false,
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ]
});
