const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=' + process.argv[2], (error, response, body) => {
  if (error) {
    console.log('error:', error);
  } else if (body.length === 2) {
    console.log('Breed Not Found!');
  } else {
    const data = JSON.parse(body);
    console.log(data[0]["description"]);
  }
});