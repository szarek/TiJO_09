(function ()
{
    'use strict';

    module.exports = function (grunt)
    {
        grunt.loadNpmTasks('grunt-mutation-testing');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-karma');

        grunt.initConfig({
            karma: {
                options: {
                    configFile: 'test/karma.conf.js'
                },
                unit: {
                    singleRun: true
                },
                dev: {
                    singleRun: false
                }
            },
            mutationTest: {
                options: {
                    testFramework: 'jasmine',
                    logLevel: 'WARN',
                    maxReportedMutationLength: 0,
                    reporters: {
                        html: {
                            dir: 'target/mutation-test',
                            successThreshold: 70
                        },
                        text: {
                            dir: 'target/mutation-test'
                        }
                    }
                },
                karma: {
                    options: {
                        code: ['app/app.js'],
                        specs: 'test/unit/app.spec.js',
                        mutate: 'app/app.js',
                        ignoreReplacement: ['^console$'],
                        testFramework: 'karma',
                        karma: {
                            frameworks: ['jasmine'],
                            browsers: ['PhantomJS'],
                            configFile: 'test/karma.conf.js'
                        },
                        logLevel: 'DEBUG',
                        reporters: {
                            text: {
                                file: 'karma.txt'
                            }
                        }
                    }
                }
            },
            jshint: {
                default: {
                    options: {
                        jshintrc: true
                    },
                    files: {
                        src: ['app/**/*.js', 'test/**/*.js']
                    }
                },
                verify: {
                    options: {
                        jshintrc: true,
                        reporter: 'checkstyle',
                        reporterOutput: 'target/jshint.xml'
                    },
                    files: {src: ['app/**/*.js', 'test/**/*.js']}
                }
            }
        });

        grunt.registerTask('verify', ['jshint:verify', 'karma:unit']);
        grunt.registerTask('test:dev', ['karma:dev']);
    };
})();
