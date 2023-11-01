function changeDay() {
    var weekendSelect = document.getElementById("weekendSelect");
    var selectedOption = weekendSelect.options[weekendSelect.selectedIndex].value;
    var weekendDays = document.getElementsByClassName("day");
    var weekendMinutes = document.getElementsByClassName("minute");
    
    for (var i = 0; i < weekendDays.length; i++) {
      var day = weekendDays[i].innerText;
  
      
      if (day === selectedOption) {
        weekendDays[i].style.display = "table-cell";
        weekendDays[i].nextElementSibling.style.display = "table-cell";
        
        
        for (var j = 0; j < weekendMinutes.length; j++) {
          if (weekendMinutes[j].parentNode === weekendDays[i].parentNode) {
            weekendMinutes[j].style.display = "table-cell";
          }
        }
        
      } else {
        weekendDays[i].style.display = "none";
        weekendDays[i].nextElementSibling.style.display = "none";
        
       
        for (var j = 0; j < weekendMinutes.length; j++) {
          if (weekendMinutes[j].parentNode === weekendDays[i].parentNode) {
            weekendMinutes[j].style.display = "none";
          }
        }
      }
    }
  }
  