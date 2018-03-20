module.exports = function (grunt) {
  	grunt.initConfig({
	    tinyimg: {
	      dynamic: {
	        files: [{
	          expand: true,
	          cwd: 'assets/images/', 
	          src: ['**/*.{png,jpg,svg}'],
	          dest: 'assets/images/'
	        }]
	      }
	    },
	    cssbeautifier : {
		  files : ["assets/css/**/*.css"]
		},
		prettify: {
			files: {
			    expand: true,
			    cwd: '',
			    src: ['*.html'],
			    dest: ''
		  	}
		}
  	});
    
  	grunt.loadNpmTasks('grunt-tinyimg');
  	grunt.loadNpmTasks('grunt-cssbeautifier');
  	grunt.loadNpmTasks('grunt-prettify');

  	grunt.registerTask('html', ['prettify']);
	grunt.registerTask('css', ['cssbeautifier']);
    grunt.registerTask('img', ['tinyimg']);

  	grunt.registerTask('default', ['html', 'css', 'img']);
};