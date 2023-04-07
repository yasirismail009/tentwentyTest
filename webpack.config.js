const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry:'./src/index.js',
    output:{
        path: path.join(__dirname, '/dist'),
        filename:'bundle.js'
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    module:{
        rules:[
            { test: /\.scss$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
            { test: /\.(sass|less|css)$/, use: [ "style-loader", "css-loader", "sass-loader" ] },
            {
                test:/.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react','@babel/preset-env']
                    },
                    
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
              },
        ]
    }
}