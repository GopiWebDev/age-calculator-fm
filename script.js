const yearInput = document.querySelector('[data-year-input]');
const monthInput = document.querySelector('[data-month-input]');
const dayInput = document.querySelector('[data-day-input]');
const button = document.querySelector('[data-submit]');
const yearResult = document.querySelector('[data-year-result]');
const monthResult = document.querySelector('[data-month-result]');
const dayResult = document.querySelector('[data-day-result]');
const dateError = document.querySelector('[data-date-error]');
const monthError = document.querySelector('[data-month-error]');
const yearError = document.querySelector('[data-year-error]');

button.addEventListener('click', () => {
  checkYear();
  checkMonth();
  checkDate();

  if (checkYear() && checkMonth() && checkDate()) {
    calculate();
  }
});

function checkYear() {
  if (yearInput.value === '' || yearInput.value == null) {
    yearError.innerText = 'This field is required';
    return false;
  } else if (yearInput.value > new Date().getFullYear()) {
    yearError.innerText = 'Must be in the past';
    return false;
  } else if (yearInput.value.length < 4 || yearInput.value.length > 4) {
    yearError.innerText = 'Enter a valid year';
    return false;
  } else {
    yearError.innerText = '';
    return true;
  }
}

function checkMonth() {
  if (monthInput.value === '' || monthInput.value == null) {
    monthError.innerText = 'This field is required';
    return false;
  } else if (monthInput.value > 12 || monthInput.value < 1) {
    monthError.innerText = 'Must be a valid month';
    return false;
  } else {
    monthError.innerText = '';
    return true;
  }
}

function checkDate() {
  let day = parseInt(dayInput.value);
  let month = parseInt(monthInput.value);
  let year = parseInt(yearInput.value);

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  if (dayInput.value === '' || dayInput.value == null) {
    dateError.innerText = 'This field is required';
    return false;
  } else if (day <= 0 || day > 31) {
    dateError.innerText = 'Must be a valid date';
    return false;
  } else if (
    (month === 4 || month === 6 || month === 9 || month === 11) &&
    day > 30
  ) {
    dateError.innerText = 'Must be a valid date';
    return false;
  } else if (month === 2) {
    if (isLeapYear(year) && day > 29) {
      dateError.innerText = 'Must be a valid date';
      return false;
    } else if (!isLeapYear(year) && day > 28) {
      dateError.innerText = 'Must be a valid date';
      return false;
    }
  } else {
    dateError.innerText = '';
    return true;
  }
}

function calculate() {
  //   Year Calculation
  let currentYear = new Date().getFullYear();
  year = currentYear - yearInput.value;

  //   Months Calculation
  function calculateMonth() {
    let currentMonth = new Date().getMonth() + 1;
    let month = currentMonth - parseInt(monthInput.value);

    if (month <= 0) {
      month += 12;
      return month;
    }
    return month;
  }

  month = calculateMonth();

  //   Days Calculation
  function calculateDay() {
    let currentDay = new Date().getDate();
    if (dayInput.value < currentDay && dayInput.value === 0) {
      day = currentDay - dayInput.value;
      return day;
    }
    if (dayInput.value > currentDay) {
      day =
        new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate() +
        new Date().getDate() -
        dayInput.value;
      return day;
    } else {
      day = new Date().getDate() - dayInput.value;
      return day;
    }
  }

  day = calculateDay();

  //   Final Result
  if (monthInput.value > new Date().getMonth()) {
    year -= 1;
  }
  if (dayInput.value > new Date().getDate()) {
    month -= 1;
  } else if (
    monthInput.value > new Date().getMonth() &&
    dayInput.value > new Date().getDate()
  ) {
    year -= 1;
    month -= 1;
  }
  if (month === 12) {
    year += 1;
    month = 0;
  }

  render(year, month, day);
}

function render(year, month, day) {
  yearResult.innerText = year;
  monthResult.innerText = month;
  dayResult.innerText = day;
}
