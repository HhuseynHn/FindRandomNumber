/** @format */

let startNumber = document.querySelector(".start-number");
let endNumber = document.querySelector(".end-number");
let compChoose = document.querySelector(".comp-choose");
let yourProqnozNumber = document.querySelector(".your-proq-number");
let button = document.querySelector(".btn");
let trueAnswer = document.querySelector(".result-number-true");
let falseAnswer = document.querySelector(".result-number-false");

function findRandomNumber(start, end) {
  let result = parseInt(Math.random() * (start - end) + end);
  return result;
}
function compareResult(yourChose, compOutput) {
  console.log("chose: ", yourChose);
  console.log("comp: ", compOutput);

  if (yourChose == compOutput) {
    return 1;
  }
  return -1;
}
let trueAnswerCount = 0;
let falseAnswerCount = 0;

button.addEventListener("click", () => {
  compChoose.value = findRandomNumber(+startNumber.value, +endNumber.value);

  let result = compareResult(+yourProqnozNumber.value, +compChoose.value);

  if (result == 1) {
    trueAnswerCount += result;
    trueAnswer.value = trueAnswerCount;
  } else {
    falseAnswerCount += result;
    falseAnswer.value = Math.abs(falseAnswerCount);
  }
});
