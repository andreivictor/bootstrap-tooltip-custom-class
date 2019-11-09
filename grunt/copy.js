const projectMap = require('./project-map.js');
let config = {};

Object.keys(projectMap).forEach(function (project) {
  config[project] = {
    files: [
      {
        src: `${projectMap[project]}/src/js/<%= meta.filename %>.js`,
        dest: `${projectMap[project]}/dist/js/<%= meta.filename %>.js`
      }
    ]
  }
});

module.exports = config;
