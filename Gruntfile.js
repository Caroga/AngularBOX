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
                stripBanners: {'block': true, 'line': true},
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

        uglify: {
            dist: {
                files: {
                    'web/js/app.js': 'web/js/app.js'
                }
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
                    'src/**/*.html',
                    'src/**/*.less'
                ],
                tasks: ['compile']
            }
        },

        less: {
            dist: {
                files: {
                    "web/css/style.css": ["vendor/**/*.css","src/assets/less/*.less"]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['bower:install', 'concat:dist', 'uglify:dist', 'less:dist', 'copy:dist']);
    grunt.registerTask('compile', ['concat:dist', 'less:dist', 'copy:dist']);
};

