// # **약간 어려운 문제 1**

// - 다음 데이터에서 조건을 모두 만족하는 사용자만 골라 **닉네임 배열**을 만드시오.
// - 조건:
//   - `active`가 `true`여야 한다.
//   - `scores`의 모든 값이 60 이상이어야 한다.
//   - 닉네임은 `profile.nickname`에 있으며, 없으면 `'익명'`을 사용한다.
//   - 결과는 닉네임 오름차순으로 정렬한다.

const users = [
  { active: true, profile: { nickname: 'mango' }, scores: [70, 80, 90] },
  { active: true, profile: null, scores: [100, 20, 90] },
  { active: false, profile: { nickname: 'apple' }, scores: [90, 90, 90] },
  { active: true, profile: {}, scores: [60, 61, 99] }
];

const nicknames = users
  .filter(user => user.active)
  .filter(user => user.scores.every(score => score >= 60))
  .map(user => user.profile?.nickname ?? '익명')
  .sort((a, b) => a.localeCompare(b));

console.log(nicknames);


//active인 사용자만 남기고, 점수가 전부 60 이상인 사람만 다시 걸러낸 뒤, 닉네임을 뽑아서 없으면 '익명'으로 바꾸고, 마지막에 이름순으로 정렬하는 흐름이
//1. filter()로 active가 true인 사용자만 남긴다
//2. filter()로 scores 배열의 모든 점수가 60 이상인 사용자만 남긴다
//3. map()으로 profile.nickname을 뽑아내는데, profile이 없거나 nickname이 없으면 '익명'으로 대체한다
//4. sort()로 닉네임을 가나다순으로 정렬한다