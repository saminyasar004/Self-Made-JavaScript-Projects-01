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
  let x = '';
  const length = lengthEl.value;
  let i = 0;
  for (i; i < length; i++) {
    const xs = generatePassword();
    x += xs;
  };
  pwinputEl.value = x;
}

function generatePassword() {
  let password = [];
  if (uppercaseEl.checked) {
    password.push(getUppercase());
  }
    if (lowercaseEl.checked) {
    password.push(getLowercase());
  }
    if (numbersEl.checked) {
    password.push(getNumbers());
  }
  if (symbolsEl.checked) {
    password.push(getSymbols());
  }
  if (!uppercaseEl.checked && !lowercaseEl.checked && !numbersEl.checked && !symbolsEl.checked) return password = [];
  if (lengthEl.value === 0) return password = [];
  return password[Math.floor(Math.random() * password.length)];
}

btnGenerateEl.addEventListener("click", getPassword);

btnCopyEl.addEventListener('click', () => {
  pwinputEl.select();
  document.execCommand('copy');
  pwinputEl.value = '';
  uppercaseEl.checked = false;
  lowercaseEl.checked = false;
  numbersEl.checked = false;
  symbolsEl.checked = false;
  alert('Your password is copied to your clipboard!');
});
