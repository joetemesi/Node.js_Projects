const readline = require("readline");
const fs = require("fs");

let textData = fs.readFileSync("./files/input.txt", 'utf-8');
console.log(textData);

let writeData = `Data read from input text: ${textData} \nDate Created: ${new(Date)}` 
fs.writeFileSync("./files/inputData.txt", writeData);