//컨스트럭터의 상속방식

function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;

}

Person.prototype.sum = function(){
  return this.first + this.second;
}

function PersonPlus (name, first, second, third) {
  //class에서 super와 같은 역할
  Person.call(this, name, first, second);
  this.third = third;
}

//* __proto__ vs Object.create(object) 차이점 
// __proto__ 는 비표준 아래대로 실행하면 park.constructor는 PersonPlus 생성자 리플레이스 하지않음 
//PersonPlus.prototype.__proto__ = Person.prototype; 

//아래대로만 실행하면 park.constructor는 Person, Person가 PersonPlus의 생성자로 리플레이스됨 
PersonPlus.prototype = Object.create(Person.prototype);
//다시 PersonPlus의 생성자를 적용하게함 
PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function(){
  return (this.first+this.second+this.third)/3;
}

var park = new PersonPlus('park', 10, 20, 30);
console.log('park.sum()', park.sum());
console.log('park.avg()', park.avg());
console.log('park.constructor', park.constructor);