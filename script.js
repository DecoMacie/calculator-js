const digitsBtn = document.querySelectorAll(".digits");
const operationBtn = document.querySelectorAll(".operation");
let topScreen = document.querySelector("operand-one");
let bottomScreen = document.querySelector("operand-two");
let delBtn = document.querySelector(".delete");
let allclearBtn = document.querySelector(".allClear");
let iqualsBtn = document.querySelector(".iquals");

console.log(digitsBtn);
console.log(operationBtn);
console.log(delBtn);
console.log(allclearBtn);
console.log(iqualsBtn);

class Calculator {
  constructor(topScreen, bottomScreen) {
    this.topScreen = topScreen;
    this.bottomScreen = bottomScreen;
  }
}

const calculator = new Calculator();
