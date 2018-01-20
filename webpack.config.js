'use strict';

const webpack = require('webpack');
const path = require('path');
const htmlPlugin = require('webpack-html-plugin');

module.exports = {
    devtool: "cheap-module-eval-source-map",

    watchOptions: {
        ignored: /(node_modules|\.cache|dist)/,
    },

    entry: [
        'babel-polyfill',
        path.join(__dirname, 'src/index.tsx'),
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },

    plugins: [
        // Needed to stop webpack-dev-server from triggering ~10 times on first run.
        // For some reason `watchOptions.ignored` does not seem to work.
        new webpack.WatchIgnorePlugin([ //
            /node_modules/,
            /\.cache/,
            /dist/,
        ]),

        new htmlPlugin({ inject: true }),
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'linaria/loader',
                        options: {
                            outDir: '.cache/linaria-webpack',
                        }
                    },
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            useBabel: true,
                            useCache: true,
                            cacheDirectory: '.cache/awesome-typescript-loader',
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
};
