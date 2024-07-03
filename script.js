const dayInput = document.querySelector('[data-day-input]');
const monthInput = document.querySelector('[data-month-input]');
const yearInput = document.querySelector('[data-year-input]');
const button = document.querySelector('[data-submit]');
const yearResult = document.querySelector('[data-year-result]');
const monthResult = document.querySelector('[data-month-result]');
const dayResult = document.querySelector('[data-day-result]');
const dateError = document.querySelector('[data-date-error]');
const monthError = document.querySelector('[data-month-error]');
const yearError = document.querySelector('[data-year-error]');

button.addEventListener('click', () => {});

// function checkYear(yearInput) {
//   let year;
//   // Year Calculation
//   if (yearInput === '' || yearInput == null) {
//     yearError.innerText = 'This field is required';
//   } else if (yearInput > new Date().getFullYear()) {
//     yearError.innerText = 'Must be in the past';
//   } else if (yearInput.length < 4 || yearInput.length > 4) {
//     yearError.innerText = 'Enter a valid year';
//   } else {
//     yearError.innerText = '';
//     year = new Date().getFullYear() - yearInput;
//   }
//   return year;
// }

// function checkMonth(monthInput) {
//   let month;
//   // Month Calculation
//   let invalidMonth;
//   if (monthInput === '' || monthInput == null) {
//     monthError.innerText = 'This field is required';
//   } else if (
//     monthInput > 12 ||
//     monthInput < 1 ||
//     monthInput.length > 2 ||
//     monthInput !== '' ||
//     monthInput !== null
//   ) {
//     invalidMonth = true;
//     monthError.innerText = 'Must be a valid month';
//   } else if (monthInput < new Date().getMonth() && !invalidMonth) {
//     monthError.innerText = '';
//     month = new Date().getMonth() + 1 - monthInput;
//   } else if (monthInput > new Date().getMonth() && !invalidMonth) {
//     monthError.innerText = '';
//     month = 12 + new Date().getMonth() + 1 - monthInput;
//   }
//   return month;
// }

// function checkDate(dateInput) {
//   let date;
//   // Date Calculation
//   if (dateInput === '' || dateInput == null) {
//     dateError.innerText = 'This field is required';
//   } else if (dateInput <= 0 || dateInput > 31) {
//     dateError.innerText = 'Must be a valid date';
//   }
//   if (dateInput < new Date().getDate() && dateInput === 0) {
//     date = new Date().getDate() - dateInput;
//   }
//   if (dateInput > new Date().getDate()) {
//     date =
//       new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate() +
//       new Date().getDate() -
//       dateInput;
//   }
//   return date;
// }

// function render(year, month, date) {
//   yearResult.innerText = year;
//   monthResult.innerText = month;
//   dayResult.innerText = date;
// }

// function checkError() {
//   return true;
// }
