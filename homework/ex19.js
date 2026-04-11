// ## **약간 어려운 문제 4**

// 다음 데이터를 다음 규칙으로 정렬하시오.

// 1. `score`가 큰 순서
// 2. `score`가 같으면 `profile.level`이 작은 순서
//     1. `profile.level`이 없으면 가장 뒤로 보냄(제일 큰수취급 : `Infinity`)
// 3. 그래도 같으면 `name` 가나다순

// players.sort(...)로 전체 배열을 정렬한다
// 먼저 score를 비교한다
// score가 다르면 점수가 높은 사람이 앞에 온다
// score가 같으면 profile.level을 비교한다
// level이 낮은 사람이 앞에 온다
// level도 같으면 name을 가나다순으로 비교한다

const players = [
  { name: '민수', score: 90, profile: { level: 2 } },
  { name: '지연', score: 95, profile: null },
  { name: '도윤', score: 90, profile: { level: 1 } },
  { name: '서윤', score: 95, profile: { level: 3 } }
];

players.sort((a, b) => {
  if (b.score !== a.score) return b.score - a.score;

  const levelA = a.profile?.level ?? Infinity;
  const levelB = b.profile?.level ?? Infinity;
  if (levelA !== levelB) return levelA - levelB;

  //profile?.level은 profile이 없거나 null이어도 에러 없이 접근
  //?? Infinity는 level이 없을 때 Infinity를 대신 넣는 거

  //Infinity는 자바스크립트에서 무한대처럼 아주 큰 숫자
  return a.name.localeCompare(b.name);


});

console.log(players);
/* [
  { name: '서윤', score: 95, profile: { level: 3 } },
  { name: '지연', score: 95, profile: null },
  { name: '도윤', score: 90, profile: { level: 1 } },
  { name: '민수', score: 90, profile: { level: 2 } }
]
*/


