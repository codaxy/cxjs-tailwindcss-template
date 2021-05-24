const webpack = require('webpack'),
   { merge } = require('webpack-merge'),
   common = require('./webpack.config'),
   //devcert = require('devcert'),
   devCerts = require('office-addin-dev-certs');

process.env.TAILWIND_MODE = 'watch';

module.exports = async () => {
   //devcert requires OpenSSL to be installed.
   //let ssl = await devcert.certificateFor('localhost');

   //office-addin-dev-certs works only on Windows, but doesn't depend on any other tool.
   let ssl = await devCerts.getHttpsServerOptions();

   return merge(common({ tailwindOptions: {}, rootCssLoader: 'style-loader' }), {
      mode: 'development',

      plugins: [new webpack.HotModuleReplacementPlugin()],

      devtool: 'eval',

      output: {
         publicPath: 'https://localhost:52806/',
      },

      devServer: {
         hot: true,
         port: 52806,
         noInfo: false,
         inline: true,
         historyApiFallback: true,
         https: true,
         ...ssl,
         headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
         },
      },
   });
};
