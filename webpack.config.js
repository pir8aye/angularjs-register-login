const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './app/js/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: false
    },
    module: {
        rules: [
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            },
            {
                use: 'raw-loader',
                test: /\.html$/
            },
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: 'json-loader',
                test: /\.json$/
            },
            {
                use: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.scss$/
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            test: /\.js($|\?)/i
        })
    ]
};