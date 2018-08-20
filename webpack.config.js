
var path = require('path');
const webpack = require('webpack');
module.exports = {
  // entry: './src/app.js',
  // devtool: '#source-map',
  // output: {
  //   path: path.join(__dirname, 'build'),
  //   filename: 'app.bundle.js',
  //   publicPath: '/build/'
  // },
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/app.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  devServer: {
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port:9999
  }, 
  // mode: 'development',
  module: {
    rules: [
        {
            test: /(\.jsx|\.js)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            }
        },
        {
          test: /\.css$/,
          use: [
              {
                  loader: "style-loader"
              }, {
                  loader: "css-loader",
                  options: {
                      modules: true, // 指定启用css modules
                      localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                  }
              }
          ]
        },
        {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {}
          }
        ]
      },
    
      // {
      //   test: /\.(js|jsx|mjs)$/,
      //   exclude: [
      //     /node_modules/,
      //   ],
      //   include: path.join(__dirname, 'src'),
      //   loader: require.resolve('babel-loader'),
      //   options:{
      //     plugins:[
      //       ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
      //     ],
      //     cacheDirectory: true
      //   },
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true,
      //         modules: true
      //       }
      //     },
      //   ]
      // },
      // {
      //   test: /\.(scss|sass)$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true
      //       }
      //     },
      //     {
      //       loader: 'sass-loader',
      //       options: {
      //         sourceMap: true
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true
      //       }
      //     },
      //     {
      //       loader: 'less-loader',
      //       options: {}
      //     }
      //   ]
      // },
    ],
   
  }
};