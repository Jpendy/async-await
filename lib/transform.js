const fs = require('fs/promises');

module.exports = async str => {
  const newStr = await fs.readFile(str, { encoding: 'utf8' });
  return newStr
    .split('')
    .filter(item => item === item.toLowerCase())
    .reverse()
    .join('')
    .toUpperCase();
}; 
