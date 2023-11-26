//node script, node is just javascript p much

const path = require('path');

//entry -> output, module.exports is a node thing
module.exports = {
    entry: './src/playground/redux-101.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }, //loader below
    module: {
        //rules for when to run the module and what loader
        //the // means a regular expression, use is an array of loaders
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/, 
            use: [
                'style-loader',
                'babel-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    //creating a source map to help find errors and such
    //look at the webpack documentation to find all the tools
    devtool: 'eval-cheap-module-source-map',

    //dev-server is generating its own bundle.js file, replaces live server
    devServer: {
        static: path.join(__dirname, 'public'),
        historyApiFallback: true //makes it go from server side routing to client side and has the index.html do everything
    },
    mode: 'development'
};

