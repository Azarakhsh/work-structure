module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.initConfig({
		uglify: {
			custom_js : {
				files:{
					'assets/js/custom.js': ['develop/components/js/*.js']
				} //files
			}, //custom-js
			vendors_js : {
				files: {
					'assets/js/vendors/vendors.js': ['develop/components/js/vendors/*.js']
				} //files
			} // vendors_js
		}, //uglify js
		cssmin: {
		  options: {
		  	keepSpecialComments: 0,
		    shorthandCompacting: false,
		    roundingPrecision: -1
		  }, //options
		  target: {
		    files: {
		      'assets/css/vendors/vendors.css': ['develop/components/css/vendors/*.css']
		    }
		  } //target
		}, //cssmin
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass
		watch: {
			options: { livereload: true },
			custom_js: {
				files:['develop/components/js/custom.js'],
				tasks: ['uglify:custom_js']
			}, //script
			vendors_js: {
				files:['develop/components/js/vendors/*.js'],
				tasks: ['uglify:vendors_js']
			}, //vendors_js
			vendors_css: {
				files:['develop/components/css/vendors/*.css'],
				tasks: ['cssmin']
			}, //vendors_css
			sass: {
				files:['develop/components/sass/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			html: {
				files:['*.html']
			} //html
		} //watch
	}); //initConfig
	grunt.registerTask('default', 'watch');
} //exports