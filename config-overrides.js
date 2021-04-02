const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
        '@components': path.resolve(__dirname, './src/view/components'),
        '@pages': path.resolve(__dirname, './src/view/pages'),
        '@slice': path.resolve(__dirname, './src/state/slice'),
        '@store': path.resolve(__dirname, './src/state/store.js'),
        '@utils': path.resolve(__dirname, './src/utils')
    })
);