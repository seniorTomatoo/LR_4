function changeStyle() {
  let style_1 = document.getElementById('style_1');
  let style_2 = document.getElementById('style_2');

  if (style_1.getAttribute('href') === 'style_1.css') {
    style_1.setAttribute('href', 'style_2.css');
  } else {
    style_1.setAttribute('href', 'style_1.css');
  }
}

document.getElementById("btn").addEventListener("click", function () {
  const listItems = document.getElementsByTagName("li");
  for (let i = 0; i < listItems.length; i++) {
    let opacity = listItems[i].style.opacity;
    
    if (opacity === "") {
      opacity = 1;
    }
    
    let newOpacity = Number(opacity) - 0.1;
    if (newOpacity < 0) {
      newOpacity = 1;
    }
    
    listItems[i].style.opacity = newOpacity;
  }
});


onload = function() {
  let blink = document.getElementById("blink");

  setInterval(function() {
    blink.style.opacity = (blink.style.opacity == "1") ? "0" : "1";
  }, 500);

  function updateClock() {
    let date = new Date();

    let hoursElement = document.getElementById("hours");
    let minutesElement = document.getElementById("minutes");

    let hours = date.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    hoursElement.textContent = hours;

    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    minutesElement.textContent = minutes;
  }

  setInterval(updateClock, 1000);
};