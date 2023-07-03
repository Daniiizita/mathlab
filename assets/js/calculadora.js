let display = document.getElementById('display');
    let currentExpression = '';

    function appendNumber(number) {
      currentExpression += number;
      display.value = currentExpression;
    }

    function appendOperator(operator) {
      currentExpression += operator;
      display.value = currentExpression;
    }

    function calculate() {
      try {
        let result = eval(currentExpression);
        display.value = result;
        currentExpression = result.toString();
      } catch (error) {
        display.value = 'Erro';
        currentExpression = '';
      }
    }

    function clearDisplay() {
      display.value = '';
      currentExpression = '';
    }

    function deleteLast() {
      currentExpression = currentExpression.slice(0, -1);
      display.value = currentExpression;
    }