const projectMap = require('./project-map.js');
let config = {};

Object.keys(projectMap).forEach(function (project) {
  config[project] = {
    options: {
      configFile: './.eslintrc.json',
    },
    src: [`${projectMap[project]}/src/js/<%= meta.filename %>.js`]
  }
});

module.exports = config;
