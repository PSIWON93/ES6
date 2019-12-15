// var park = {
//   name: 'park',
//   first: 10,
//   second: 20,
//   sum: function() {
//     return this.first+this.second;
//   }
// } 


// function Person(){
//   this.name = 'park';
//   this.first = 10;
//   this.second = 20;
//   this.third = 30;
//   this.sum = function () {
//     return this.first + this.second + this.third;
//   }
// }

// var park = new Person();

// console.log('park :', park);

function Person(name, first, second, third){
  this.name = name,
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  }
}

var park = new Person('siwon',10,20,30);
// 실행할때마다 객체가 양산된다 
// constructor 의 내용을 바꿀때 함께 다 바뀔수있다 . 

console.log('park: ', park);
console.log('park.sum() : ', park.sum());