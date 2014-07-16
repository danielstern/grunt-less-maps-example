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
		            sourceMapFilename: 'css/compiled.css.map',
		            sourceMapRootpath: '../',
		        },
		        files: {
		            "css/compiled.css": "less/styles.less",
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