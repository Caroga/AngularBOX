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
                    //cleanBowerDir: true,
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
                },{
                    expand: true,
                    cwd: 'bower_components/bootstrap/fonts/',
                    src: 'glyphicons-halflings-regular.*',
                    dest: 'web/fonts/'
                },{
                    expand: true,
                    cwd: 'bower_components/components-font-awesome/fonts',
                    src: '*',
                    dest: 'web/fonts/'
                },{
                    // Added seperate copy task since grunt-bower cannot handle export overrides properly
                    cwd: "bower_components/bootstrap",
                    expand: true,
                    flatten: true,
                    src: "less/*.less",
                    dest: "vendor/bootstrap/"
                },{
                    // Added seperate copy task since grunt-bower cannot handle export overrides properly
                    cwd: "bower_components/bootstrap",
                    expand: true,
                    flatten: true,
                    src: "less/mixins/*.less",
                    dest: "vendor/bootstrap/mixins"
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
                options: {
                    paths: ['vendor/bootstrap'],
                    compress: true,
                    cleancss: true
                },
                files: {
                    "web/css/style.css": [
                        "src/assets/less/bootstrap.less",
                        "vendor/components-font-awesome/font-awesome.css",
                        "src/assets/less/style.less"
                    ]
                }
            }
        },
        clean: {
            dist: {
                src: ["bower_components"]
            }
        }

    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['bower:install', 'compile']);
    grunt.registerTask('compile', ['concat:dist', 'copy:dist', 'less:dist', 'clean:dist','uglify']);
};

