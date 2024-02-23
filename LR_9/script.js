let obj1, obj2;
    function createObjects() {
      obj1 = new Object();
      obj1.Имя = "Джон";
      obj1.Возраст = 25;
      obj1.Город = "Сан-Франциско";
      obj1.Профессия = "Инженер";
      obj1.Хобби = "Гитарист";
      obj2 = {
        Название: "Сумерки",
        Автор: "Достоевский",
        Страниц: 300,
        Выпущена: 2023,
        Жанр: "Мистика"
      };
      document.getElementById("result-1").textContent = "Объекты obj1 и obj2 созданы."
    }
    function showObj1Properties() {
  let obj1Properties = Object.keys(obj1).join(", ");
  let obj2Properties = Object.values(obj2).join(", ");
  document.getElementById("result-2").textContent = "Имена свойств объекта obj1:\n" + obj1Properties + ".\n\nЗначение свойств объекта obj2:\n" + obj2Properties + ".";
}
    function addGreetMethod() {
      obj1.greet = function() {
        return "Привет! Я объект obj1.\n" + "Мои свойства: " + JSON.stringify(this);
      };
      document.getElementById("result-3").textContent = "Привет! Я объект obj1. Мне добавили greet\nМои свойства: " + Object.keys(obj1).join(", ");
    }
    function displayObj2() {
      let result = "";
      for (let key in obj2) {
        result += (key + ": " + obj2[key] + "\n");}
      document.getElementById("result-4").innerHTML = result;
    }
    function createDish() {
      let Dish = {
        _name: "",
        _calories: 0,
        _cuisine: "",
        _cookingTime: 0,      
        get название() {
          return this._name;},
        set название(newName) {
          if (typeof newName === "string" && newName.length > 0) {
            this._name = newName;
          } else {
            console.log("Ошибка! Неверное значение для названия блюда.");}},
        get калорийность() {
          return this._calories;},
        set калорийность(newCalories) {
          if (typeof newCalories === "number" && newCalories >= 0) {
            this._calories = newCalories;
          } else {
            console.log("Ошибка! Неверное значение для количества калорий.");
          }
        },
        get кухня() {
          return this._cuisine;
        },
        set кухня(newCuisine) {
          if (typeof newCuisine === "string" && newCuisine.length > 0) {
            this._cuisine = newCuisine;
          } else {
            console.log("Ошибка! Неверное значение для кухни блюда.");
          }
        },
        get времяПриготовления() {
          return this._cookingTime;
        },
        set времяПриготовления(newTime) {
          if (typeof newTime === "number" && newTime >= 0) {
            this._cookingTime = newTime;
          } else {
            console.log("Ошибка! Неверное значение для времени приготовления.");
          }
        }
      };
      Dish.название = "Паста";
      Dish.калорийность = 500;
      Dish.кухня = "Итальянская";
      Dish.времяПриготовления = 30;
      let result = "Название блюда: " + Dish.название + "<br>"
                 + "Калорийность: " + Dish.калорийность + "<br>"
                 + "Кухня: " + Dish.кухня + "<br>"
                 + "Время приготовления: " + Dish.времяПриготовления;
                 document.getElementById("result-5").innerHTML = result;
    }
    function duplicateObject() {
      let obj1Copy = Object.assign({}, obj1);
      document.getElementById("result-6").textContent = "Дубликат объекта obj1 создан. Новый объект: " + JSON.stringify(obj1Copy);
    }