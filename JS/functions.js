// //function addition, substraction and even no 

// function e(){
//     let test = [1,2,3,4,5];
//     let sum = 0;
//     let sub = 0;
//     let i = 0;

//     for (i=0;i< test.length; i++){
//         if (test[i] % 2 ===0){
//             console.log(test[i]);
//         }
//         sum += test[i];
//         sub -= test[i];
//     }

   
// console.log(sum);
// console.log(sub);
// }
// e();


// // function
// function greet (name){
//     return "hello," + name + "!";
// }
// console.log(greet("Janhavi"))'


// //callback
// function greet (name, callback){
//     console.log("hello,"+ name);
//     callback();
// }
// function saybye (){
//     console.log("Good Day!")
// }
// greet ("Janhavi", saybye);

// //simple callback;
// function e(callback){
// const name = "Anvesha"
// let greeting = `${name} today is a good day`
// console.log(greeting)
// callback();
// };
// function prefix(){
//     console.log("Hello Ms.")
// };
// e(prefix);


// //simple funciton
// function sum() {
//     let a = [1, 2, 3, 4, 5];
//     let b = [6, 7, 8, 9];
   
//     let anew = a.reduce((x,y)=> x+y,0);
//     let bnew = b.reduce((x,y)=>x+y,0);

//     let total = anew+bnew;
    
//     console.log(anew,bnew,total);
// }
// sum();

// //or 
// function sum2() {
//     let a= 100
//     let b= 200
//     return a+b;
// }
//     // let sum = (a,b)=>a+b;
//   console.log(sum2());


// //arrow function 
// const sumAll = (...numbers) => {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// };

// console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
// console.log(sumAll(10, 20));       // Output: 30

// //addition simple usin arrow methoud
// const sum = (...numbers) =>{
//     let totl = 0
//     for (let num of numbers){
//         totl += num;
//     }
//     return totl;
// };
// console.log(sum(20,30,40));

// settimeout
// Example with a named function

// function greet(name){
//     console.log(`hello: ${name}`)
// }
// setTimeout(greet,3000);
// setTimeout((msg) => {
//     console.log("What a lovely day!")
// }, 1000);
// greet("Robbin");

// //clear timeout - settimeout

// function dead(){
//     console.log("a clear timeout funciton");
// }
//     let a = setTimeout(dead,2000);
//     clearTimeout (a);
//     console.log("time out")


// //setinterval

// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// let newGreet = setInterval(() => greet("Janhavi"), 1000);

// setTimeout(() => {
//     clearInterval(newGreet);
//     console.log("Greeting stopped");
// }, 5000);

// //callback in settimeout 
//  function fetch(callback){
//  const intervalId = setInterval(() => {
//     let newdata = "To be display new data";
//     callback(newdata);
//  }, 1000);

//  return intervalId;
//  }
// const interval = fetch((result)=>{
//     console.log(result);
// });
// setTimeout(() => {
//     clearInterval(interval);
//     console.log("data stopped");
// }, 5000);


// //callback hell

// function task1(callback){
//     console.log("Task One Complete");
//     callback();
// }
// function task2(callback){
//     console.log("Task Two Complete");
//     callback();
// }
// function display(){
//     console.log("data display");
// }
// //CBH
// task1(function(){
//     task2(function(){
//         display();
//     });
// });


//promises

// let Even = new Promise((resolve,reject) => {
//     let num = 20;
//     if(num % 2===0) 
//         resolve("approve! number is even")
//         else 
//             reject("not approved! number is odd")
// });
// Even 
//     .then((message) => console.log(message))
//     .catch((error)=> console.log(error));




    let employee = {
        name: "John"
    }
    let obj = employee
    obj.name = 'bob'   //now employee is eq to ob and console is printing this 
    console.log(employee.name);
//why object 