const fs = require('fs');
const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf-8', (error, data) => {
    console.log('In readFile\'s callback: it has the data');
    if (!error) callback(data);
    else {
      callback(undefined);
    }
  });
};

// const bombay = breedDetailsFromFile('Bombay', (data) => {
//   console.log('return value:', data);
// });

module.exports = breedDetailsFromFile;