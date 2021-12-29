const path = require('path')
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8443',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    lintOnSave: false,
}