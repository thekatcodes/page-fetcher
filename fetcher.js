let args = [];
for (let arg = 0; arg < process.argv.length - 2; arg++) {
	args.push(process.argv[arg + 2]);
};
// console.log(args); -> logs args into array [ 'http://www.example.edu/', './index.html' ]
