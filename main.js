
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
map()=>transforming Element in an array
filter()

*/

// let circles=[
//     10,20,30,50
// ];
// // let areas=[];
// let area=0;
// for(let i=0;i<circles.length;i++){
//     area=Math.floor(Math.PI*circles[i]*circles[i]);
//     areas.push(area);
// }
// console.log(areas);
// function circleArea(radius){
//     return Math.floor(Math.PI*radius*radius);
// }
// let areas=circles.map(circleArea);
// console.log(areas);
// const array1=[1,4,9,16];
// const map1=array1.map(x=>x*2);
// console.log(map1);
// const numbers=[1,4,9];
// const roots=numbers.map((num)=>Math.sqrt(num));
// console.log(roots);
// const kvArray = [{ key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 }];
//     const reformattedArray = kvArray.map(({ key, value}) => ({[key]:value }));
//     console.log(reformattedArray);
// const numbers = [1, 4, 9];
// const doubles = numbers.map((num) => num * 2);

//charCodeAt() a String to get an array of bytes in the ASCII encoding;
// const map=Array.prototype.map;
// const charCodes=map.call('omnia',(x)=>x.charCodeAt(0));
// console.log(charCodes);
// const elems = document.querySelectorAll('good');
// const values = Array.prototype.map.call(elems, ({ value }) => value);
// console.log(values)
['1.1', '2.2e2', '3e300'].map((str) => parseInt(str));

// const strings = ['10', '10', '10'];
// const numbers = strings.map(parseInt);

// console.log(numbers);
/*irst =>integer of number ,second nan,third index,other nan
parseInt(element,index(NAN),arrayof index,...the args) when string
parseInt(element,index(NAN),NAN) when numbers
*/

// const strings = ['10', '10', '10','70','6'];
// const numbers = strings.map(parseInt);

// console.log(numbers);
// const strings = [10,20,40] 
// const numbers = strings.map(parseInt);
/*filter*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);

console.log(result);
// console.log(numbers);
// const cssClasses = ['btn', 'btn-primary', 'btn-active'];
// const btnClass = cssClasses.join(' ');

// console.log(btnClass);
// const title='omnia array is control';
// const url=title.split(' ').join("*").toLocaleLowerCase();
// console.log(url);
//concat() mergearray
// let odds = [1,3,5];
// let evens = [2,4,6];
// // merge odds and evens array
// let combined = odds.concat(evens);

// console.log('Result:', combined);
// console.log('Odds:', odds);
// let odds = [1,3,5];
// let evens = [2,4,6];
// // merge odds and evens array
// let combined = [].concat(odds, evens);

// console.log(combined);
// let upper  = ['A','B','C'];
// let lower  = ['a','b','c'];
// let digits = [1,2,3];
// let alphanumerics = upper.concat(lower, digits);
// console.log(alphanumerics)

//creating an array
/*Array.of() ES6 */
//in ES5 array of constructor new Array()
// let numbers=new Array(2);
// console.log(numbers.length);
// console.log(numbers[1]);
//when pass  string (value ) not anumber avalue can in array length[0]
// let numbers=new Array("2");
// console.log(numbers.length);
// console.log(numbers[0]);     
// let numbers=Array.of(4,5);
// console.log(numbers.length); // 1
// console.log(numbers[0]); 
// console.log(numbers[1]); 

/*Array.from()*/ 

/*
create an array from array-like or object iterator
*/
/*array-like is ()=>[]*/
// function arrayFromArgs() {
//     return Array.from(arguments);
// }

// console.log(arrayFromArgs(1, 'A'));

// function addOne() {
//     return Array.from(arguments, x => x + 1);
// }
// console.log(addOne(1, 2, 3));
/*c) Arra,from() with value()
*/ 
// let doubler = {
//     factor: 2,
//     double(x) {
//         return x * this.factor;
//     }
// }
// let scores = [5, 6, 7];
// let newScores = Array.from(scores, doubler.double, doubler);
// console.log(newScores);

/*D) create an iterable object*/
// let even={
//     *[Symbol.iterator](){
//         for(let i=0;i<10;i+=2){
//             yield i;
//         }
//     }
// };
// let evenNumbers=Array.from(even);
// console.log(evenNumbers)

// const numbers = [1, 2, [3, 4, 5]];
// const flatNumbers = numbers.flat(1);

// console.log(flatNumbers);

// const numbers = [1, 2, [3, 4, 5, [6, 7]]];
// const flatNumbers = numbers.flat(2);

// console.log(flatNumbers);

// var x=12;
// var y=function(){
//     console.log(x);
//     var x=20;
// };
// y();  
//undefined
/*
ES6 provide
 destructring properties object or element in array

*/
//merge an array
// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9];
// let newarr=arr1.concat(arr2);
// console.log(newarr);
// /*
// let newArr=[...arr1,...arr2];
//  */
//not passing a default value
// function sum(x=0,y=0){
//     console.log(x+y);
// }
// sum();
// sum(5,4);
// let name="omnia";
// if(name==="johb"){
//     console.log(name);

/***************************************** */
/*string Method */

/*search()*/
/*accept regularepression  nd return index*/
// let index=str.search(regex);
/*if not regex it convert to regex*/
/* if return -1 that not found*/
// let re=/[A-Z]/;
// let str="Hi there?How are you";
// let index=str.search(re);
// console.log(index);
// let re = /[0-9]/;
// let str = 'Hello, JavaScript!';
// let index = str.search(re);

// console.log(index);
/* indexof()*/
// let str = 'finding substring in string';
// let index = str.indexOf('str');

// console.log(index); // 11

// let str = 'You do not know what you do not know until you know.';
// let substr = 'know';

// let count = 0;

// let index = str.indexOf(substr);
// while(index !== -1) {
//     count++;
//     index = str.indexOf(substr, index + 1);
// }

// console.log(count);


// let str = 'JS indexOf';
// let substr = 'js';

// let index = str.toLocaleLowerCase().indexOf(substr.toLocaleLowerCase());

// console.log(index); // 0

// let str = 'JavaScript';
// let index = str.lastIndexOf('a',2);

// console.log(index);
// let str = 'Hello, World!';
// let substr = 'L';

// let index = str.lastIndexOf(substr);
// console.log(index);
//includes();
/*check if a string contains another a string */
// includes(searchString,[,position])

// let email = 'admin@example.com';
// console.log(email.includes('@'));

// let str = 'JavaScript String';
// console.log(str.includes('Script'));

// let str = 'JavaScript String';
// console.log(str.includes('Script', 5));

/*startwith*/
// const title = 'Jack and Jill Went Up the Hill';

// console.log(title.startsWith('Jack'));
// console.log(title.startsWith('jack'));
// console.log(title.startsWith('Jill', 9));
/*endwith*/
// const title = 'Jack and Jill Went Up the Hill';
// console.log(title.endsWith('Hill'));
// console.log(title.endsWith('hill'));
// console.log(title.endsWith('Up', 21))
/*triming*/
// let str = '  JS trim Good Hello  ';
// let re= str.trim();

// console.log(re);
/*trimStart() ie aliasing or equlal trimLeft();
remove whiteSpace from Beging without change The orginalString*/
// const str = '   JavaScript   ';
// const re = str.trimStart();

// console.log({ str });
// console.log({ re });
/*trimEnd()*/
// const str = '   JavaScript   ';
// const re = str.trimEnd();

// console.log({ str });
// console.log({ re });

/*PadStart()*/
// let str='1234'.padStart(8,'0');
// console.log(str); //00001234
// let str='abc'.padStart(5);
// console.log({str}) //"  abc"
// let str = 'abc'.padEnd(5);
// console.log(str); // "abc  "
// let str = 'abc'.padEnd(5,'*');
// console.log(str); // "abc**"
// let str = 'abc'.padEnd(9,'def');
// console.log(str); // "abcde"
// let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
// let sentences = paragraph.split(/[!,?,.]/);
// console.log(sentences);
// const str = 'Hello';
// const substr = str.slice(3);

// console.log({ substr });
// const str = 'Hello';
// const substr = str.slice(-3);

// console.log({ substr });

// const str = 'Omnia';
// const substr = str.slice();

// console.log({ substr });

// const str = 'Hello';
// const substr = str.slice(5);

// console.log({ substr });

// const str = 'Hello';
// const substr = str.slice(0, 2);

// console.log({ substr });

// const str = 'Hello';
// const substr = str.slice(0, -2);

// // str.length 5
// // str.length + end = 5 + (-2) = 3

// // console.log({ substr });
// const str = 'Hello';
// const substr = str.slice(2, 6);

// console.log({ substr });