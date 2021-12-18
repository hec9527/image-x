const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const devPlugin = isDev
    ? [
          new webpack.ProgressPlugin(),
          new webpack.DefinePlugin({
              NODE_ENV: process.env.NODE_ENV,
          }),
      ]
    : [];

/**@type {import("webpack").Configuration} */
const config = {
    mode: isDev ? 'development' : 'production',

    entry: '/src/index.tsx',

    resolve: {
        alias: {
            '@public': path.join(process.cwd(), './public'),
            '@src': path.join(process.cwd(), './src'),
        },
        extensions: ['.ts', '.tsx', '.js'],
    },

    output: {
        clean: true,
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash:4].js',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                type: 'asset/resource',
            },
        ],
    },

    plugins: [
        ...devPlugin,
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        }),
    ],
};

module.exports = config;
