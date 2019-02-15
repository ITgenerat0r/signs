
var path = require('path');
 
module.exports = {
  entry: './src/fun.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};

