//5.프로토타입의 상속

var superObj = {superVal:'super'}
//var subObj = {subVal:'sub'}

//subObj가 superObj의 프로토타입이 되도록 선언한다.
//subObj.__proto__ = superObj;

//superObj를 부모로하는 객체 만들기 
// __proto__는 비표준이므로 아래의 방식으로 프로토링크를 만드는 방식이 좋다. 
var subObj = Object.create(superObj);
subObj.subVal = 'sub';

console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);

subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);

kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum(){
    return this.first + this.second
  }
}

park = {
  name: 'park',
  first: 20,
  second: 30
}

park.__proto__ = kim;


console.log('kim.sum() :', kim.sum());
console.log('park.sum() :', park.sum());
