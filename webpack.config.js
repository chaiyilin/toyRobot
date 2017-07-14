var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    //webpack
    //https://webpack.js.org/configuration/devtool/
    //https://github.com/webpack/webpack/issues/2145
    devtool: 'cheap-module-eval-source-map',
    entry: path.join(__dirname + '/src/index.js'),
    output: {
        path: path.join(__dirname + '/dist'),
        filename: "bundle-[hash].js"
    },
    //Loaders
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
        new HtmlWebpackPlugin({
            template: path.join(__dirname + "/src/index.tmpl.html"),
            favicon: 'favicon.ico'
        }),
        //new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8080',browser:'chrome' })
    ],
    //webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname + "/dist"),
        historyApiFallback: true,
        inline: true
    }
};