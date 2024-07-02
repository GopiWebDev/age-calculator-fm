const dayInput = document.querySelector('[data-day-input]');
const monthInput = document.querySelector('[data-month-input]');
const yearInput = document.querySelector('[data-year-input]');
const button = document.querySelector('[data-submit]');
const yearResult = document.querySelector('[data-year-result]');
const monthResult = document.querySelector('[data-month-result]');
const dayResult = document.querySelector('[data-day-result]');

button.addEventListener('click', () => {
  //   if (
  //     dayInput.value === '' ||
  //     monthInput.value === '' ||
  //     yearInput.value === ''
  //   )
  //     return;
  //   checkDate(dayInput.value);
  //   checkYear(yearInput.value);
  checkMonth(monthInput.value);
});

function checkDate(date) {
  if (date <= 0 || date > 31) {
    console.log('INVALID DATE');
  } else {
    console.log(new Date().getDate());
  }
}

function checkYear(year) {
  if (year > new Date().getFullYear()) console.log('ENTER PAST');
  if (year.length < 4 || year.length > 4) console.log('INVALID YEAR');
  else {
    yearResult.innerText = new Date().getFullYear() - year;
  }
}

function checkMonth(month) {
  if (month > 12 || month < 1) console.log('INVALID MONTH');
  else {
    monthResult.innerText = new Date().getMonth() + 1 - month;
  }
}
