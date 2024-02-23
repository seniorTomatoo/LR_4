
//1
// Функция, которая выводит сообщение о месяцах, относящихся к заданной поре года
function showSeasonMonths() {
    // Получаем значение из поля ввода
    let selectedSeason = document.getElementById('season').value;

    // Создаем объект с названиями пор времени года и соответствующими месяцами
    const seasons = {
      'Зима': ['Январь', 'Февраль', 'Декабрь'],
      'Весна': ['Март', 'Апрель', 'Май'],
      'Лето': ['Июнь', 'Июль', 'Август'],
      'Осень': ['Сентябрь', 'Октябрь', 'Ноябрь']
    };
    
    // Проверяем, есть ли пора года в объекте seasons
    if (seasons.hasOwnProperty(selectedSeason)) {
      // Выводим сообщение о месяцах, относящихся к выбранной поре года
      document.getElementById('result_season').innerHTML = 'Выбрана пора года: ' + selectedSeason + '. Месяцы: ' + seasons[selectedSeason].join(', ');
    } else {
      // Выводим ошибку, если выбрана неверная пора года
      document.getElementById('result_season').innerHTML = 'Ошибка: выбрана неверная пора года.';
    }
  }




//2

// Функция, которая определяет и выводит возраст человека
function calculateAge() {
  // Получаем значения из полей ввода
  let day = document.getElementById('day').value;
  let month = document.getElementById('month').value;
  let year = document.getElementById('year').value;

  // Создаем объект Date с указанными днем, месяцем и годом рождения
  let birthday = new Date(year, month, day);

  // Получаем текущую дату
  let currentDate = new Date();

  // Вычисляем разницу в годах между текущей датой и днем рождения
  let age = currentDate.getFullYear() - birthday.getFullYear();

  // Проверяем, был ли уже день рождения в этом году
  if (currentDate.getMonth() < birthday.getMonth() || (currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() < birthday.getDate())) {
    age--;
  }

  // Выводим возраст человека
  document.getElementById('result_age').innerHTML = 'Возраст: ' + age + ' лет';
}



//3

let startTime;


document.getElementById("startButton").addEventListener("click", function() {
  startTime = new Date();
});ы

document.getElementById("endButton").addEventListener("click", function() {
  if (startTime) {    
    document.getElementById("timeElapsed").innerText = "Время от нажатие Старт к Стоп (мс): " + (new Date() - startTime);
  }
});


//4.1

function findMin() {
  // Получаем введенные числа и разделяем их по запятой
  const input = document.getElementById("massif").value;
  let numbers = input.split(",");

  // Преобразуем строки в числа
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = parseInt(numbers[i]);
  }

  // Выводим результат
  document.getElementById("result_min").innerHTML = "Минимальное значение: " + (Math.min.apply(null, numbers));
}




//4.2


function findPosition() {
  const str = document.getElementById("string").value;
  const substr = document.getElementById("substring").value;

  let position = str.indexOf(substr);

  if (position != -1) {
    document.getElementById("result_positions").innerHTML = "Позиция первого вхождения символа: " + (++position);
  } else {
    document.getElementById("result_positions").innerHTML = "Символ не найдена";
  }
}

//5
Number.prototype.isOdd = function() {
  return this % 2 !== 0;
};

function checkOdd() {
  let input = document.getElementById("numberInput").value;
  let number = parseInt(input);
  
  if (!isNaN(number)) {
    let output = number.isOdd() ? "Число нечетное" : "Число четоне";
    document.getElementById("result_odd").textContent = output;
  } else {
    document.getElementById("result_odd").textContent = "Не возможна опредилить четность";
  }
}

//6
function checkStartsWithDigit(value) {
  let startsWithDigit = /^\d/.test(value);
  return startsWithDigit;
}

function checkStringNumber() {
  let input = document.getElementById("stringInput").value;
  
  if (checkStartsWithDigit(input)) {
    document.getElementById("result_string").textContent = "В предложение есть цифра";
  } else {
    document.getElementById("result_string").textContent = "В предложение нет цифры";
  }
}

//7
function checkCharacterPresence(value, character) {
  return value.includes(character);
}

function checkString() {
  let inputValue = document.getElementById("inputValue").value;
  let character = document.getElementById("characterInput").value;

  if (character.length === 1) {
    if (checkCharacterPresence(inputValue, character)) {
      document.getElementById("result_string_check").textContent = "Строка содержит указанный символ";
    } else {
      document.getElementById("result_string_check").textContent = "Строка не содержит указанный символ";
    }
  } else {
    document.getElementById("result_string_check").textContent = "Пожалуйста, введите только один символ";
  }
}

//8
   function palindrome(str) {
       return str === str.split("").reverse().join("");
 }
 
     function checkPalindrome() {
       let input = document.getElementById("stringInput").value;
       
       if (palindrome(input)){
         document.getElementById("result_palindrome").textContent = "Строка является палиндромом";
       }
       else{
         document.getElementById("result_palindrome").textContent = "Строка не является палиндромом";
       }
     }