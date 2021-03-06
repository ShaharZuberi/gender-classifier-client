var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8080
   },
    devtool:'source-map',
    module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
          {
              test: /\.less$/,
              use: ['style-loader','css-loader',"less-loader"]
          },
          {
              test: /\.css$/,
              use: ['style-loader','css-loader']
          }
      ]
   }
}
module.exports = config;