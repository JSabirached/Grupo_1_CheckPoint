const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync(__dirname + '/comida.json','utf-8'));