const classes = [
  [
    { name: '민수', submitted: true, scores: [80, 90] },
    { name: '지연', submitted: false, scores: [100, 70] }
  ],
  [
    { name: '도윤', submitted: true, scores: [85, 95] }
  ]
];
// 학생들이 제출한 점수들의 평균을 구하는 코드
const submittedScores = [];
let totalScore = 0; 

classes.forEach(classGroup => {
  classGroup.forEach(student => {
    if (student.submitted) {
      const averageScore = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
      submittedScores.push(averageScore);
      totalScore += averageScore;
    }
  });
});

const average = totalScore / submittedScores.length;

console.log(submittedScores); // [80, 90, 85, 95]
console.log(average);         // 87.5