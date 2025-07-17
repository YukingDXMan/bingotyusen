let numbers = Array.from({ length: 75 }, (_, i) => i + 1);
let drawnNumbers = [];
let isFirstDraw = true;

const currentNumber = document.getElementById("current-number");
const drawButton = document.getElementById("draw-button");

function getColumnKey(number) {
  if (number >= 1 && number <= 15) return "B";
  if (number <= 30) return "I";
  if (number <= 45) return "N";
  if (number <= 60) return "G";
  return "O";
}

function getColumnInfo(number) {
  const key = getColumnKey(number);
  let indexInColumn;
  if (key === "B") indexInColumn = number;
  if (key === "I") indexInColumn = number - 15;
  if (key === "N") indexInColumn = number - 30;
  if (key === "G") indexInColumn = number - 45;
  if (key === "O") indexInColumn = number - 60;
  return `${key}列の${indexInColumn}`;
}

function drawNumber() {
  if (numbers.length === 0) {
    currentNumber.textContent = "終了！";
    drawButton.disabled = true;
    return;
  }

  const randomIndex = Math.floor(Math.random() * numbers.length);
  const number = numbers.splice(randomIndex, 1)[0];
  drawnNumbers.push(number);


  const columnKey = getColumnKey(number);
  const valuesDiv = document.getElementById(`values-${columnKey}`);
  const numSpan = document.createElement("span");
  numSpan.textContent = number;
  numSpan.className = "number-tag";
  valuesDiv.appendChild(numSpan);

  if (numbers.length === 0) {
    drawButton.disabled = true;
  }
}

drawButton.addEventListener("click", () => {
  drawNumber();
  if (isFirstDraw) {
    drawButton.textContent = "再抽選";
    isFirstDraw = false;
  }
});
