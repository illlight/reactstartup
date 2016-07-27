var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV || 'dev';
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var appName = 'app';
var host = '0.0.0.0';
var port = '80';

var plugins = [];

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({minimize: true}));
}

/*plugins.push(new webpack.ProvidePlugin({
 $: 'jquery',
 jQuery: 'jquery'
 }));*/
/*plugins.push(
 new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity)
 );*/
var config = {
    entry: {
        app: [
            path.resolve(__dirname, 'src/index.jsx')
        ]
    },
    devtool: 'source-map',
    output: {
        path: __dirname + '/example/lib',
        filename: '[name].js',
        publicPath: 'http://' + host + ':' + port
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: "eslint-loader",
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js', '.jsx']
    },
    plugins: plugins,
    externals: {
        'jquery': 'window.$',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter'
    }

};


new WebpackDevServer(webpack(config), {
    contentBase: './example',
    hot: true,
    debug: true
}).listen(port, host, function (err, result) {
    if (err) {
        console.log(err);
    }
});
console.log('-------------------------');
console.log('Local web server runs at http://' + host + ':' + port);
console.log('-------------------------');

module.exports = config;
