function Algo1() {
  let algoElement = document.querySelector("#algo1");
  let result = "";
  let space = "";

  for(let i = 0; i <= 10; i++) {
    result = i;
    space += " " + result;
  }

  algoElement.textContent = space;
}
Algo1();

function Algo2() {
  let algoElement = document.querySelector("#algo2");
  let result = "";
  let space = "";

  for(let i = 1; i < 100; i += 2) {
    result = i;
    space += " " + result;
  }

  algoElement.textContent = space;
}
Algo2();

function Algo3() {
  let algoElement = document.querySelector("#algo3");
  let result = "";
  let space = "";

  for(let i = 1; i <= 10; i++) {
    result = i * 7;
    space += " " + result;
  }

  algoElement.textContent = space;
}
Algo3();

function Algo4() {
  let algoElement = document.querySelector("#algo4");
  let result = "";

  // for(let i = 1; i <= 10; i++) {
  //   let line = "";
  //   for(let j = 1; j <= 10; j++) {
  //     line += i * j + " ";
  //   }
  //   result += line;
  // }

  for(let i = 1; i <= 10; i++) {
    let line = [];
    for(let j = 1; j <= 10; j++) {
      line.push(i * j);
    }
    result += line + " - ";
  }


  algoElement.textContent = result;
}
Algo4();

function Algo5() {
  let algoElement = document.querySelector("#algo5");
  let result = 0;
  let space = "";

  for(let i = 1; i <= 10; i++) {
    result += i;
    space = " " + result
  }

  algoElement.textContent = space;
}
Algo5();

function Algo6() {
  let algoElement = document.querySelector("#algo6");
  let result = 1;

  for(let i = 1; i <= 10; i++) {
    result *= i;
  }

  algoElement.textContent = result;
}
Algo6();

function Algo7() {
  let algoElement = document.querySelector("#algo7");
  let result = 0;

  for(let i = 10; i <= 30; i += 2) {
    result += i;
  }

  algoElement.textContent = result;
}
Algo7();


// Celsius to Fahrenheit

const celsiusInput = document.querySelector("#celsiusInput");

celsiusInput.addEventListener("input", () => {
  Algo8(celsiusInput.value);
});

function Algo8(valueC) {
  let algoElementC = document.querySelector("#c2f");
  let fahrenheit;
  let degC = " °F";
  valueC

  // Clacul:
  // (celsius * 9/5) + 32
  
  let calculC2F = (valueC * 9/5) + 32;

  if(valueC) {
    algoElementC.textContent = calculC2F + degC;
  } else if(valueC = " ") {
    algoElementC.textContent = "Valeur en fahrenheit..."
  }
}
Algo8();


// Fahrenheit to Celsius

const fahrenheitInput = document.querySelector("#fahrenheitInput");

fahrenheitInput.addEventListener("input", () => {
  Algo9(fahrenheitInput.value);
})

function Algo9(valueF) {
  valueF
  let algoElementF = document.querySelector("#f2c");
  let degC = " °C";

  // Clacul:
  // (fahrenheit / 9/5) - 32
  
  let calculF2C = (valueF - 32) * 5/9;

  if(valueF) {
    algoElementF.textContent = calculF2C + degC;
  } else if(valueF = " ") {
    algoElementF.textContent = "Valeur en celsius..."
  }
}
Algo9();

function Algo10() {
  let tab = [1, 2, 3, 4, 5];
  let algoElement = document.querySelector("#algo10");

  let calculateTab = algoElement.textContent = tab.reduce(function (a, b) {
    return a + b;
  }, 0);

  algoElement.textContent = calculateTab;
}
Algo10();

function Algo11() {
  let tab = [1, 2, 3, 4, 5];
  let algoElement = document.querySelector("#algo11");

  let calculateTab = algoElement.textContent = tab.reduce(function (a, b) {
    return a + b;
  });
  calculateTab /= tab.length

  algoElement.textContent = calculateTab;
}
Algo11();