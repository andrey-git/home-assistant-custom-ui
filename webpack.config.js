const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function createConfig(es5, prod) {
  const buildPath = 'build';

  const entry = {
    scripts: './src/entrypoints/scripts.js',
  };

  const babelOptions = {};

  babelOptions.presets =
  es5 ? [
    ['es2015', { modules: false }],
  ] : [
    ['env', {
      targets: {
        chrome: 55,
        firefox: 47,
        edge: 14,
        safari: 10,
      },
      modules: false,
    }],
  ];

  const plugins = prod ?
    [new UglifyJsPlugin({
      extractComments: true,
      sourceMap: true,
      uglifyOptions: {
        // Disabling because it broke output
        mangle: false,
      },
    }),
    ] : [];

  return {
    mode: prod ? 'production' : 'development',
    devtool: prod ? 'source-map ' : 'inline-source-map',
    entry,
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: babelOptions,
          },
        },
      ],
    },
    plugins,
    output: {
      filename: `[name]${prod ? '' : '-dbg'}${es5 ? '-es5' : ''}.js`,
      path: path.resolve(__dirname, buildPath),
    },
  };
}

const configs = [
  createConfig(/* es5= */true, /* prod= */true),
  createConfig(/* es5= */false, /* prod= */true),
  createConfig(/* es5= */true, /* prod= */false),
  createConfig(/* es5= */false, /* prod= */false),
];
module.exports = configs;
