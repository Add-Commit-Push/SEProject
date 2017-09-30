const ExtractTextlugin = require('extract-text-webpack-plugin');

module.exports={
  entry:'./src/renderer.js',
  output:{
    filename:'./build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query:{
          presets:['react','es2015']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextlugin.extract({
          fallback:"style-loader",
          use:"css-loader"})
      }
    ]
  },
  plugins: [
    new ExtractTextlugin("[name].css")
  ]
}
