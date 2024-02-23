/*1 задание */

let bodyChildren = document.body.childNodes;
let bodyContent = "";
for (let i = 0; i < bodyChildren.length; i++) {
  bodyContent += bodyChildren[i].nodeName + "<br>";
}
let div1 = document.getElementById("div1");
div1.innerHTML = bodyContent + "<br>";

let allElements = document.getElementsByTagName("*");
let documentContent = "";
for (let i = 0; i < allElements.length; i++) {
  documentContent += allElements[i].nodeName + "<br>";
}

let div2 = document.getElementById("div2");
div2.innerHTML = documentContent + "<br>";

/*2 задание */

function createList(type) {
  let listContainer = document.getElementById("list-container");
  let list = document.createElement(type === "ordered" ? "ol" : "ul");
  list.setAttribute("id", "dynamic-list");
  listContainer.appendChild(list);
}

function addToBeginning() {
  let list = document.getElementById("dynamic-list");
  let newItem = document.createElement("li");
  newItem.textContent = "Новый элемент";
  list.insertBefore(newItem, list.firstChild);
}

function addToEnd() {
  let list = document.getElementById("dynamic-list");
  let newItem = document.createElement("li");
  newItem.textContent = "Новый элемент";
  list.appendChild(newItem);
}

function changeColor() {
  let list = document.getElementById("dynamic-list");
  let items = list.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    if (i % 2 !== 0) {
      items[i].style.color = "blue";
    } else {
      items[i].style.color = "black";
    }
  }
}

/* 3 задание */

let elementById = document.getElementById("targetElement");

let container = document.body;
let elementByHierarchy = container.children[1];

let elementByQuerySelector = document.querySelector("#targetElement");

let equalNodes =
  elementById === elementByHierarchy && elementById === elementByQuerySelector;
console.log("Переменные равны: " + equalNodes);

/* 4 задание */

let images = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
];
let captions = [
  "Басист и этим все сказано",
  "Level up",
  "Да да",
  "...",
  "КОТИК",
];
let currentImageIndex = 0;

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  let displayImg = document.getElementById("displayImg");
  let caption = document.getElementById("caption");

  displayImg.src = "pictures/" + images[currentImageIndex];
  caption.textContent = captions[currentImageIndex];
}

/* 5 задание */

function log(obj) {
  console.log(obj);
}

let slider = document.getElementById("slides");
let slideIndex = 0;
let slideWidth = 500;

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slider.children.length) {
      slideIndex = 0;
  }
  slider.style.transform = 'translateX(' + (-slideWidth * slideIndex) + 'px)';
  slider.style.transition = "all .5s";
}
/* 6 задание */

function flipLink(url) {
  document.getElementsByTagName("a")[0].href = url;
}

function changeLink(url) {
  let link = document.getElementById("myLink");
  link.setAttribute("href", url);
}

function updateLink(url) {
  document.getElementById("myLink").setAttribute("href", url);
}

/* 7 задание */

function TableCreation() {
  let table = document.createElement('table');
  table.style.borderCollapse = 'collapse';

  let roundedCornerStyle = 'border-radius: 5px;';
  let colorStyles = ['background-color: #ff9999;', 'background-color: #99ccff;', 'background-color: #66ff99;', 'background-color: #34994f;', 'background-color: #c7289f;'];
  let cells = prompt("Введите количество столбцов ");
  let rows = prompt("Введите количество строк");
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let i = 0; i < cells; i++) {
    let th = document.createElement('th');
    th.style.cssText = colorStyles[i] + roundedCornerStyle;
    th.textContent = 'Заголовок ' + (i + 1);
    row.appendChild(th);
  }

  let tbody = table.createTBody();
  
  
  for (let j = 0; j < rows; j++) {
    let tr = tbody.insertRow();
    for (let k = 0; k < cells; k++) {
      let td = tr.insertCell();
      td.style.cssText = colorStyles[k] + roundedCornerStyle;
      td.textContent = prompt("Введите содержанние ячейки");
    }
  }
  document.body.appendChild(table);
}