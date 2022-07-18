const glob = require("glob");
const PAGE_PATH = './src/pages';
const path = require('path');
const contentBase = process.cwd();

//  首先得到包含pages文件夹里面符合条件的路径数组
let entryHtml = glob.sync(PAGE_PATH + '/*/*.html');

//  pages就是vue.config.js里面pages选项的值，是一个对象
let pages = {};

//  遍历得到的路径数组，从字符串中分割出需要的页面名字
entryHtml.forEach((filePath) => {
  let fileName = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
  pages[fileName] = {
    entry: `src/pages/${fileName}/${fileName}.js`,
    favicon: "./src/assets/favicon.ico",
    template: `src/pages/${fileName}/${fileName}.html`,
    filename: `${process.env.VUE_APP_ENV == "dev" ? "./" : "../server/"}${fileName}.html`
  }
});
module.exports = {
    lintOnSave: false,
    outputDir: "dist/client",
    filenameHashing: process.env.NODE_ENV == 'production' ? true : false,
    pages: pages,
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    css: {
        extract: false,
    },
    devServer: {
        disableHostCheck: true,
        port: 80,
        proxy: {
            //后期进入测试环境调试用
            '/cps': {
                // target: config[[env].target, // 'http://js.pre.meixincdn.com'
                // target: env.dev, // 'http://js.pre.meixincdn.com'
                // target: env, // ''
                // target: 'http://gm-club.test.atguat.com.cn:8590',
                target: 'http://erm-union.atguat.com.cn:8590',
                // target: 'localhost',
                changeOrigin: true,
                secure: false,
                pathRewrite: function (path, req) {
                    // console.log(req,222)
                    // let a= path.replace('http://gm-club.atguat.com.cn','localhost' )
                    // console.log(a)
                    return path; 

                }
            },
            '/live': {
                target:"http://live.atguat.com.cn/",
                changeOrigin:true,
                secure: false,
                pathRewrite: function(path, req){
                    return path;
                }
            },
            '/api': {
                target:"http://gfs.ds.gfsuat.com.cn",
                changeOrigin:true,
                secure: false,
                pathRewrite: function(path, req){
                    return path;
                }
            },
            '/activity': {
                target: "http://sai.gomeuat.com.cn/",
                changeOrigin: true,
                secure: false,
                pathRewrite: function (path, req) {
                    return path;
                }
            },
            '/mapi': {
                target: "http://etm.m.gomeuat.com.cn/",
                changeOrigin: true,
                secure: false,
                pathRewrite: function (path, req) {
                    return path;
                }
            },
            '/papi': {
                target: "http://etm.gomeuat.com.cn/",
                // target: "http://10.2.187.221:7006/",  //张晨晨
                changeOrigin: true,
                secure: false,
                pathRewrite: function (path, req) {
                    return path;
                },
                // pathRewrite: {
                //     '/papi': ''
                // }
            },
            '/admin': {
                target: "http://etm.gomeuat.com.cn/",
                changeOrigin: true,
                secure: false,
                pathRewrite: function (path, req) {
                    return path;
                }
            },
            '/pc': {
                target: "http://mobile.gomeuat.com.cn/",
                changeOrigin: true,
                secure: false,
                pathRewrite: function (path, req) {
                    return path;
                }
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', path.join(contentBase, 'src'))
            .set('static', path.join(contentBase, 'static'))
            .set('css', path.join(contentBase, 'src/assets/css'))
            .set('images', path.join(contentBase, 'src/assets/images'))
            .set('components', path.join(contentBase, 'src/components'))
            .set('io', path.join(contentBase, 'src/io'))
            .set('utils', path.join(contentBase, 'src/utils'))
            .set('widgets', path.join(contentBase, 'src/widgets'))
            .set('public', path.join(contentBase, 'public'))
            .set('config', path.join(contentBase, 'config'));
        config.optimization.splitChunks = {
            chunks: 'async',
            minChunks: 1,
            automaticNameDelimiter: '-',
            cacheGroups: {
                "vendor":{
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial', 
                    name: "vendor",
                },
                "element-ui": {
                    test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                    priority: -1,
                    chunks: 'all', 
                    name: "element-ui",
                },
                "common": {
                    test: /.css/,
                    priority: -10,
                    chunks: 'all', 
                    name: "common"
                }
            }
        }
    }

}