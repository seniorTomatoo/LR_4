let myList = {
  "items": [
    {
      "name": "item1",
      "quantity": 3
    },
    {
      "name": "item2",
      "quantity": 5
    },
    {
      "name": "item3",
      "quantity": 2
    }
  ]
};

let parsedList = JSON.parse(JSON.stringify(myList));
console.log(parsedList);





$(document).ready(function(){
  $("body").children().each(function(){
      console.log($(this));
  });
});



$(document).ready(function(){
  $("th:contains('PRESENT')").hover(function(){
      alert("Описание: настоящее время");
  });
  $("th:contains('PAST')").hover(function(){
      alert("Описание: прошедшее время");
  });
  $("th:contains('FUTURE')").hover(function(){
      alert("Описание: будущее время");
  });
});




let isOn = false;
        $(document).ready(function(){
            $("#toggleButton").on("click", function(){
                if (isOn) {
                    $(this).removeClass("on").text("Off");
                } else {
                    $(this).addClass("on").text("On");
                }
                isOn = !isOn;
            });
        });