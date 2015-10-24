(function ()
{
    'use strict';

    module.exports = function (grunt)
    {
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-karma');
        grunt.loadNpmTasks('grunt-stryker');

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
            stryker: {
                jasmine: {
                    files: {
                        src: ['app/app.js'],
                        tests: ['test/unit/app.spec.js']
                    },
                    mutate: {
                        src: ['app/app.js']
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
