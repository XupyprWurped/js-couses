const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.querySelector(".btn").addEventListener("click", function () {
  const div = document.getElementById("div3");
  div.innerHTML = "";
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      div.innerHTML += numbers[i] + " ";
    }
  }
});

const nNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.querySelector(".btn2").addEventListener("click", function () {
  const div = document.getElementById("div5");
  div.innerHTML = "";
  for (let i = 0; i < nNumbers.length; i++) {
    if (nNumbers[i] % 2 !== 0) {
      div.innerHTML += nNumbers[i] + " ";
    }
  }
});

const arr = [2, 5, 3, 9];
const firstProduct = arr[0] * arr[1];
const secondProduct = arr[2] * arr[3];
const result = firstProduct + secondProduct;
document.getElementById("output").textContent = "Результат: " + result;

const arr2 = [1, 2, 3, 4, 5];
let result2 = 0;
for (let i = 0; i < arr2.length; i++) {
  result2 += arr2[i];
}
document.getElementById("output2").textContent = result2;

const arr3 = [7, 6, 2, 4, 5];
const sortArray = arr3.sort();
document.getElementById("output3").textContent = sortArray[0];
