const selectMajor = document.getElementById("major");
const selectTime = document.getElementById("time");
const selectDay = document.getElementById("day");
const button = document.getElementById("output");

let majorValue;
let timeValue;
let dayValue;

selectMajor.addEventListener("change", (e) => {
  majorValue = e.target.value;
});

selectTime.addEventListener("change", (e) => {
  timeValue = e.target.value;
});

selectDay.addEventListener("change", (e) => {
  dayValue = e.target.value;
});

button.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("show").innerHTML =
    "당신이 선택한 전공은 " +
    majorValue +
    "이며 " +
    "<br>" +
    "선택한 타임은 " +
    timeValue +
    "이고" +
    "<br>" +
    "선택한 시간은 " +
    dayValue +
    "입니다.";
});
