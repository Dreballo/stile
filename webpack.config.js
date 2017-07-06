module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname + '/public',
        filename: `bundle.js`
    },

    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: false
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader','babel-loader']

            }
        ]
    }
};