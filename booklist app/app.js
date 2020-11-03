// select all elements

const inputs = document.querySelectorAll("input");
const bookNameEl = document.querySelector(".book-name");
const bookAuthorEl = document.querySelector(".book-author");
const bookYearEl = document.querySelector(".book-year");
const btnSubmit = document.querySelector(".btnSubmit");
const booklistTbody = document.querySelector(".book-list-tbody");

// add eventlistener

btnSubmit.addEventListener("click", getValue);

// functoionality

function getValue(e) {
  // prevent the default behavior of submit button
  e.preventDefault();
  // get all values
  let bookName = bookNameEl.value;
  let bookAuthor = bookAuthorEl.value;
  let bookYear = bookYearEl.value;
  // create tr
  let tr = document.createElement("tr");
  // append the tr into tbody
  booklistTbody.appendChild(tr);
  // create 3 td for 3 inputs values via for loop
  let i = 1;
  let length = inputs.length;
  for (i; i <= length; i++) {
    // create td element
    let td = document.createElement("td");
    // append the td into tr
    tr.appendChild(td);
    if (i == 1) {
      td.innerText = bookName;
    } else if (i == 2) {
      td.innerText = bookAuthor;
    } else if (i == 3) {
      td.innerText = bookYear;
    }
    console.log(bookYear);
    console.log(i);
  }
  // let's clear all input field
  bookNameEl.value = "";
  bookAuthorEl.value = "";
  bookYearEl.value = "";
}
