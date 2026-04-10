const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const historyList = document.getElementById("historyList");

let history = [];
let currentInput = "";

function addToHistory(text, result) {
  history.push(text);

  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", () => {
    currentInput = result.toString();
    display.textContent = currentInput;
  });

  historyList.appendChild(li);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        const result = eval(currentInput);

        addToHistory(currentInput + " = " + result, result);
        display.textContent = result;
        currentInput = result.toString();
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
    } else if (value === "C") {
      currentInput = "";
      display.textContent = "0";
    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1);

      display.textContent = currentInput || "0";
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
