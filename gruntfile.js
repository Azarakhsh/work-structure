module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.initConfig({
		uglify: {
			my_target : {
				files:{
					'assets/js/custom.js': ['develop/components/js/*.js']
				} //files
			} //my_target
		}, //uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass
		watch: {
			options: { livereload: true },
			scripts: {
				files:['develop/components/js/*.js'],
				tasks: ['uglify']
			}, //script
			sass: {
				files:['develop/components/sass/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			html: {
				files:['*.html']
			} //html
		} //watch
	}) //initConfig
	grunt.registerTask('default', 'watch');
} //exports