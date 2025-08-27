const prompt = require("prompt-sync")()
const name = prompt("Enter your name: ")
console.log("Hello ", name, ", welcome to Adventure Time!")

let shouldPlay = prompt("Do you want to play? (y/n) ")
console.log(shouldPlay)

while (shouldPlay.toLowerCase() !== "y" && shouldPlay.toLowerCase() !== "n") {
    console.log("Please enter a valid option.")
    shouldPlay = prompt("Do you want to play? (y/n) ")}
if (shouldPlay.toLowerCase() !== "y") {
  console.log("OK, hope to see you soon!")
  process.exit()
}
console.log("Let's play!")

console.log("You are travelling through the valley of death in the middle of the night when you come across a fork in the road.")
console.log("There is a sign that reads: 'Left: The Lake of Fire, Right: The River of Despair'")
const forkDecision = prompt("Which way do you go? to the lake or river? (lake/river) ").toLowerCase()

if (forkDecision === "lake") { 
  console.log("You have come to the Lake of Fire. You see a boatman who offers to take you across for a price.")
  const boatmanDecision = prompt("Do you pay the boatman? (y/n) ").toLowerCase()
  if (boatmanDecision === "y") {
    console.log("The boatman takes you across safely.")
    console.log("The boatman drops you off onto a small deserted island in the middle of the lake.")
    console.log("You step on to the land and start to feel uneasy.")
    console.log("You cannot seem to understand why the ground bleeds with every step you take.")
    console.log("All of a sudden a dragon erupts from the earth beneath you, flinging you into the air! You are in complete shock but see the treasured gem hiding in the dragons nest.")
    const fightDecision = prompt("Do you venture into the nest for the gem or run away? (venture/run) ").toLowerCase()
    if (fightDecision === "venture") {
      console.log("You bravely venture into the nest and grab the gem. The dragon swoops in and sees you with its treasure.")
      console.log("The dragon is furious but impressed with your bravery.")
      console.log("But it doesn't let you leave that easily")
      console.log("You battle its might claws and roll away from its fiery breath.")
      console.log("After a long and grueling fight, you emerge victorious and the dragon flies away, never to be seen again.")
      console.log("You retrieve the gem, and make your way back to the boatman, who is waiting for you. ")
      console.log("You pay the boatman and he takes you back across the lake to safety. Then you head home, victorious and with the gem in hand where the village hails you as a hero!")
      console.log("Congratulations, you win! :)")
    } 
    else {
      console.log("You run away from the nest back to the boatman who takes you back to shore. ")
      console.log("You head home safely with your head hung low. The emperor is disappointed in you and orders for you to be executed for your failed endeavour.")
      console.log("You lose! :(")
    }
  } else {
    console.log("The boatman gets angry and throws you into the lake. You lose!")
  }
}
else if (forkDecision === "river") {
  console.log("You have come to the River of Despair. You see a bridge that looks unstable.")
  const bridgeDecision = prompt("Do you cross the bridge? (y/n) ").toLowerCase()
  if (bridgeDecision === "y") {
    console.log("The bridge collapses and you fall into the river. You lose!")
  } 
  else {
    console.log("You decide not to cross the bridge but get attacked by a bear hunting for its next meal. You lose! :(")
  }
}