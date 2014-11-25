module.exports = function (grunt) {
    grunt.initConfig({
        //Read package information
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {
                options: {
                    targetDir: './vendor',
                    install: true,
                    verbose: true,
                    cleanTargetDir: true,
                    cleanBowerDir: true,
                    bowerOptions: {}
                }
            }
        },

        concat: {
            options: {
                separator: ';',
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                src: [
                    'vendor/angular/angular.js',
                    'vendor/jquery/jquery.js',
                    'vendor/**/*.js',
                    'src/app/app.js'
                ],
                dest: 'web/js/app.js' //<%= pkg.name %>-<%= pkg.version %>.js
            }
        },

        copy: {
            dist: {
                files: [{
                    flatten: true,
                    src: 'src/index.html',
                    dest: 'web/index.html'
                }, {
                    expand: true,
                    cwd: 'src/assets/images',
                    src: '*',
                    dest: 'web/images/'
                }
                ]
            }
        },

        watch: {
            scripts: {
                files: [
                    'src/**/*.js',
                    'src/**/*.html'
                ],
                tasks: ['compile']
            }
        },

        less: {
            dist: {
                files: {
                    "web/css/style.css": "vendor/**/*.css"
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['bower:install', 'concat:dist', 'less', 'copy:dist']);
    grunt.registerTask('compile', ['concat:dist', 'less', 'copy:dist']);
};

