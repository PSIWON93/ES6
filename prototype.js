function Person(name, first, second, third){
  this.name = name,
  this.first = first;
  this.second = second;
  this.third = third;

  // 매번 생기는 함수생성에 메모리할당이 문제가 됨 생산성 저하 
}

//객체가 매번 생성될때마다 실행하지 x 메모리를 아낌
// 아래처럼 사용하면 1억개의 객체가 있을경우
//1억개의 객체가 아래의 함수를 공유함
Person.prototype.sum = function(){ 
  return this.first + this.second + this.third;
}

// 자바스크립트는 객체 자체의 sum을 찾아보고 
//없다면 객체생성자의 prototype 이라는 sum을 실행

var kim = new Person('kim', 10, 20, 30);
console.log(kim)
console.log(kim.sum())
