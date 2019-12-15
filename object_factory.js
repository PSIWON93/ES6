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

// 안의 내용을 변경할때 비합리적임 
// 객체를 찍어내는 공장! 틀을 변경하기 

var d1 = new Date('2019-4-10');
console.log("d1.getFullYear() : ", d1.getFullYear());

//객체에서 변수를 정의하는 것과 함수에서의 변수 초기화 다름. 혼돈하지 말 것 
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

//Person 안에있는 값으로 새 객체를 만들게 됨 
//constructor 생성자 함수 
console.log('new Person() :', new Person());