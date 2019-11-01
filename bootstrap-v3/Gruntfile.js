const sass = require('node-sass');
const path = require('path');

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
        includePaths: [path.join(__dirname, 'node_modules')]
      },
      expanded: {
        options: {
          outputStyle: 'expanded',
        },
        src: 'src/scss/main.scss',
        dest: 'dist/css/<%= meta.filename %>.css'
      },
      compressed: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true
        },
        src: 'src/scss/main.scss',
        dest: 'dist/css/<%= meta.filename %>.min.css'
      },
    },
    copy: {
      js: {
        files: [
          {
            src: 'src/js/<%= meta.filename %>.js',
            dest: 'dist/js/<%= meta.filename %>.js'
          }
        ]
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
          src: [ 'dist/css/*.css', 'dist/js/*.js' ]
        }
      }
    },
    clean: ['dist/**']
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-banner');

  grunt.registerTask('build', ['clean', 'sass', 'copy', 'uglify', 'usebanner']);
  grunt.registerTask('default', ['build']);
};
