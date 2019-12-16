// //Practice 1 : numbers 각 인덱스의 값에 2를 곱한 수를 doubledNumbers에 넣기 


// //map
// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = [];

// //imperative = mutable ( 기존의 값을 변경하는 방식 ) /   ex) for loop
// let i = 1;
// i += 1;
// i;

// //state is a value of a variable at a moment. 


// //declarative = immutable ( 기존의 값은 냅두고 그저 이용만해서 새로운 배열을 반환)
// let doubledNumbers = numbers.map(x => x*2);




//Practice 2 : create a new array including only height of each image. 
let images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

let height = [];


height = images.map(x => x.height);
console.log(`height => ${height}`);



//Practice 3 : create a new array including speed of each item: distance/time
let trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];

let speeds = [];

speeds = trips.map(x => x.distance / x.time );
console.log(`height => ${speeds}`);