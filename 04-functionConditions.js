var characters = ["Luigi", "Mario", "Yoshi", "Bowser"];
var num= Math.floor* characters.length;

function chooseCharacter(num) {
  if (num == 1) {
    console.log("Your character is Luigi!")
  } else if (num == 2) {
    console.log( "Your character is Mario!")
  } else if (num == 3) {
    console.log( "Your character is Yoshi!")
  } else if (num == 4) {
    console.log("Your character is Bowser!")
  } else {
    console.log ("Please enter a number from 1 to 4.")
  }
}

chooseCharacter (2);
