
//Methods
//push
//let fruits = ['apple', 'banana','dragonfruit', 'strawberry'];
// fruits.push('kiwi', 'mango');
// console.log("Push:",fruits);
 
// //pop

// fruits.pop();
// console.log("Pop:",fruits);

// //shift
// let NewFruit = fruits.shift();
// console.log("Shift:",fruits);

// //unshift 
// let unshift = fruits.unshift('a', 'b');
// console.log("unshift:",fruits)

// //slice
// let slice = fruits.slice(1,3);
// console.log("Slice:",slice)

// //spice
// let splice = fruits.splice(1,1,'newfruit');
// console.log("Splice:",fruits)

//Iterators: map, filter, find, some, every, reduce

// let arr = [1,2,3,4,5,6,7]
// //Map
// let MapArr= arr.map(arr => arr*2);
// console.log(MapArr);

// //filter
// let arrfilter = arr.filter(arr=> arr%3===0);
// console.log(arrfilter);

//find

//  //const StudentDetails = [{id : 1 , names : 'Martin'}, {id : 2 , names : 'Roy'}];
// // const newSD = StudentDetails.find (user => user.id ===1);
// // console.log(newSD);
// let arrfind = [{id:1, name: 'Joy', age:15}, {id:2, name: 'Bob', age: 12}];
// let newrrfind = arrfind.find(usr => usr.age %2 ===0);
// //let newrrfind = arrfind.find(usr => usr.name=== 'Joy');
// console.log(newrrfind);

// //some
// let arr = [1,2,3,4,5,6,7]
// let newarr1 = arr.some( num => num===8 );
// let newarr2 = arr.some( num => num===2 );
// let newarr3 = arr.some( num => num%3===0 );
// console.log(newarr1,newarr2,newarr3);

// //every
// let arr = [1,2,3,4,5,6,7]
// let newarr1 = arr.every( num => num===8 );
// let newarr2 = arr.every(num=> num<=7);
// console.log(newarr1,newarr2);

// //reduce
// let arr = [1,2,3,4,5,6,7]
// let newarr = arr.reduce((a,b)=> a+b,0);
// console.log(newarr);