//2.함수 vs 메소드의 차이. this의 유무

var kim = {name: 'kim', first: 10, second: 20}
var park = {name: 'park', first: 10, second: 10}

function sum(prefix) {
  return prefix+(this.first + this.second);
}

console.log('sum.call(kim) :', sum.call(kim, 'hi'));

var kimSum = sum.bind(kim, '-> ');
console.log('kimSum() :', kimSum());
