function displayCharacter(value) {
    document.getElementById('output').innerHTML = value;
 }

 const link = document.getElementById('myLink');

      link.addEventListener('click', function(event) {
         event.preventDefault();
      });

      link.addEventListener('click', function(event) {
         alert('Событие click');
      });

      link.addEventListener('mouseover', function(event) {
         alert('Событие mouseover');
      });

      link.addEventListener('mouseout', function(event) {
         alert('Событие mouseout');
      });

      link.addEventListener('focus', function(event) {
         alert('Событие focus');
      });

      link.addEventListener('blur', function(event) {
         alert('Событие blur');
      });

      link.addEventListener('contextmenu', function(event) {
         alert('Событие contextmenu');
      });


      function handleEvent(event) {
        let element = event.target;
        alert("Нашали на " + element.tagName);
        event.stopPropagation();
      }
  
      function handleMouseEnter(event) {
        let element = event.target;
        alert("Мышка приблизилось к " + element.tagName);
      }
  
      function handleMouseLeave(event) {
        let element = event.target;
        alert("Мышка Удалилась от  " + element.tagName);
      }
  
      function handleKeyPress(event) {
        let key = event.key;
        alert("Введино : " + key);
      }


    // Добавление новой строки после клика на строку
let table = document.getElementById("myTable");
table.addEventListener("click", function(e) {
  let row = e.target.parentElement;
  let newRow = document.createElement("tr");
  let cols = row.children.length;
  for (let i = 0; i < cols; i++) {
    let newCell = document.createElement("td");
    newCell.innerHTML = "Новая строка, Ячейка " + (i + 1);
    newRow.appendChild(newCell);
  }
  row.parentNode.insertBefore(newRow, row.nextSibling);
});

// Плавная смена фона ячейки по двойному клику
table.addEventListener("dblclick", function(e) {
  let cell = e.target;
  let originalColor = window.getComputedStyle(cell).backgroundColor;
  let newColor = "yellow";

  if (cell.style.backgroundColor === newColor) {
    cell.style.backgroundColor = originalColor;
  } else {
    cell.style.backgroundColor = newColor;
  }

  setTimeout(function() {
    cell.style.backgroundColor = originalColor;
  }, 1000);
});


