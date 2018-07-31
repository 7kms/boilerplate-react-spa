const path = require('path')

const resolve = (url)=>{
    return path.resolve(__dirname,url)
}
module.exports = {
    appSrc: resolve('../src'),
    publicPath: './',
    clientOutput: resolve('../__build__client__output__'),
    clientEntry: resolve('../src/entry.js'),
    htmlTemplate: resolve('../src/template/index.html'),
    generageStaticPath: (string)=>{
        return `static/${string}`
    }
}