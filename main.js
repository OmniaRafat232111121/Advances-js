
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
/* pop()*/
// const numbers=[10,20,300,49];
// const last=numbers.pop();
// console.log(last);
// console.log(numbers.length);
// const numbers=[];
// const last=numbers.pop();
// console.log(last);
// console.log(numbers.length);
/*using javascript pop() like array-object */
// let greetings={
//     0:'Hi',
//     1:'Helo',
//     2:'Good Mornig',
//     length:3,
//     removelast(){
//         return [].pop.call(this);
//     }
// };
// let greeting=greetings.removelast();
// console.log(greeting);
// console.log(greetings);
// const numbers=[10,20,30,40];
// let number=numbers.shift();
// console.log({number});
// console.log(numbers);
// console.log({length:numbers.length});
// const numbers=[10,20,30];
// let number;
// while((number=numbers.shift())!=undefined){
//     console.log(number);
// }

/*mainpulate=>1)Delete an existing element splice(position,num)
2)insert new element splice(position,0,ele1,ele2)
3)replace an existing element with another element*/ 
//  let scores=[1,2,3,4,5];
//  let deleteScores=scores.splice(0,3);
//  console.log(scores);
//  console.log(deleteScores);

// let colors=['red','green','Blue'];
// colors.splice(3,0,'purple');
// console.log(colors);
// colors.splice(1,0,"yellow",'pink');
// console.log(colors);


// let langauages=['c','c++','java','javascript'];
// langauages.splice(1,2,'python');
// console.log(langauages)

//includes()check if an array is existing in array or not
// let numbers=[1,2,3,4];
// if(numbers.indexOf(2)!==-1){
//     //process here
// }
//includes dont compare between positive and negative
//High order method in the array()
/*
map()
filter()

*/