module.exports = function(grunt) {
  const projectMap = require('./grunt/project-map.js');
  const sassConfig = require('./grunt/sass');
  const lessConfig = require('./grunt/less');
  const eslintConfig = require('./grunt/eslint');
  const copyConfig = require('./grunt/copy');
  const uglifyConfig = require('./grunt/uglify');
  const usebannerConfig = require('./grunt/usebanner');
  const cleanConfig = require('./grunt/clean');

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),
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
    sass: sassConfig,
    less: lessConfig,
    eslint: eslintConfig,
    copy: copyConfig,
    uglify: uglifyConfig,
    usebanner: usebannerConfig,
    clean: cleanConfig,
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask(
    'buildAll',
    [
      'clean',
      'sass',
      'eslint',
      'copy',
      'uglify',
      'usebanner'
    ]
  );

  Object.keys(projectMap).forEach(function (project) {
    grunt.registerTask(
      `build${project}`,
      [
        `clean:${project}`,
        `sass:${project}Compressed`,
        `sass:${project}Expanded`,
        `sass:${project}Demo`,
        `eslint:${project}`,
        `copy:${project}`,
        `uglify:${project}`,
        `usebanner:${project}`
      ]
    );
  });

  grunt.registerTask('default', ['buildAll']);
};
