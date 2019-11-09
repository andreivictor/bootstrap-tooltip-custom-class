const projectMap = require('./project-map.js');
let config = {};

Object.keys(projectMap).forEach(function (project) {
  config[project] = [`${projectMap[project]}/dist/**`]
});

module.exports = config;
