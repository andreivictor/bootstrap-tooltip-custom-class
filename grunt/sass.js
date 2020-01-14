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
    src: `${projectMap[project].path}/src/scss/main.scss`,
    dest: `${projectMap[project].path}/dist/css/${projectMap[project].filename}.min.css`,
  };
  config[`${project}Expanded`] = {
    options: {
      outputStyle: 'expanded'
    },
    src: `${projectMap[project].path}/src/scss/main.scss`,
    dest: `${projectMap[project].path}/dist/css/${projectMap[project].filename}.css`,
  };
  config[`${project}Demo`] = {
    options: {
      outputStyle: 'expanded'
    },
    src: `${projectMap[project].path}/demo/demo.scss`,
    dest: `${projectMap[project].path}/demo/demo.css`,
  };
});

module.exports = config;
