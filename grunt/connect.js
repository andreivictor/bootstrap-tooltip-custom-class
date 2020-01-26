const projectMap = require('./project-map.js');
const parameters  = require('./parameters');

let config = {};

Object.keys(projectMap).forEach(function (project, index) {
  config[project] = {
    options: {
      port: (parameters.connectPortBase + index),
      livereload: (parameters.watchLivereloadBase + index),
      // Setting it to '*', will make the server accessible from any local IPv4 address like '127.0.0.1'
      // and the IP assigned to an ethernet or wireless interface (like '192.168.0.x' or '10.0.0.x').
      // get local IP with: ipconfig getifaddr en0 (like: 192.168.1.2)
      hostname: '*',
      // Array of String (or Object) bases to serve multiple directories.
      // The last base given will be the [directory][] to become browse-able.
      base: [
        `${projectMap[project].base}`,
        `${projectMap[project].path}`,
        `${projectMap[project].path}/demo`
      ],
      open: true
    }
  }
});

module.exports = config;
