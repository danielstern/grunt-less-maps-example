module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        // Turns LESS files into CSS files
        less: {
            dev: {
                options: {
                    paths: [""],
                    compress: true,
                    sourceMap: true,
                    sourceMapFilename: 'app/css/compiled.css.map',
                    sourceMapRootpath: '../',
                    sourceMapBasepath: 'app/',
                },
                files: {
                    "app/css/compiled.css": "app/less/styles.less",
                }
            },
        },
        connect: {
            options: {
                port: 666,
                open: true,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect.static("app/")
                        ];
                    },
                }
            },
        },
        watch: {

        },
    });

    grunt.registerTask('default', [
        'less',
        'connect:livereload',
        'watch'
    ]);
}
