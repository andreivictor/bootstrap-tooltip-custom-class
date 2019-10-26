const sass = require('node-sass');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner : '/*!\n' +
        ' * <%= pkg.name %>\n' +
        ' * v<%= pkg.version %>\n' +
        ' * <%= pkg.description %>\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> - <%= pkg.homepage %>\n' +
        ' * License: <%= pkg.license %>\n' +
        ' */\n\n',
      filename : 'bootstrap-tooltip-custom-class'
    },
    sass: {
      options: {
        implementation: sass,
        banner : '<%= meta.banner %>',
        includePaths: ["node_modules"]
      },
      expanded: {
        options: {
          outputStyle: 'expanded',
        },
        src: 'src/scss/<%= meta.filename %>.scss',
        dest: 'dist/css/<%= meta.filename %>.css'
      },
      compressed: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true
        },
        src: 'src/scss/<%= meta.filename %>.scss',
        dest: 'dist/css/<%= meta.filename %>.min.css'
      },
    },
    concat: {
      js: {
        src: 'src/js/<%= meta.filename %>.js',
        dest: 'dist/js/<%= meta.filename %>.js'
      },
      scss: {
        src: 'src/scss/_mixin.scss',
        dest: 'dist/scss/<%= meta.filename %>.mixin.scss'
      }
    },
    uglify: {
      dist: {
        src: 'src/js/<%= meta.filename %>.js',
        dest: 'dist/js/<%= meta.filename %>.min.js'
      }
    },
    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner : '<%= meta.banner %>'
        },
        files: {
          src: [ 'dist/css/*.css', 'dist/js/*.js', 'dist/scss/*.scss' ]
        }
      }
    },
    clean: ['dist/**']
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-banner');

  grunt.registerTask('build', ['clean', 'sass:expanded', 'sass:compressed', 'concat', 'uglify', 'usebanner']);
  grunt.registerTask('default', ['build']);
};
