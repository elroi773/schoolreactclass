// ## **문제 2. 안전한 정렬 기준 작성**

// - 하단의 데이터를 보면 누락된 데이터로 인해 안전하게 처리 될 수 없음.
// - 안전한 데이터 처리를 위해  `??`와 `?.`를 사용하여 코드를 수정하기


const users = [
  { id: 1, profile: { nickname: 'mango' }, point: 0 },
  { id: 2, profile:  { nickname: 'soda' }, point: 0 },
  { id: 3, profile: null, point: 15 },
  { id: 5, profile: { nickname: 'apple' }, point: null },
  { id: 4, profile: null, point: 1 }
];

users.sort((a, b) => {
  const pointA = a.point ?? 0;
  const pointB = b.point ?? 0;
  //??는 null 또는 undefined이면 오른쪽 값을 사용하라는 뜻
  if (pointB !== pointA) return pointB - pointA;

  const nameA = a.profile?.nickname ?? '';
  const nameB = b.profile?.nickname ?? '';
  return nameA.localeCompare(nameB);
});

console.log(users);


//sort() : 

// array.sort((a, b) => {
//   // 비교 결과를 숫자로 반환
// });
