
const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");

let count = 0;

incrementButton.addEventListener("click", () => {
  count++;
  countElement.textContent = count;
});

//HTML -> JS
let count1 = 0;

const resultH1 = document.getElementById("h1")[0];
const plusbutton = document.getElementById("button")[0];
//button 누르면 숫자 증가 하자
plusbutton.addEventListener("click", 처리함수);
//증가한 숫자 화면에 표시하자
function 처리함수() {
  count++;
  resultH1.innerHTML = count; 
}
