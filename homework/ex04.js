// ## **문제 2**

// 다음 배열에서 **하나라도 100점 이상인 값이 있는지** 확인하시오.


const nums = [45, 60, 99, 88];

const hasHighScore = nums.some(num => num >= 100);
//some()은 배열에서 하나라도 조건을 만족하는 값이 있는지 확인하는 함수

console.log(hasHighScore); // false