// entry point of application -> final output loc
// config change --watch does not work
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output:{
        path: path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    // sets rules (conditions, results and nested Rules)
    // runs babel everytime seeing a js file
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
         }]
    },
    devtool: 'cheap-module-eval-source-map',
    // devserver makes bundle.js in live server, no physical one, makes running faster
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};


