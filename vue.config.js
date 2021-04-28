module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'https://dog.ceo',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/styles/variables.scss";` 
                
            }
        }
    }
}
