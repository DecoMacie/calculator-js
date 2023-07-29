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
    if (digit === "." && this.op1.includes(".")) return;
    else this.op1 = String(this.op1 + digit);
  }

  showOnScreen() {
    this.bottomScreen.innerText = this.op1;
    this.topScreen.innerText = this.op2;
  }

  iqual() {}

  chooseOp(operation) {
    if (this.op1 === "") {
      return;
    } else if (this.op2 !== "") {
      this.iqual();
    }
    this.op2;
    this.operation = operation;
    this.op2 = this.op1;
    this.op1 = "";
  }

  deleteItem() {
    this.op1 = String(this.op1).slice(0, -1);
  }
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

iqualsBtn.addEventListener("click", () => {
  calculator.iqual();
  calculator.showOnScreen();
});

operationBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculator.chooseOp(btn.innerText);
    calculator.showOnScreen();
  });
});

delBtn.addEventListener("click", () => {
  calculator.deleteItem();
  calculator.showOnScreen();
});
