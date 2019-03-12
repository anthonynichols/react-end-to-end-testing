import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

let config: webpack.Configuration = {};

config.mode = 'development';
config.devtool = 'eval';

config.entry = path.resolve('src/render.tsx');
config.output = {
    filename: 'bundle.js',
    path: path.resolve('dev'),
};

config.resolve = {
    // alias: {
    //     'react-dom': '@hot-loader/react-dom',
    // },
    extensions: ['.js', '.scss', '.ts', '.tsx'],
    modules: ['node_modules', path.resolve('src')],
};

config.module = {
    rules: [
        {
            test: /\.(j|t)s(x?)$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        plugins: [
                            ['@babel/plugin-proposal-class-properties', {loose: true}],
                            'react-hot-loader/babel',
                        ],
                        presets: [
                            '@babel/preset-typescript',
                            '@babel/preset-react',
                        ],
                    },
                },
            ],
        },
        {
            test: /\.css$/,
            include: [
                path.resolve('node_modules'),
            ],
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
            ],
        },
    ],
};

config.plugins = [
    new webpack.NamedModulesPlugin(),

    new HtmlWebpackPlugin({
        hash: true,
        template: path.resolve('src/index.html'),
    }),
];

config.devServer = {
    contentBase: path.resolve('src/assets'),
    historyApiFallback: true,
};

export default config;
