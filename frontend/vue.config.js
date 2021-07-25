// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = {
    // runtimeCompiler: true,
    // css: {
    //     modules: true
    // },
    configureWebpack: {
        resolve: {
            alias: {
                "@store": path.resolve(__dirname, 'src/store')
            },
            // extensions: ['.js', '.vue', '.json']
        },
    }
};
