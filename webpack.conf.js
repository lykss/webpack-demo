module.exports = {
  entry: {
    app: './app.js',
    tapp: './tapp.ts'
  },
  output: {
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  }
}