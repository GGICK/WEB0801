// let div = document.querySelector("div");
// function changeContent() {
//   div.outerHTML = "<h1>DOM API</h1><p>선수조건 : 없음</p>";
// }

// const elem = document.getElementById("banana");
// elem.style.color = "red";

// const elem2 = document.getElementsByTagName("li");

// [...elem2].forEach((elem) => {
//   elem.style.color = "red";
// });

// const elem3 = document.getElementsByClassName("fruit");
// [...elem3].forEach((elem3) => {
//   elem3.style.color = "red";
// });

// const elem4 = document.getElementsByClassName("fruit apple");
// [...elem4].forEach((elem4) => {
//   elem4.style.color = "blue";
// });

//class 이름을 바꾸는거
// let boxEl = document.querySelector(".box");
// boxEl.addEventListener("click", function () {
//   console.log("click!");
//   if (boxEl.classList.contains("active")) {
//     boxEl.classList.remove("active");
//   } else {
//     boxEl.classList.add("active");
//   }
// });

//더 쉽게 toggle을 이용해서 class이름 바꾸는거
// let boxEl = document.querySelector(".box");
// boxEl.addEventListener("click", function () {
//   console.log("click!");
//   boxEl.classList.toggle("active");
// });

// const boxEls = document.querySelectorAll(".box");
// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index}`);
//   console.log(index, boxEl);
// });

// const div = document.getElementById("my_div");
// const clearbtn = document.getElementById("clearbtn");
// const result = document.getElementById("result");

// div.addEventListener("click", (event) => {
//   result.innerHTML += "<div>click<div>";
// });

// div.addEventListener("mousedown", (event) => {
//   result.innerHTML += "<div>mousedown</div>";
// });

// div.addEventListener("mouseup", (event) => {
//   result.innerHTML += "<div>mouseup</div>";
// });

// clearbtn.addEventListener("click", (event) => {
//   result.innerHTML = "";
// });

// function sayHi(name) {
//   console.log(`hi ${name}`);
// }

// const button = document.getElementById("test");
// button.onclick = function () {
//   console.log("button clicked1");
// };
// button.onclick = function () {
//   console.log("button clicked2");
// };

// const button2 = document.getElementById("test2");
// button2.onclick = function () {
//   console.log("button clicked1");
// };
// button2.addEventListener("click", function () {
//   console.log("addeventlistener");
// });

// const button3 = document.getElementById("test3");

// const handleClick = () => console.log("button click");

// button3.addEventListener("click", handleClick);
// button3.addEventListener("click", handleClick);

// const button4 = document.getElementById("test4");

// const handleClick2 = () => console.log("button click");

// button4.addEventListener("click", handleClick2);
// button4.removeEventListener("click", handleClick2);

// const button5 = document.getElementById("test5");

// button5.addEventListener("click", function add() {
//   console.log("button click");
//   button5.removeEventListener("click", add);
// });

// const button6 = document.getElementById("test6");
// const handleClick3 = () => console.log("button click");

// button6.onclick = handleClick3;
// button6.removeEventListener("click", handleClick3);
// button6.onclick = null;

// const msg = document.querySelector(".message");

// function showCoords(x) {
//   msg.textContent = `clientX : ${x.clientX}, clientY : ${x.clientY}`;
// }

// const fruits = document.getElementById("fruits2");

// function activate({ target }) {
//   [...fruits.children].forEach((fruit) => {
//     fruit.classList.toggle("active", fruit === target);
//   });
// }

// document.getElementById("apple2").onclick = activate;
// document.getElementById("banana2").onclick = activate;
// document.getElementById("cherry2").onclick = activate;

// const boxbox = document.querySelector(".boxbox");
// const initialMousepos = { x: 0, y: 0 };
// const offset = { x: 0, y: 0 };

// const move = (e) => {
//   offset.x = e.clientX - initialMousepos.x;
//   offset.y = e.clientY - initialMousepos.y;
//   boxbox.style.transform = `translate3d(${offset.x}px,${offset.y}px,0)`;
// };

// boxbox.addEventListener("mousedown", (e) => {
//   initialMousepos.x = e.clientX - offset.x;
//   initialMousepos.y = e.clientY - offset.y;
//   document.addEventListener("mousemove", move);
// });

// document.addEventListener("mouseup", () => {
//   document.removeEventListener("mousemove", move);
// });

////////////////////////////////////////////////////////////////////////////////
// const boxbox = document.querySelector(".boxbox");
// const initialMousepos2 = { x: 0, y: 0 };
// const offset = { x: 0, y: 0 };

// document.addEventListener("click", (e) => {
//   const newX = e.clientX;
//   const newY = e.clientY;
//   initialMousepos2.x = e.clientX;
//   initialMousepos2.y = e.clientY;
//   offset2.x = e.clientX - initialMousepos2.x;
//   offset2.y = e.clientY - initialMousepos2.y;
//   offset.x = newX;
//   offset.y = newY;
//   boxbox.style.transform = `translate3d(${offset.x}px,${offset.y}px,0)`;
// });

//   const x = document.forms[i].id;
//   console.log(x);

// document.getElementById("show").innerHTML = x;

// function getInput() {
//   const x = document.forms["form1"];
//   let text = "";
//   for (let i = 0; i < x.length; i++) {
//     text += x.elements[i].value + "<br>";
//     document.getElementById("show2").innerHTML = text;
//   }
// }

// function myFunction() {
//   let id = document.getElementById("id").value;
//   let pass = document.getElementById("pass").value;
//   console.log(pass);

//   if (pass.length < 1) {
//     document.getElementById("show3").innerHTML = "비밀번호를 입력해 주세요.";
//   } else if (pass.length > 10) {
//     document.getElementById("show3").innerHTML =
//       "비밀번호를 10자리 이하로 만들어주세요.";
//   } else {
//     document.getElementById("show3").innerHTML =
//       "비밀번호 생성이 완료되었습니다.";
//   }
//   ["id", "pass"].forEach((field) => (documentById(field).value = ""));

//   setTimeout(() => {
//     document.getElementById("show3").innerHTML = "";
//   }, 10000);
// }

// let check = document.querySelector("#shippingInfo");
// check.addEventListener("click", function () {
//   if (check.checked == true) {
//     document.querySelector("#shippingName").value =
//       document.querySelector("#billingName").value;
//     document.querySelector("#shippingTel").value =
//       document.querySelector("#billingTel").value;
//     document.querySelector("#shippingAddr").value =
//       document.querySelector("#billingAddr").value;
//   } else {
//     document.querySelector("#shippingName").value = "";
//     document.querySelector("#shippingTel").value = "";
//     document.querySelector("#shippingAddr").value = "";
//   }
// });

const x = document.getElementById("name");
x.onfocus = function () {
  changeBgcolorFocus();
};
x.onblur = function () {
  changeBgcolorBlur();
};

function changeBgcolorFocus() {
  x.style.backgroundColor = "pink";
}
function changeBgcolorBlur() {
  x.style.backgroundColor = "gray";
}

const keyInput = document.getElementById("keyInput");
// let text = "";
// keyInput.addEventListener("keydown", showKey);
// function showKey(e) {
//   text += e.key;
//   document.getElementById("show").innerHTML = text;
// }

keyInput.addEventListener("keyup", chnageUpper);
function chnageUpper() {
  keyInput.value = keyInput.value.toUpperCase();
}

const selectFruits = document.getElementById("select");
selectFruits.addEventListener("change", (e) => {
  document.getElementById("show").innerHTML =
    "내가 좋아하는 과일은 " + e.target.value + " 입니다";
});
