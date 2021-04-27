module.exports = {
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'https://www.baidu.com', //API服务器的地址
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