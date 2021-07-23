module.exports = {
    productionSourceMap: false,
    pages: {
        car_bind: {
            entry: './src/pages/get_dog/main.js',
            template: './public/index.html',
            filename: 'get_dog.html',
            title: '获得小狗',
        }
    },
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
                prependData: `@import "@/style/variables.scss";` 
                
            }
        }
    }
}
