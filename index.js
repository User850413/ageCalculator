//글자 제한(day - 2 / month - 2 / year - 4)

const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const yearNow = new Date().getFullYear();
const monthNow = new Date().getMonth() + 1;
const dayNow = new Date().getDate();
const btn = document.querySelector(".btn");

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
function errFocus(unit) {
  day.classList.remove("err");
  month.classList.remove("err");
  year.classList.remove("err");
  if (unit) {
    unit.focus();
    unit.classList.add("err");
  }
}
btn.addEventListener("click", () => {
  const dayValue = day.value;
  const monthValue = month.value;
  const yearValue = year.value;
  if (dayValue && monthValue && yearValue) {
    errFocus();
    console.log("success!");
  } else if (!dayValue) {
    errFocus(day);
  } else if (!monthValue) {
    errFocus(month);
  } else if (!yearValue) {
    errFocus(year);
  }
});

// 나이 계산 후 출력
