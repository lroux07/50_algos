// Algo' 1

let algo1 = document.querySelector("#algo1");
let result1 = "";

for(let i = 0; i <= 10; i++) {
  result1 = result1 + " " + i;
}

algo1.textContent = result1;


// Algo' 2

let algo2 = document.querySelector("#algo2");
let result2 = "";

for(let i = 1; i < 100; i += 2) {
  result2 = result2 + " " + i;
}

algo2.textContent = result2;


// Algo' 3

let algo3 = document.querySelector("#algo3");
let result3 = "";

for(let i = 1; i <= 10; i++) {
  result3 = result3 + " " + i * 7;
}

algo3.textContent = result3;


// Algo' 4

let algo4 = document.querySelector("#algo4");
let result4 = "";

for(let i = 1; i <= 10; i++) {
  result4 = result4 + i * 1 + " " + i * 2 + " " + i * 3 + " " + i * 4 + " " + i * 5 + " " + i * 6 + " " + i * 7 + " " + i * 8 + " " + i * 9 + " " + i * 10 + " ";
}

algo4.textContent = result4;


// Algo' 5

let algo5 = document.querySelector("#algo5");
let result5 = "";

for(let i = 1; i <= 10; i++) {
  result5 = result5 + i;
  result5 * 10;
}

algo5.textContent = result5;


// Algo' 6

let algo6 = document.querySelector("#algo6");
let result6 = "";

for(let i = 0; i <= 10; i++) {
  result6 = i;
}

algo6.textContent = result6;