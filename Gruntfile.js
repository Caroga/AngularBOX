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
                    'vendor/**/*.js',
                    'src/app/*.js'
                ],
                dest: 'web/js/app.js' //<%= pkg.name %>-<%= pkg.version %>.js
            }
        },

        copy: {
            dist: {
                flatten: true,
                src: 'src/index.html',
                dest: 'web/index.html'
            }
        }

    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
};

