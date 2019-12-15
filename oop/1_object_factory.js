//1.기본개념 : 객체는 왜 필요한가? 우리는 왜 객체지향방식으로 개발을 해야하는가 
//객체의 변수명, 메소드를 변경할때 비합리적임. OOP는 객체를 찍어내는 공장이다. 가 OOP 수업의 키포인트. 

var kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function() {
    return this.first+this.second;
  }
}

var lee = {
  name: 'lee',
  first: 10,
  second: 10,
  sum: function() {
    return this.first+this.second;
  }
}

console.log('kim.sum() :', kim.sum());
console.log('lee.sum() :', lee.sum());

var d1 = new Date('2019-4-10');
console.log("d1.getFullYear() : ", d1.getFullYear());

function Person(){
  this.name = 'park';
  this.first = 10;
  this.second = 20;
  this.third = 30;
  this.sum = function () {
    return this.first + this.second + this.third;
  }
}

console.log('Person() :', Person());

console.log('new Person() :', new Person());