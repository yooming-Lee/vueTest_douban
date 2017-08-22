const path = require('path') // node路径模块
const webpack = require('webpack') // webpack模块
const ExtractTextPlugin = require('extract-text-webpack-plugin') // 独立打包css模块
const HtmlWebpackPlugin = require('html-webpack-plugin') // html模板模块
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // 压缩css模块【注意：如果没有使用style-loader将css打包到js(在js中引入了的css)中，所以(webpack.optimize.UglifyJsPlugin)插件的压缩本身对独立的css不管用，所以需要使用该插件，如果已经将css都引入到了js中，则必须要此插件】

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({
      //     //加载css-loader、postcss-loader（编译顺序从下往上）转译css
      //     use: [{
      //         loader: 'style-loader'
      //       }, {
      //         loader: 'css-loader?importLoaders=1'
      //       },
      //       {
      //         loader: 'postcss-loader',
      //         options: {
      //           plugins: function () { //从postcss插件autoprefixer 添加css3前缀;
      //             return [ //加载autoprefixer并配置前缀,可加载更多postcss插件;
      //               require('autoprefixer')({
      //                 browsers: 'last 2 versions'
      //               })
      //             ]
      //           }
      //         }
      //       }
      //     ],
      //     fallback: 'vue-style-loader'
      //   })
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: [' ', '.css', '.js', '.json', '.vue'], //设置可省略文件后缀名(注:如果有文件没有后缀设置‘’会在编译时会报错,必须改成' '中间加个空格
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    proxy: { // 配置代理实现跨域，否则axios无法跨域
      '/api': {
        target: 'https://api.douban.com/v2',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ //webpack内置js压缩插件;
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new HtmlWebpackPlugin({ // 模板插件
      filename: 'index.html', // 设置打包生成的文件名
      template: 'index.html', // 设置原文件 --- 模板路径
      inject: true // js插入到html文件的位置 --- 可以设置为body
    }),
    new ExtractTextPlugin({ // 独立打包css文件
      filename: 'css/[name].css?v=[hash]' // 设置打包生成后的路径及文件名
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g, //正则匹配后缀.css文件;
      cssProcessor: require('cssnano'), //加载‘cssnano’css优化插件;
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      }, //插件设置,删除所有注释;
      canPrint: true //设置是否可以向控制台打日志,默认为true;
    })
  ])
}