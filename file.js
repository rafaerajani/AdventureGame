const prompt = require("prompt-sync")()
let name = prompt("Enter your name: ")
console.log("Hello ", name, ", welcome to Adventure Time!")

const shouldPlay = prompt("Do you want to play? (yes/no) ")
console.log(shouldPlay)