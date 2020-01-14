const projectMap = require('./project-map.js');
let config = {};

Object.keys(projectMap).forEach(function (project) {
  config[project] = {
    options: {
      configFile: './.eslintrc.json',
    },
    src: [`${projectMap[project].path}/src/js/${projectMap[project].filename}.js`]
  }
});

module.exports = config;
