const request = require('request');
const fs = require('fs');

const urlPath =  process.argv.slice(2);
const url = urlPath[0];
const path = urlPath[1];

request(url, (error, response, body) => {
  fs.writeFile(path, `${body}`, { flag: 'w+' }, err => {
    if (err) {
      console.error(err);
    }
    fs.stat(path, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${path}.`);
    });
  });
});

//    https://example.edu ./test.html