const projectMap = require('./project-map.js');
const sass = require('node-sass');
const path = require('path');

let config = {
  options: {
    implementation: sass,
    includePaths: [path.join(__dirname, 'node_modules')]
  }
};

Object.keys(projectMap).forEach(function (project) {
  config[`${project}Compressed`] = {
    options: {
      outputStyle: 'compressed',
      sourceMap: true
    },
    src: `${projectMap[project]}/src/scss/main.scss`,
    dest: `${projectMap[project]}/dist/css/<%= meta.filename %>.min.css`,
  };
  config[`${project}Expanded`] = {
    options: {
      outputStyle: 'expanded'
    },
    src: `${projectMap[project]}/src/scss/main.scss`,
    dest: `${projectMap[project]}/dist/css/<%= meta.filename %>.css`,
  }
});

module.exports = config;
