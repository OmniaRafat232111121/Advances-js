
// const title='javscrip library';
// const url=title.split( " ").reverse().join("__").toLowerCase();
// console.log(url);
/*Array length*/
//sparse array
//  let numbers=[10,20,,39];
// // console.log(numbers.length);

//  numbers[10]=100;
// console.log(numbers.length);
// const fruits=['a','B','c'];
// fruits.length=0;
// console.log(fruits);
// const fruits=['a','B','c'];
// fruits.length=2;
// console.log(fruits);

// const fruits=['a','B','c'];
// fruits.length=5;
// console.log(fruits);
/*Adding Array*/
/*
push => 1)add one or more at the end of Array
2) return a new vakue of legth
3)can add push multiple array in the end of.
*/
// let numbers=[10,20,30];
// const length=numbers.push(49,303,0);
// console.log(numbers);
// console.log(length);
//using push() ppend element of an array to another array.
// let colors = ['red', 'green', 'blue'];
// let cmyk = ['cyan', 'magenta', 'yellow', 'back'];
// for(const color of cmyk){
//     colors.push(color);
// }
// console.log(colors);
// let colors = ['red', 'green', 'blue'];
// let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

// colors.push(...cmyk);

// console.log(colors);
// //spread operator like for to push items.
// //Using JavaScript Array push() method with array-like objects
// let greeting={
//     0:'Hi',
//     1:'Hello',
//     length:2,
//     append(message){
//         [].push.call(this,message);
//     },
// };
// greeting.append("Howw");
// greeting.append("Good");
// console.log(greeting);

/*unshift*/
//add element at the Beging of array
// let greetings = {
//     0: 'Hi',
//     1: 'Hello',
//     2: 'Howdy',
//     length: 3,
//     prepend(...messages) {
//       [].unshift.call(this, ...messages);
//       return this.length;
//     },
//   };
  
//   greetings.prepend('Good day', 'Bye');
//   console.log(greetings);
/*finding Element*/
/*
indexof()
lastindexof()
*/