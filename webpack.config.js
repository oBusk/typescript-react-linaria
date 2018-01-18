'use strict';

const webpack = require('webpack');
const path = require('path');
const htmlPlugin = require('webpack-html-plugin');

module.exports = {
    devtool: "cheap-module-eval-source-map",

    watchOptions: {
        ignored: /(node_modules|\.cache)/,
    },

    entry: [
        path.join(__dirname, 'src/index.tsx'),
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },

    plugins: [
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
                    // {
                    //     loader: 'linaria/loader',
                    //     options: {
                    //         outDir: './node_modules/.cache/linaria-webpack',
                    //     }
                    // },
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
