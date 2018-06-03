//entry point
//output the final bundle file
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env)=>{
    const isProduction = env === 'production';
    // const CSSExtract = new ExtractTextPlugin('styles.css');
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });
    return{
        entry: './src/app.js',
        output: {
            filename: 'bundle.js',
            path: path.join(__dirname,'public')
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
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname,'public'), //provide the public assets
            historyApiFallback: true  //tell the dev server that routing will be handled by client code
        }
    };
};


//loader: it lets you define what should 
//webpack do when it loads a file
//install babel-core and babel-loader


