const request = require('request');


let args = [];
for (let arg = 0; arg < process.argv.length - 2; arg++) {
	args.push(process.argv[arg + 2]);
};


request(`${args[0]}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
});

// console.log(args); -> logs args into array [ 'http://www.example.edu/', './index.html' ]

const fs = require('fs');

const content = 'Some content!'; //change 

fs.writeFile(`${args[1]}`, content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
  
});
