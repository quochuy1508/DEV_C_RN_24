let button = document.getElementById("guessButton");
let message = document.getElementById("message");
let lastAssign = document.getElementById("lastAssign");

let random = Math.round(Math.random() * 100);
let lastGuest = [];

console.log(random);
button.addEventListener("click", function () {
  let numberValue = parseInt(document.getElementById("number").value);
  let stringLastAssign = "";
  lastGuest.map((e) => {
    stringLastAssign += e + "  ";
  });
  lastAssign.innerHTML = stringLastAssign;
  lastGuest.push(numberValue);

  if (numberValue) {
    if (parseInt(numberValue) === random) {
      message.style.color = "#00ff15";
      message.innerHTML = "Congratulations!! You guessed correctly.";
      random = Math.round(Math.random() * 100);
    } else if (parseInt(numberValue) < random) {
      message.style.color = "#ff0000";
      message.innerHTML = "Sorry your guess is too low";
    } else if (parseInt(numberValue) > random) {
      message.style.color = "#ff0000";
      message.innerHTML = "Sorry your guess is too high";
    }
  } else {
    message.innerHTML = "Please submit number in the input form";
  }
});
