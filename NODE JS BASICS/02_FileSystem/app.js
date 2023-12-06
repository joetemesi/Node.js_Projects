const readline = require("readline");
const fs = require("fs");//import filesystem module

let textData = fs.readFileSync("./files/input.txt", 'utf-8'); //method to read from specified file
console.log(textData);

let writeData = `Data read from input text: ${textData} \nDate Created: ${new(Date)}` 
fs.writeFileSync("./files/inputData.txt", writeData);//method to write data in specified directory