var path = require('path')

var config = {
  entry: {
    main: './js/main.js',
    ratefinder: './js/ratefinder.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }

    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};


module.exports = config;

