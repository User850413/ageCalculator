//글자 제한(day - 2 / month - 2 / year - 4)

const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const yearNow = new Date().getFullYear();

function Max(unit, num, min) {
  numLength = `${num}`;
  if (unit.value.length) {
    if (unit.value >= num) {
      unit.value = num;
    } else if (unit.value.length == numLength.length && unit.value <= min) {
      unit.value = min;
    }
  }
}

day.setAttribute("oninput", "Max(day, 31, 1)");
month.setAttribute("oninput", "Max(month, 12, 1)");
year.setAttribute("oninput", "Max(year, yearNow, 1900)");

// 나이 계산
