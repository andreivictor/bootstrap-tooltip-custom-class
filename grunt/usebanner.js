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
        `${projectMap[project].path}/dist/css/*.css`,
        `${projectMap[project].path}/dist/js/*.js`
      ]
    }
  }
});

module.exports = config;
