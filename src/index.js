import "./base.css";
import "./style.css";

/** Задача 1: Вывод чисел от 1 до 10: */

const element = document.getElementById("numbers");
const button = document.getElementById("button");

const injectElement = (count) => `<p>${count}</p>`;
const renderNumbers = () => {
  const input = document.getElementById("count-input").value;

  for (let i = 0; i < input; i++) {
    element.insertAdjacentHTML("beforeend", injectElement(i + 1));
  }
};

button.addEventListener("click", renderNumbers);

/** Задача 6: Подсчет суммы цифр числа: */
const numberSum = document.getElementById("number_sum");
const buttonSum = document.getElementById("button_sum");
const inputElement = document.getElementById("count-input_sum");

const calculateSum = () => {
  const number = inputElement.value;
  const splitNumbers = number.split("");

  const sum = splitNumbers.reduce((acc, current) => acc + Number(current), 0);

  numberSum.innerHTML = injectElement(sum);
};

buttonSum.addEventListener("click", calculateSum);
