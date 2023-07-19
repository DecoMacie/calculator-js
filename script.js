const digitsBtn = document.querySelectorAll(".digits");
const operationBtn = document.querySelectorAll(".operation");
let topScreen = document.querySelector(".operand-one");
let bottomScreen = document.querySelector(".operand-two");
let delBtn = document.querySelector(".delete");
let allclearBtn = document.querySelector(".allClear");
let iqualsBtn = document.querySelector(".iquals");

console.log(digitsBtn);
console.log(operationBtn);
console.log(delBtn);
console.log(allclearBtn);
console.log(topScreen);
console.log(iqualsBtn);

class Calculator {
  constructor(topScreen, bottomScreen) {
    this.topScreen = topScreen;
    this.bottomScreen = bottomScreen;
    this.allClear();
  }

  allClear() {
    this.op1 = "";
    this.op2 = "";
    this.operation = undefined;
  }

  nrConcat(digit) {
    this.op1 = digit;
  }

  showOnScreen() {
    this.bottomScreen.innerText = this.op1;
  }

  iqual() {}

  chooseOp() {}

  deleteItem() {}
}

const calculator = new Calculator(topScreen, bottomScreen);

digitsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.nrConcat(btn.innerText);
    calculator.showOnScreen();
  });
});

allclearBtn.addEventListener("click", () => {
  calculator.allClear();
  calculator.showOnScreen();
});
