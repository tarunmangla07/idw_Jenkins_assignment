
var date = new Date();
var year = date.getUTCFullYear();
var month = date.getUTCMonth() + 1;
var day = date.getUTCDate();
var hours = date.getUTCHours() + 2;
var min = date.getUTCMinutes();
var sec = date.getUTCSeconds();


var str = day + "-" + month + "-" + year + " " + hours + ":" + min + ":" + sec ;
var fs = require('fs');
fs.writeFile("output.txt", str, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});