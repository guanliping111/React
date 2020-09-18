module.exports = {
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /(.js|.jsx)$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        }
      ]
    }
}
// 解析jsx的功能 单独放出来