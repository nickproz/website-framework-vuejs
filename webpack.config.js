const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')

const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/main.js']
  },

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
    publicPath: '/'
  },

  devServer: {
    contentBase: './dist',
    // Falls back to history hash mode if it is turned off
    historyApiFallback: true,
    // Hot reloading
    hot: true,
    // This is necessary to allow connections to local instance via IP address (for mobile testing)
    host: '0.0.0.0',
    // Port
    port: 3000
  },

  devtool: '#eval-source-map',

  resolve: {
    // Allows you to leave off these extensions when importing files
    extensions: ['.js', '.vue', '.json', '.less'],
    // Allows you to create aliases to import or require certain modules more easily
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // Quick way to access the root directory
      '@': `${__dirname}/src`
    }
  },

  module: {
    rules: [
      /**
       * This rule is our our eslinter
       */
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: ['./src'],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      /**
       * This rule parses and builds Vue files
       */
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: !DEBUG,
          loaders: {
            js: 'babel-loader!eslint-loader'
          }
        }
      },
      /**
       * This rule parses JS files and supports ES6
       */
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: ['./src']
      },
      /**
       * This rule parses image file imports (with support for the extensions in the test regex.
       * For files that are less than the `limit` in bytes, it converts them to a `data:` url.
       * Otherwise, it just acts like the `file-loader`. That means, it copies the file to `dist`
       * and updates the reference to the appropriate URL
       */
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      /**
       * This rule parses video file imports and acts the same as the image rule
       */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:7].[ext]'
        }
      },
      /**
       * This rule parses font file imports and acts the same as the image rule
       */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      },
      /**
       * This rule parses css files
       */
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [

    new ExtractTextPlugin('style.css'),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),

    new webpack.HotModuleReplacementPlugin(),

    new FriendlyErrorsPlugin()
  ]
}

// Production settings
if (!DEBUG) {
  module.exports.devtool = '#source-map'

  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([

    // Uglify our javascript
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),

    // Minimize our loader code output
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
