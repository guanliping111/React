module.exports = {
    module: {
        rules: [
            {
                test: /.css$/,
                use: path.resolve(__dirname, './css-loader.js')
            }
        ]
    }
}