function submitForm() {
    let textInput = document.getElementById("textInput").value;
    let dependentRadio = document.querySelector('inputname="dependentRadio":checked').value;
    let checkBox1 = document.getElementById("checkBox1").checked;
    let dropdownValue = document.getElementById("dropdown").value;
    let multiLineText = document.getElementById("multiLineText").value;
  
    console.log("Form Data:");
    console.log("Ввод текста:", textInput);
    console.log("Зависимые переключатели:", dependentRadio);
    console.log("Независимые переключатели:", checkBox1);
    console.log("Выпадающий список:", dropdownValue);
    console.log("Многострочный текст:", multiLineText);
  }
  
  let clickCount = 0;
  function changeColor() {
    let textField = document.getElementById("textField");
    clickCount++;
  
    if (clickCount === 1) {
      textField.value = "текстовое поле";
    } else {
      let color = (clickCount % 2 === 0) ? "blue" : "red";
      textField.style.color = color;
    }
  }
  
  function compareText() {
    let multiLineText = document.getElementById("multiLineText").value;
    let searchTerm = prompt("Введите искомую строку:");
  
    if (multiLineText.includes(searchTerm)) {
      alert("Текст содержит искомую строку");
    } else {
      alert("Текст не содержит искомую строку");
    }
  }
  
  function validateForm(event) {
    event.preventDefault();
    let radio = document.querySelector('input[name="radio"]:checked');
    let checkboxes = document.querySelectorAll('input[name^="checkbox"]:checked');
    let select = document.getElementById('select');
  
    let output = document.getElementById('output');
    output.innerHTML = '';
  
    if (!radio || checkboxes.length === 0 || !select.value) {
      let message = document.createElement('p');
      message.textContent = 'Пожалуйста, заполните следующее:';
      if (!radio) {
        message.textContent += ' Radio';
      }
      if (checkboxes.length === 0) {
        message.textContent += ' Checkboxes';
      }
      if (!select.value) {
        message.textContent += ' Select';
      }
      output.appendChild(message);
    } else {
      let result = document.createElement('p');
      result.textContent = 'Radio: ' + radio.value + ', Checkboxes: ';
      checkboxes.forEach(function (checkbox, index) {
        result.textContent += checkbox.value;
        if (index < checkboxes.length - 1) {
          result.textContent += ', ';
        }
      });
      result.textContent += ', Dropdown: ' + Array.from(select.selectedOptions, function (option) {
        return option.value;
      }).join(', ');
      output.appendChild(result);
    }
  }
  
  document.getElementById('customButton').addEventListener('click', function () {
    let event = new Event('click');
    document.getElementById('submitButton').dispatchEvent(event);
  });
  