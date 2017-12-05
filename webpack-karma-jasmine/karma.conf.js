// karma.conf.js
var webpackConfig = require('./webpack.config');
var webpack = require('webpack');

webpackConfig.plugins = [
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
    DEBUG: true,
  }),
];
webpackConfig.devtool = 'eval-source-map';

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'spec/SpecHelper.js',
      'spec/*Spec.js',
      'src/*.js'
    ],


    plugins: [ // !IMPORTANT
      'karma-chrome-launcher',
      // 'karma-firefox-launcher',
      // 'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-jasmine-html-reporter',
      'karma-webpack',
      'karma-sourcemap-loader',
    ],

    // list of files to exclude
    exclude: [

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // make sure we run all the discovered files through webpack
      'spec/**/*Spec.js': ['webpack', 'sourcemap'],
      'src/**/*.js': ['webpack', 'sourcemap'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'kjhtml'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Webpack config that Karma should load
    webpack: webpackConfig,

    // Settings for the webpack dev server
    webpackServer: {
      noInfo: true,
    },
  });
};


