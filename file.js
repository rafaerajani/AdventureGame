const prompt = require("prompt-sync")()
const name = prompt("Enter your name: ")
console.log("Hello ", name, ", welcome to Adventure Time!")

const shouldPlay = prompt("Do you want to play? (y/n) ")
console.log(shouldPlay)

if (shouldPlay.toLowerCase() !== "y") {
  console.log("OK, maybe next time!")
  process.exit()
}
console.log("Let's play!")