// ## **문제 6**

// 다음 중첩 배열을 모두 펼치시오.

const arr = [1, [2, [3, [4, 5]]]];

const flattened = arr.flat(Infinity);
//flat()는 배열을 평탄화하는 함수
//Infinity를 인자로 주면 모든 중첩 배열을 평탄화함
//flat 펼치다

console.log(flattened); // [1, 2, 3, 4, 5]