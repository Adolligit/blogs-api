const yaml = require('yaml');
const fs = require('fs');

function converted(yamlFile) {
  const read = fs.readFileSync(yamlFile, 'utf8');

  return yaml.parse(read);
}

module.exports = converted;