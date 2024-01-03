module.exports = {
   cacheDirectory: true,
   cacheIdentifier: 'v9',
   presets: [
      [
         'babel-preset-cx-env',
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
