const list = document.getElementById("list");
const newLi = document.createElement("li");

newLi.innerHTML = "13-го месяца не бывает";
const daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

const ul = document.createElement("ul");


for (let i = 0; i < 6; i++) {
  const li = document.createElement("li");
  li.innerHTML = daysOfWeek[i];
  ul.appendChild(li);
}

newLi.appendChild(ul);
list.appendChild(newLi);

let months = document.getElementsByTagName("li");

for (let i = 0; i < 6; i++) {

  const row = document.createElement("tr");
  const numberCell = document.createElement("td");
  const nameCell = document.createElement("td");

  numberCell.innerHTML = i + 1;
  nameCell.innerHTML = months[i].innerHTML;

  row.appendChild(numberCell);
  row.appendChild(nameCell);
  
  document.querySelector("table").appendChild(row);
}


document.getElementById("showHeadings").addEventListener("click", function() {
  // Получаем элемент main
  const mainElement = document.querySelector("main");

  // Получаем все заголовки в пределах элемента main
  const headings = mainElement.querySelectorAll("h1, h2, h3, h4, h5, h6");

  // Выводим содержимое заголовков
  for (let i = 0; i < headings.length; i++) {
    console.log(headings[i].textContent);
  }
});



function changeText() {

  const text = document.getElementById("text");
  let yesRadio = document.getElementById("yes");

  if (yesRadio.checked) {
      text.className = "active";
  } else {
      text.className = "inactive";
  }
}


let startTime;
let endTime;


function startTimer() {
  startTime = new Date().getTime();
}


function startTest() {
  document.getElementById("test-container").style.display = "block";
  startTimer();
}


function showResult() {
  endTime = new Date().getTime();
  let timeTaken = (endTime - startTime) / 1000;

  let resultContainer = document.getElementById("result-container");
  let resultList = document.getElementById("result-list");
  let timeTakenText = document.getElementById("time-taken");
  let incorrectAnswers = [];

  // Вопрос 1
  let q1Answer = document.querySelector('input[name="q1"]:checked');
  if (!q1Answer || q1Answer.value !== "a3") {
      incorrectAnswers.push("Вопрос 1");
  }

  // Вопрос 2
  let q2Answer1 = document.getElementById("q2-a1");
  let q2Answer2 = document.getElementById("q2-a2");
  let q2Answer3 = document.getElementById("q2-a3");
  let q2Answer4 = document.getElementById("q2-a4");
  if (!q2Answer3.checked || !q2Answer4.checked || q2Answer1.checked || q2Answer2.checked) {
      incorrectAnswers.push("Вопрос 2");
  }

  // Вопрос 3
  let q3Answer = document.getElementById("q3-answer").value;
  if (q3Answer !== "стиральная машина") {

      incorrectAnswers.push("Вопрос 3");
  }

  // Показываем результаты
  while (resultList.firstChild) {
      resultList.removeChild(resultList.firstChild);
  }

  if (incorrectAnswers.length === 0) {
      resultList.innerHTML = "<li>Поздравляем! Все ответы верные.</li>";
  } else {
      for (let i = 0; i < incorrectAnswers.length; i++) {
          let li = document.createElement("li");
          li.textContent = incorrectAnswers[i];
          resultList.appendChild(li);
      }
  }

  timeTakenText.textContent = "Время выполнения теста: " + timeTaken + " сек.";
  resultContainer.style.display = "block";
}