require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var chalk = require('chalk')
var webpack = require('webpack')
var webpackConfig = require('./webpack.tpc.conf')

var spinner = ora('building for third party component...')
spinner.start()

webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
    ))
})
