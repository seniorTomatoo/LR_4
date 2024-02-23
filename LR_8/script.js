// Функция степени
function Degree() {
    const base = parseFloat(document.getElementById('base').value);
    const exponent = parseFloat(document.getElementById('exponent').value);
    const result = power(base, exponent);
    document.getElementById('powerResult').textContent = `${base} в степени ${exponent} это ${result}`;
  }
  function power(base, exponent = 1) {
    return Math.pow(base, exponent);
  }
  // Функция месяцы
  function setMonth() {
    const month = parseInt(document.getElementById('month').value);
    window.month = month;
  }
  function getMonthName() {
    const months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ];
    const monthName = months[window.month - 1];
    document.getElementById('monthName').textContent = `Выбранный месяц: ${monthName}`;
  }
  // Функция для нахождения максимального элемента массива
  function findMaxAndPrintResult() {
    const numbersInput = document.getElementById("numbers");
    const maxResult = document.getElementById("maxResult");
    // Преобразуем введенную строку в массив чисел
    const numbersString = numbersInput.value;
    const numbersArray = numbersString.split(",").map(Number);
    // Находим максимальный элемент
    const maxElement = findMaxElement(numbersArray);


    // Выводим результат и значение максимального элемента
    maxResult.textContent = getResultMessage(maxElement) + " (максимальный элемент: " + maxElement + ")";
  }
  function findMaxElement(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  function getResultMessage(max) {
    if (max < 10) {
      return "Максимальный элемент находится в диапазоне от 0 до 9";
    } else if (max < 100) {
      return "Максимальный элемент находится в диапазоне от 10 до 99";
    } else {
      return "Максимальный элемент больше или равен 100";
    }
  }
  // Функция повторения
  function repeatString() {
    const str = document.getElementById("str").value;
    const repetitions = parseInt(document.getElementById("repetitions").value);
    const repeatResult = document.getElementById("repeatResult");
    const repeatedString = repeat(str, repetitions);
    repeatResult.textContent = `Результат: ${repeatedString}`;
  }
  function repeat(str, repetitions) {
    let repeatedString = "";
    for (let i = 0; i < repetitions; i++) {
      repeatedString += str;
    }
    return repeatedString;
  }
  // Функция калькулятора
  function calculate() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const calcResult = document.getElementById("calcResult");
    const result = a + b + c;
    calcResult.textContent = `Результат: ${result}`;
  }
  // AddN-функция
  function addN() {
    const inputNumber = parseFloat(document.getElementById("addNInput").value);
    const addNResult = document.getElementById("addNResult");
    const n = 10;
    const result = inputNumber + n;
    addNResult.textContent = `Результат: ${result}`;
  }