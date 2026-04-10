// ## **문제 7**

// 다음 문자열 배열을 공백 기준으로 쪼개고, 최종 결과를 하나의 배열로 만드시오.

const lines = ['red blue', 'green yellow', 'black white'];

const result = lines.flatMap(line => line.split(' '));

//flatMap()은 map()을 한 뒤, 결과를 한 단계 펼쳐서(flatten) 합치는 함수

console.log(result);  