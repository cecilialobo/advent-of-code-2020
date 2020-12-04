const fs = require("fs");
const inputData = fs.readFileSync("inputday2.txt", "utf8");
const dataArray = inputData.split('\n');    
console.log(dataArray);
