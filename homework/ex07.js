// ## **문제 5**

// 다음 배열에서 `id`가 203인 사용자의 인덱스를 구하시오.

const users = [
  { id: 201, name: 'A' },
  { id: 202, name: 'B' },
  { id: 203, name: 'C' }
];

const index = users.findIndex(user => user.id === 203);

console.log(index); // 2