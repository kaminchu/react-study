module.exports = {
    entry: './src/javascripts/main.js',
    output: {
        path: __dirname,
        filename: './public/javascripts/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:{
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};