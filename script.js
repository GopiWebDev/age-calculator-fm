const dayInput = document.querySelector('[data-day-input]');
const monthInput = document.querySelector('[data-month-input]');
const yearInput = document.querySelector('[data-year-input]');
const button = document.querySelector('[data-submit]');
const yearResult = document.querySelector('[data-year-result]');
const monthResult = document.querySelector('[data-month-result]');
const dayResult = document.querySelector('[data-day-result]');

button.addEventListener('click', () => {
  if (!checkError()) return;

  let year = checkYear(yearInput.value);
  let month = checkMonth(monthInput.value);
  let day = checkDate(dayInput.value);

  if (monthInput.value > new Date().getMonth()) {
    render(year - 1, month, day);
  } else if (dayInput.value > new Date().getDate()) {
    render(year, month - 1, day);
  } else {
    render(year, month, day);
  }
});

function checkYear(yearInput) {
  let year;
  // Year Calculation
  if (yearInput > new Date().getFullYear()) console.log('ENTER PAST');
  if (yearInput.length < 4 || yearInput.length > 4) console.log('INVALID YEAR');
  else {
    year = new Date().getFullYear() - yearInput;
  }
  return year;
}

function checkMonth(monthInput) {
  let month;
  // Month Calculation
  let invalidMonth;
  if (monthInput > 12 || monthInput < 1 || monthInput.length > 2) {
    invalidMonth = true;
    console.log('INVALID MONTH');
  }
  if (monthInput < new Date().getMonth() && !invalidMonth) {
    month = new Date().getMonth() + 1 - monthInput;
  }
  if (monthInput > new Date().getMonth() && !invalidMonth) {
    month = 12 + new Date().getMonth() + 1 - monthInput;
  }
  return month;
}

function checkDate(dateInput) {
  let date;
  // Date Calculation
  if (dateInput <= 0 || dateInput > 31) {
    console.log('INVALID DATE');
  }
  if (dateInput < new Date().getDate() && dateInput === 0) {
    date = new Date().getDate() - dateInput;
  }
  if (dateInput > new Date().getDate()) {
    date =
      new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate() +
      new Date().getDate() -
      dateInput;
  }
  return date;
}

function render(year, month, date) {
  yearResult.innerText = year;
  monthResult.innerText = month;
  dayResult.innerText = date;
}

function checkError(yearInput, monthInput, dateInput) {
  if (yearInput === '') return false;
  if (monthInput === '') return false;
  if (dateInput === '') return false;
  return false;
}
