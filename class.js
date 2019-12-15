//JS의 ES6 기본클래스 형식

class Person{
  constructor(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
  }

  sum() {
    return this.first+this.second;
  }

}

class PersonPlus extends Person{
  constructor(name, first, second, third){
    super(name, first, second);
    this.third = third;
  }
  sum(){
    return super.sum()+this.third;
  }

  avg(){
    return (this.first+this.second+this.third)/3;
  }

}

// Person.prototype.sum = function(){
//   return `prototype ${ this.first+this.second}` 
// }


var park = new PersonPlus('park', 10,20,30);
console.log('park :', park);
console.log('park.sum() :',park.sum());

console.log(park.avg());
// function Person(name, first, second, third){
//   this.name = name,
//   this.first = first;
//   this.second = second;
//   this.third = third;
// }

// Person.prototype.sum = function(){
//   return this.first + this.second + this.third;
// }


// var park = new Person('park', 10, 20, 30);
// console.log('park :', park)
// console.log('park.sum() :',park.sum())
