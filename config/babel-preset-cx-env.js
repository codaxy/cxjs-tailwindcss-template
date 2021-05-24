const transformCxJsx = require('./babel-plugin-transform-cx-jsx');

module.exports = function (context) {
   var opts = arguments[1] || {
      modules: false,
   };

   //var pragma = opts.pragma || 'VDOM.createElement';
   var cx = opts.cx || {};
   var imports = typeof cx.imports == 'undefined' ? true : cx.imports;
   var plugins = [];

   plugins.push(
      '@babel/proposal-class-properties',
      //'@babel/proposal-object-rest-spread',
      '@babel/proposal-function-bind',
      [transformCxJsx, cx.jsx],
      '@babel/transform-parameters',
      '@babel/syntax-dynamic-import',
      [
         '@babel/transform-react-jsx',
         {
            runtime: 'automatic',
         },
      ]
   );

   if (imports !== false) {
      if (typeof imports == 'object') plugins.push(['transform-cx-imports', imports]);
      else plugins.push('transform-cx-imports');
   }

   delete opts.cx;

   return {
      presets: [['@babel/preset-env', opts]],
      plugins: plugins,
   };
};
