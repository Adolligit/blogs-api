const rescue = require('express-rescue');

module.exports = (funcOrArr) => {
  if (typeof funcOrArr === 'function') return rescue(funcOrArr);

  return funcOrArr.map((e) => rescue(e));
};