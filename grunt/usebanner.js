const projectMap = require('./project-map.js');
let config = {};

Object.keys(projectMap).forEach(function (project) {
  config[project] = {
    options: {
      position: 'top',
      banner : '<%= meta.banner %>'
    },
    files: {
      src: [
        `${projectMap[project]}/dist/css/*.css`,
        `${projectMap[project]}/dist/css/*.js`
      ]
    }
  }
});

module.exports = config;
