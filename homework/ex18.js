// ## **약간 어려운 문제 3**

// - 다음 데이터에서 주문 상태가 `cancelled`가 아닌 주문만 남기고,
// - 각 주문의 상품 가격 합계를 구한 뒤,
// - 총액이 높은 순으로 정렬하시오.
// - 가격 정보가 없으면 0으로 처리하시오.

const orders = [
  {
    id: 1,
    status: 'done',
    items: [
      { name: 'A', price: 3000 },
      { name: 'B', price: 2000 }
    ]
  },
  {
    id: 2,
    status: 'cancelled',
    items: [
      { name: 'C', price: 10000 }
    ]
  },
  {
    id: 3,
    status: 'done',
    items: [
      { name: 'D' },
      { name: 'E', price: 4000 }
    ]
  }
];

const result = orders
  .filter(order => order.status !== 'cancelled')
  .map(order => ({
    id: order.id,
    total: order.items.reduce((sum, item) => sum + (item.price || 0), 0)
  }))
  .sort((a, b) => b.total - a.total);


console.log(result);

//[ { id: 1, total: 5000 }, { id: 3, total: 4000 } ]