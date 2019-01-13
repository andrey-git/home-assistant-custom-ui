const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

function createConfig(es5, prod) {
  const buildPath = 'build';

  const entry = {
    scripts: './src/entrypoints/scripts.js',
  };

  const babelOptions = {};

  babelOptions.presets =
  [
    es5 && [
      require('@babel/preset-env').default,
      { modules: false },
    ],
    require('@babel/preset-typescript').default,
  ].filter(Boolean);

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
          test: /\.js$|\.ts$/,
          use: {
            loader: 'babel-loader',
            options: babelOptions,
          },
        },
      ],
    },
    plugins,
    resolve: {
      extensions: ['.ts', '.js', '.json'],
    },
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
