var path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: 'bundle.js'
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