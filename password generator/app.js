// select all element

const pwinputEl = document.getElementById('pw-input');
const btnCopyEl = document.getElementById('btnCopy');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const btnGenerateEl = document.getElementById('btnGenerate');

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=?<>';

function getUppercase() {
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getLowercase() {
  return lowercase[Math.floor(Math.random() * lowercase.length)]
}

function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)]
}

function getPassword() {
  const x = '';
  const length = lengthEl.value;
  console.log(length);
}

btnGenerateEl.addEventListener("click", getPassword);
