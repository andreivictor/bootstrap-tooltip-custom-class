const projectMap = require('./project-map.js');
let config = {};

Object.keys(projectMap).forEach(function (project) {
  if (project === 'v3Tooltip' || project === 'v3Popover') {
      const dest = `${projectMap[project].path}/dist/css/${projectMap[project].filename}.less.css`;
      const source = `${projectMap[project].path}/src/less/main.less`;
      config[project] = {};
      config[project].files = {};
      config[project].files[dest] = source;
  }
});

module.exports = config;
