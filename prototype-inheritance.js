var superObj = {superVal:'super'}
//var subObj = {subVal:'sub'}
//subObj는 superObj의 자식 
//subObj.__proto__ = superObj;

//오브젝트에 superObj를 부모로하는 객체를 만들기 
// __proto__ 보다 아래의 방식으로 __proto__ 프로토링크를 만드는 방식이 좋다. 
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
