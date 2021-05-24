//modified cx-env with support for jsx options
const cxEnv = require('./babel-preset-cx-env');

module.exports = {
   cacheDirectory: true,
   cacheIdentifier: 'v7',
   presets: [
      [
         cxEnv,
         {
            targets: {
               chrome: 60,
            },
            // corejs: 3,
            // useBuiltIns: 'usage',
            modules: false,
            loose: true,

            cx: {
               jsx: {
                  trimWhitespace: true,
               },
               imports: {
                  useSrc: true,
               },
            },
         },
      ],
   ],
   plugins: [],
};
