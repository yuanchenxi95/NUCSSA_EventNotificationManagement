const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require ('webpack');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const rootPath =  path.resolve(path.dirname("./"));
const distPath = path.resolve(rootPath, "./dist");
const srcPath = path.resolve(rootPath, "./src");
const entryPath = path.resolve(rootPath, "./src/index.js");
const assetsPath = path.resolve(rootPath, "./src/assets");
require("babel-polyfill");


module.exports = {
    entry: [
        'babel-polyfill',
        entryPath
    ],
    output: {
        path: distPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', "react", "stage-2"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 25000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'fonts/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: {
            src: srcPath
        },
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin([distPath], {
            root: rootPath,
            verbose: true,
            dry: false
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new CopyWebpackPlugin([
            { from: assetsPath }
        ])
    ]
};