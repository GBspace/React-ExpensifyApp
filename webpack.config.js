//entry point
//output the final bundle file
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'; 

if(process.env.NODE_ENV === 'test') {
    require('dotenv').config({path: '.env.test'});
}else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({path: '.env.development'});
}


module.exports = (env)=>{
    const isProduction = env === 'production';
    // const CSSExtract = new ExtractTextPlugin('styles.css');
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });
    return{
        entry: './src/app.js',
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname,'public','dist')
        },
    
        module: {
            rules: [{
                loader: 'babel-loader',  //teach webpack how to execute loader
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
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
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname,'public'), //provide the public assets
            historyApiFallback: true,  //tell the dev server that routing will be handled by client code
            publicPath: '/dist/'
        }
    };
};


//loader: it lets you define what should 
//webpack do when it loads a file
//install babel-core and babel-loader


