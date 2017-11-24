var path = require('path');

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
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: 'raw-loader',
                test: /\.html$/
            },
            {
                use: 'json-loader',
                test: /\.json$/
            }
        ]
    }
};