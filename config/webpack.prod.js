const webpack = require('webpack'),
   MiniCssExtractPlugin = require('mini-css-extract-plugin'),
   { CleanWebpackPlugin } = require('clean-webpack-plugin'),
   { merge } = require('webpack-merge'),
   common = require('./webpack.config'),
   path = require('path'),
   p = (p) => path.join(__dirname, '../', p || ''),
   CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common({ rootCssLoader: MiniCssExtractPlugin.loader }), {
   mode: 'production',

   output: {
      path: p('../server/DreamBig.WebApi/wwwroot/desktop'),
      publicPath: '/desktop/',
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
      hashDigestLength: 6,
   },

   optimization: {
      minimizer: [
         `...`, //keep the default plugins
         new CssMinimizerPlugin(),
      ],
      concatenateModules: true,
      minimize: true,
   },

   plugins: [
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css',
         chunkFilename: '[name].[contenthash].css',
      }),
      new CleanWebpackPlugin({
         dry: false,
         dangerouslyAllowCleanPatternsOutsideProject: true,
      }),
   ],
});
