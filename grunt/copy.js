const projectMap = require('./project-map.js');
let config = {};

Object.keys(projectMap).forEach(function (project) {
  config[project] = {
    files: [
      {
        src: `${projectMap[project].path}/src/js/${projectMap[project].filename}.js`,
        dest: `${projectMap[project].path}/dist/js/${projectMap[project].filename}.js`
      }
    ]
  }
});

module.exports = config;
