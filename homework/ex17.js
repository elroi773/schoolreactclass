// ## **약간 어려운 문제 2**

// - 다음 상품 데이터에서 모든 옵션 이름을 하나의 배열로 만들고, 중복을 제거한 뒤 오름차순 정렬

const products = [
  {
    name: '셔츠',
    options: ['S', 'M', 'L']
  },
  {
    name: '바지',
    options: ['M', 'L', 'XL']
  },
  {
    name: '모자',
    options: ['FREE']
  }
];

const allOptions = [...new Set(products.flatMap(product => product.options))].sort((a, b) =>
  a.localeCompare(b)
);

console.log(allOptions);

// ['FREE', 'L', 'M', 'S', 'XL']
//flatMap()으로 모든 옵션을 하나의 배열로 만들고, Set으로 중복 제거한 뒤, sort()로 오름차순 정렬하는 흐름이야