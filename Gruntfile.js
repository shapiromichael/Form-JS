'use strict';
module.exports = function(grunt) {
	// Load all grunt tasks
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	require('grunt-bump')(grunt);

	grunt.loadNpmTasks('grunt-jscs');

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n* vForm - v<%= pkg.version %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
			'* Licensed MIT\n*/\n',

		// Task configuration.
		clean: {
			files: ['dist']
		},
		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true
			},
			dist: {
				src: ['src/<%= pkg.name %>.js'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
		qunit: {
			all: {
				options: {
					urls: ['http://localhost:9000/test/<%= pkg.name %>.html']
				}
			}
		},
		jshint: {
			options: {
				reporter: require('jshint-stylish')
			},
			gruntfile: {
				options: {
					jshintrc: '.jshintrc'
				},
				src: 'Gruntfile.js'
			},
			src: {
				options: {
					jshintrc: 'src/.jshintrc'
				},
				src: ['src/**/*.js']
			},
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['test/**/*.js']
			}
		},
		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			src: {
				files: '<%= jshint.src.src %>',
				tasks: ['jshint:src', 'qunit']
			},
			test: {
				files: '<%= jshint.test.src %>',
				tasks: ['jshint:test', 'qunit']
			}
		},
		connect: {
			server: {
				options: {
					hostname: '*',
					port: 9000
				}
			}
		},
		bump: {
			options: {
				files: ['package.json', 'bower.json', 'form.json'],
				updateConfigs: [],
				commit: false,
				commitMessage: 'Release v%VERSION%',
				commitFiles: ['package.json'],
				createTag: false,
				tagName: 'v%VERSION%',
				tagMessage: 'Version %VERSION%',
				push: false,
				pushTo: 'upstream',
				gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
				globalReplace: false,
				prereleaseName: false,
				regExp: false
			}
		},
		jscs: {
			src: ['src/**/*.js', 'docs/**/*.js', 'test/**/*.js'],
			options: {
				force: true
			}
		}
	});

	// Default task.
	grunt.registerTask('default', ['jshint', 'connect', 'qunit', 'clean', 'concat', 'uglify']);
	grunt.registerTask('build', ['jshint', 'clean', 'concat', 'uglify', 'jscs']);
	grunt.registerTask('serve', ['connect', 'watch']);
	grunt.registerTask('test', ['jshint', 'connect', 'qunit']);
};
