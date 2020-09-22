const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootWebpackConfig = require('../../webpack.config');

module.exports = {
  ...rootWebpackConfig,
  entry: {
    main: require.resolve('./src/index.ts'),
  },
  output: {
    path: path.join(__dirname, 'build', 'cjs'),
    libraryTarget: 'commonjs',
  },
  plugins: [...rootWebpackConfig.plugins, new HtmlWebpackPlugin({ title: 'Sample Monorepo App' })],
};
