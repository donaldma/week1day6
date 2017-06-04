var fs = require("fs");
var fileName = process.argv[2];

var greet2 = fs.readFile(__dirname + fileName, 'utf8', function(err, data) {
  if(err) {
    throw err;
  } else {
    console.log(data);
  }
});