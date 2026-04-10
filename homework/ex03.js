// ## **문제 1**

// - 다음 배열에서 **모든 학생이 과제를 제출했는지** 판별하시오.


const students = [
  { name: '민수', submitted: true },
  { name: '지연', submitted: true },
  { name: '도윤', submitted: false }
];

const allSubmitted = students.every(student => student.submitted);
//every()는 배열의 모든 요소가 조건을 만족하는지 검사하는 함수

//students 배열 안의 각 student를 하나씩 확인하면서
// student.submitted 값이 모두 true인지 검사
// 전부 true면 allSubmitted는 true
// 하나라도 false면 allSubmitted는 false

console.log(allSubmitted); // false