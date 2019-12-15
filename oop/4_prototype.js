//4.ES6의 클래스선언 이전의 클래스개념 적용방식

function Person(name, first, second, third){
  this.name = name,
  this.first = first;
  this.second = second;
  this.third = third;
}

// Person의 객체안에 직접적으로 메소드를 넣지 않는다. 매번 생성될때마다 함수가 실행되어 메모리낭비가 발생하기 때문이다.
// 아래처럼 prototype을 사용하면 1억개의 객체가 있을경우 1억개의 객체가 아래의 함수를 공유한다. 즉 메모리낭비가 줄어든다.
Person.prototype.sum = function(){ 
  return this.first + this.second + this.third;
}

// 자바스크립트는 객체안에서 객체자체의 sum을 찾아보고, 없다면 객체생성자의 prototype 이라는 sum을 실행한다.

var kim = new Person('kim', 10, 20, 30);
console.log('kim :', kim);
console.log('kim.sum() :', kim.sum());
