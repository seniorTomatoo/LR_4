function openWindow1() {
    window.open("other_HTML/openWindow1.html", "", "width=200,height=200,toolbar=no,menubar=no,status=yes,location=no,resizable=yes,scrollbars=yes");
}

function openWindow2() {
    window.open("other_HTML/openWindow2.html", "", "width=400,height=400,toolbar=yes,menubar=yes,status=yes,location=no,resizable=yes,scrollbars=no");
}

function checkVerticalScroll() {
  let hasVerticalScroll = (window.innerHeight < document.documentElement.scrollHeight);
  if (hasVerticalScroll) {
    alert("Есть вертикальная пракрутка");
  } else {
    alert("Нет вертикальной пракрутки");
  }
}
 
function greetUser() {
  let userName = prompt("Введите ваше имя");
  let timeInterval = prompt("Введите интервал в миллисекундах");

  setInterval(function() {
     alert("Привет, " + userName + "!");
  }, parseInt(timeInterval));
}