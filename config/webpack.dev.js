const webpack = require('webpack'),
   { merge } = require('webpack-merge'),
   common = require('./webpack.config');

process.env.TAILWIND_MODE = 'watch';

module.exports = async () => {
   return merge(common({ tailwindOptions: {}, rootCssLoader: 'style-loader' }), {
      mode: 'development',

      plugins: [new webpack.HotModuleReplacementPlugin()],

      devtool: 'eval',

      devServer: {
         hot: true,
         port: 55443,
         noInfo: false,
         inline: true,
         historyApiFallback: true,
      },
   });
};
