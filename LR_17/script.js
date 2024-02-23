function Country(name, capital, population, language) {
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.language = language;
  }

  function createCountry() {
    let name = prompt("Введите название страны");
    let capital = prompt("Введите столицу страны");
    let population = prompt("Введите население страны");
    let language = prompt("Введите национальный язык страны");

    let country = new Country(name, capital, population, language);
    let json = JSON.stringify(country);

    document.getElementById("output").innerHTML = json;
  }

  function parseJson() {
    let jsonString = document.getElementById("jsonString").value;

    let parsedObject = JSON.parse(jsonString, function(key, value) {
      if (typeof value === 'string') {
        return value;
      }
      return undefined;
    });

    console.log(parsedObject);
  }