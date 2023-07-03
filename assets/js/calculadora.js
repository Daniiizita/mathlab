class Calculator {
    constructor(displayElement) {
      this.displayElement = displayElement;
      this.clear();
    }
  
    clear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '') return;
      if (this.previousOperand !== '') {
        this.compute();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    }
  
    compute() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
      switch (this.operation) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev - current;
          break;
        case '*':
          computation = prev * current;
          break;
        case '/':
          computation = prev / current;
          break;
        default:
          return;
      }
      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = '';
    }
  
    updateDisplay() {
      this.displayElement.value = this.currentOperand;
    }
  }
  
  const displayElement = document.getElementById('display');
  const numberButtons = document.querySelectorAll('.number');
  const operatorButtons = document.querySelectorAll('.operator');
  const clearButton = document.querySelector('.clear');
  const equalButton = document.querySelector('.equal');
  
  const calculator = new Calculator(displayElement);
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    });
  });
  
  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    });
  });
  
  clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
  });
  
  equalButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
  });
  