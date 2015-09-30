const path = require('path');
module.exports = {
    entry: [
        './src/component/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'focus-file.js',
        publicPath: '/dist/',
        libraryTarget: 'var',
        library: 'FocusFile'
    },
    loaders: [
        {
            test: /\.css$/,
            loader: 'style!css'
        }
    ],
    plugins: [],
    directory: path.join(__dirname, 'src'),
    port: 3000
};
