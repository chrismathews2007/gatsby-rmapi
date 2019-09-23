// In your routes configuration file
const path = require('path');
module.exports = [
  {
    path: '/post/',
    component: path.resolve(`src/containers/post.js`)
  }
];