const projectMap = require('./project-map.js');
const parameters  = require('./parameters');

let config = {};

Object.keys(projectMap).forEach(function (project, index) {
  config[project] = {
    files: [
      `${projectMap[project].path}/src/js/*.js`,
      `${projectMap[project].path}/src/scss/*.scss`
    ],
    tasks: [`build${project}`],
    options: {
      livereload: (parameters.watchLivereloadBase + index)
    }
  }
});

module.exports = config;
