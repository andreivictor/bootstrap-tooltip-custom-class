const projectMap = require('./project-map.js');
let config = {};

Object.keys(projectMap).forEach(function (project) {
  config[project] = {
    src: `${projectMap[project]}/src/js/<%= meta.filename %>.js`,
    dest: `${projectMap[project]}/dist/js/<%= meta.filename %>.min.js`
  }
});

module.exports = config;
