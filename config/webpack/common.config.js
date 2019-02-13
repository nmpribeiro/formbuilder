const path = require('path');
const statements = require('tsx-control-statements').default;

module.exports = {
    entry: [path.resolve(__dirname, '../../src/index.ts')],
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    failOnHint: true,
                    getCustomTransformers: () => ({ before: [statements()] })
                }
            },
            {
                test: /\.tsx?$/,
                loaders: [
                    'awesome-typescript-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.html?$/,
                loaders: [
                    'html-loader',
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
};
