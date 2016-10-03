process.env.DISABLE_NOTIFIER = true;

var gulp = require('gulp');
var elixir = require('laravel-elixir');
var wb = require('webpack-stream');
var webpack = require('webpack');
var path = require('path');

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

const dirs = {
    source: path.join(__dirname, 'resources'),
    build: path.join(__dirname, 'public')
};

gulp.task('react-js', function () {
    return gulp.src(path.join(dirs.source, 'assets/js/ui/index.js'))
        .pipe(wb({
            entry: {
                app: path.join(dirs.source, 'assets/js/ui/index.js'),
                vendors: [
                    'react',
                    'react-dom',
                    'moment'
                ]
            },
            output: {
                filename: "ui.js"
            },
            plugins: [
                new webpack.optimize.CommonsChunkPlugin("vendors", "ui.vendors.js")
            ], module: {
                loaders: [
                    {
                        loader: 'babel',
                        query: {
                            presets: ['es2015', 'react'],
                            cacheDirectory: true
                        },
                        exclude: /(node_modules|bower_components)/
                    }
                ]
            },
            resolve: {
                modulesDirectories: ['node_modules'],
                extensions: ['', '.js', '.jsx']
            }
        }))
        .pipe(gulp.dest(path.join(dirs.build, 'js')));
});

elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js')
        .task('react-js');
});
