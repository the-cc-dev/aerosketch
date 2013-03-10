module.exports = function(grunt) {
	grunt.initConfig({
		requirejs:{
			build: {
				options:{
					appDir:'src',
					dir:'build',
					baseUrl:'js',
					paths: {
						'jquery': 'lib/jquery/jquery-1.9.0',
						'underscore': 'lib/underscore/underscore-amd-min',
						'underscore.string': 'lib/underscore/underscore.string.min',
						'knockout':'lib/knockout/knockout-2.2.1',
						'mousetrap':'lib/mousetrap/mousetrap.min',
						'hammer':'lib/hammer/hammer.min',
						'text': 'lib/require/text'
					},
					name:'main'
				}
			}
		},
		clean:{
			build:["build/build.txt",'build/img/*.ai']
		},
		replace:{
			build:{
				options:{
					variables:{'timestamp': '<%= new Date().getTime() %>'}
				},
				files:[
					{src:['build/index.html'],dest:'build/index.html'}
				]
			}
		}
	});
	grunt.loadNpmTasks('grunt-requirejs');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-replace');
	grunt.registerTask('less','Optimize Less files',function(){
		require('lessless').optimizeProject('build');
	});

	grunt.registerTask('build',['requirejs','less','replace','clean']);
}
