// Importa las funciones de calculadora_backend
import { calculadora_backend } from "../../declarations/calculadora_backend";

document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById("addBtn");
  const subtractBtn = document.getElementById("subtractBtn");
  const multiplyBtn = document.getElementById("multiplyBtn");
  const divideBtn = document.getElementById("divideBtn");
  const resultDiv = document.getElementById("result");
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");

  //funcion que ejecuta la funcion de sumar
  addBtn.addEventListener('click', async () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    try {
      const result = await calculadora_backend.add(num1, num2);
      displayResults(result);
    } catch (error) {
      displayResults("Error: " + error.message);
    }
  });

  //funcion que ejecuta la funcion de restar
  subtractBtn.addEventListener('click', async () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    try {
      const result = await calculadora_backend.subtract(num1, num2);
      displayResults(result);
    } catch (error) {
      displayResults("Error: " + error.message);
    }
  });

  //funcion que ejecuta la funcion de multiplicar
  multiplyBtn.addEventListener('click', async () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    try {
      const result = await calculadora_backend.multiply(num1, num2);
      displayResults(result);
    } catch (error) {
      displayResults("Error: " + error.message);
    }
  });

  //funcion que ejecuta la funcion de dividir
  divideBtn.addEventListener('click', async () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    try {
      const result = await calculadora_backend.divide(num1, num2);
      displayResults(result);
    } catch (error) {
      displayResults("Error: " + error.message);
    }
  });

  //funcion que muestra el resultado
  function displayResults(result) {
    const resultDiv = document.getElementById("result");

    // mostrar resultado
    resultDiv.textContent = `Result: ${result}`;
  }
});
