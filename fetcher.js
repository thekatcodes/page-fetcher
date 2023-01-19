const request = require("request");
const fs = require("fs");

let args = [];
for (let arg = 0; arg < process.argv.length - 2; arg++) {
	args.push(process.argv[arg + 2]);
}
// console.log(args); -> logs args into array [ 'http://www.example.edu/', './index.html' ]

request(`${args[0]}`, (error, response, body) => {
	"error:", error; // Print the error if one occurred
	"statusCode:", response && response.statusCode; // Print the response status code if a response was received
	"body:", body; // Print the HTML for the link arg

	const content = body;
    const fileSize = content.length;

    fs.writeFile(`${args[1]}`, content, (err) => {
        if (err) {
            console.error(err);
		}
		// file written successfully
    });
    console.log(`Downloaded and save ${fileSize} to ${args[1]}.`)
});
