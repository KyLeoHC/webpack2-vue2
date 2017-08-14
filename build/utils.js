var fs = require('fs')
var path = require('path')
var glob = require('glob')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var program = require('commander')

exports.assetsPath = function (_path) {
    // var assetsSubDirectory = process.env.NODE_ENV === 'production'
    //   ? config.build.assetsSubDirectory
    //   : config.dev.assetsSubDirectory
    return path.posix.join('[name]', _path)
}

exports.cssLoaders = function (options) {
    options = options || {}

    var cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production',
            sourceMap: options.sourceMap
        }
    }

    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        var loaders = [cssLoader]
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            })
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', {indentedSyntax: true}),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
    var output = []
    var loaders = exports.cssLoaders(options)
    for (var extension in loaders) {
        var loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }
    return output
}

/**
 * scan the entry JS file
 * @returns {{}}
 */
exports.scanEntryFile = function () {
    var argv, entryList, entry = {};
    try {
        // get parameter from npm command
        argv = JSON.parse(process.env.npm_config_argv).original;
    } catch (ex) {
        argv = process.argv;
    }
    program
        .version('0.0.1')
        .option('-p, --project <name>', 'compile project')
        .parse(argv);
    entryList = program.project
        ? [program.project]
        : glob.sync('./src/project/*').map(function (src) {
            return path.basename(src);
        });
    entryList.forEach(function (name) {
        entry[name] = './src/project/' + name + '/main.js';
    });
    return entry;
};

/**
 * scan the `TPC` entry JS file
 * @returns {{}}
 */
exports.scanTPCEntryFile = function () {
    var argv, entryList, entry = {};
    try {
        // get parameter from npm command
        argv = JSON.parse(process.env.npm_config_argv).original;
    } catch (ex) {
        argv = process.argv;
    }
    program
        .version('0.0.1')
        .option('-cp, --component <name>', 'compile tpc')
        .parse(argv);
    entryList = program.component
        ? [program.component]
        : glob.sync('./src/thirdPartyComponents/components/*!(.js)').map(function (src) {

            return fs.statSync(src).isDirectory() ? path.basename(src) : '';
        });
    entryList.forEach(function (name) {
        if (name) {
            entry[name] = './src/thirdPartyComponents/components/' + name + '/index.js';
        }
    });
    return entry;
};


