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
		            compress:true,
		            sourceMap: true,
		            sourceMapFilename: 'compiled.css.map',
		            sourceMapRootpath: ''
		        },
		        files: {
		            "compiled.css": "styles.less",
		        }
		    },
		},
		connect: {
		    options: {
		        port: 666,
		        open: true,
		        // Change this to '0.0.0.0' to access the server from outside
		        hostname: 'localhost'
		    },
		    livereload: {
		        options: {
		            middleware: function(connect) {
		                return [
		                    // connect.static('.tmp'),
		                    // connect().use('/bower_components', connect.static('./bower_components')),
		                    connect.static("dummy/../")
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