const path = require('path')

module.exports = {
    mode:'development',
    entry:'./app/dist/index.js',
    output:{
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    watch: true
}