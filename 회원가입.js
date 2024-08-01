let userId = document.querySelector("#user-id");
let pw1 = document.querySelector("#user-pw1");
let pw2 = document.querySelector("#user-pw2");

userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId() {
  if (userId.ariaValueMax.length < 4 || userId.ariaValueMax.length > 15) {
    alert("4 ~ 15자리를 사용해주세요!");
    userId.select();
  }
}

function checkPw() {
  if (pw1.value.length < 8) {
    alert("8자리 이상을 사용해주세요!");
    pw1.value = "";
    pw1.focus();
  }
}

function comparePw() {
  if (pw1.value != pw2.value) {
    alert("암호가 서로 다릅니다! 다시 입력해주세요.");
    pw2.value = "";
    pw2.focus();
  }
}
