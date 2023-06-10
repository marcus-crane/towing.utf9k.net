module.exports = {
    mode: 'development',
    entry: {
        app: './app.js',
    },
    output: {
        library: 'App'
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: 'esbuild-loader',
                exclude: [/node_modules/],
                options: {
                    target: 'es2015',
                    presets: ['@babel/preset-react']
                }
            }
        ]
    }
}