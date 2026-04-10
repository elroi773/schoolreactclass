//banana 를 지우고 grape melone 넣기 

const fruits = ['apple', 'banana', 'orange'];

fruits.splice(1, 1, 'grape', 'melon');

console.log(fruits);
// ['apple', 'grape', 'melon', 'orange']