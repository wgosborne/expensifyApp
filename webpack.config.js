//node script, node is just javascript p much

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//process.env.NODE_ENV //global variable that stores the environment currently in
//heroku sets it

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test'});
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development'});
}


//entry -> output, module.exports is a node thing
module.exports = (env) => {

    const isProduction = env.production === true;
    console.log('env', env);
    console.log(isProduction);

    //const CSSExtract = new MiniCssExtractPlugin('styles.css')

    return {
        entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
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
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: 'styles.css'})
    ],
    //creating a source map to help find errors and such
    //look at the webpack documentation to find all the tools
    devtool: isProduction ? 'source-map' : 'inline-source-map',

    //dev-server is generating its own bundle.js file, replaces live server
    devServer: {
        static: path.join(__dirname, 'public'),
        historyApiFallback: true, //makes it go from server side routing to client side and has the index.html do everything

    },
    mode: 'development'
    }
};

