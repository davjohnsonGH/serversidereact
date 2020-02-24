const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform webpack that we are building a bundle for node, rather than in the browser.
    target: 'node',
    // Tell webpack the root file of our application.
    entry: './src/index.js',
    //Tell webpack where to put the output file that is generated from src/index.js.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [ webpackNodeExternals() ]
};

module.exports = merge(baseConfig, config);
