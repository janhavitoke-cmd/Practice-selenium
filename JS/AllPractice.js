// //Hello
// let a = 20;
// console.log(a);

// //Synchronous 
// console.log("Hi");
// console.log("How are you?");

// //Asynchronous 
// console.log("Hi");
// setTimeout(()=> {console.log("Welcome")});
// console.log("Good Day");

// //object
// let student = {
//     names : "Martin",
//     age : 15,
//     Class : 10,
//     Section : "A",
//     StudentDetails : function () {
//         return this.names+" "+ this.age + " " + this.Class + " " + this.Section + " ";
//     }
// };
// console.log("student "+ student.StudentDetails());

// //Function
// function sum(x,y) {
//  return x + y;
// }
// console.log("The sum of X and Y=", sum(7,3));

//function2
//  function greet(){
//     console.log("good morning!");
//  }
//  let mygreeting = greet();
//  mygreeting();

// //function declaration
// function test(test1, test2){
//     return test1+test2;
//     }
//     let result = test(10,10);
//     console.log("sum:", result);

// //Function expression
// let test = function(test1, test2){
//     return test1+ test2;
// }
//  let result = test(10,10);
//     console.log("sum:", result);

//Arrow function
const add=(val1, val2) => val1+val2;
console.log(add(3+4));

// //if statement
// let age = 30;
// if (age >= 25) {
//     console.log("your age is", + " " + age, "Your are millenial");
// }

//if else statement
// let age = 50;
// if (age <= 17){
//     console.log("you are Minor");
// } 
// else {
//         console.log ("You are Adult");
//     }

// //else if
// let time = 12;
// if (time <= 12){
//     console.log("good morning!");
//     } else if (time <= 18){
//         console.log("good noon");
//     } else if (time <= 24){
//         console.log("Good evening");
//     }

// //switch statement
// let day = 2;
// let dayname;

// switch (day) {
// case 1: 
//  dayname = "monday";
//  break;
// case 2: 
//  dayname = "tuesday";
//  break;
// case 3: 
//  dayname = "wednesday";
//  break;
// case 4: 
//  dayname = "thursday";
//  break;
// case 5: 
//  dayname = "friday";
//  break;
// case 6: 
//  dayname = "saturday";
//  break;
// case 7: 
//  dayname = "sunday";
//  break;
// default: 
//  dayname = "Invalid";
//  break;
// }
// console.log(dayname);


// //for loop

// for (let i = 5; i <= 10; i++)
// {
//     console.log("Count:", i);
// }


// //pyramid
// let n = 5;
// for (let i = 1; i<=n; i++) {
// let str = ("* ");
// let space = (" ");
// console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1));
// }

// //while
// let i = 0;
// while (i <= 10) {
//     console.log (i);
//     i++;
// }


// //do while loop
// let i = 0;
// do {
// console.log("value:", i);
// i++;
// }
// while (i <= 10);

// //for of loop
// let a = [1,2,3,4,5];
// for (let val of a){
//     console.log(val);
// }

// //for in loop
// let a = {names: "Janhavi", age: 25};
// for (let val in a){
//     console.log(val,+ ":",a[val]);
// }

//foreach loop

// let classes = ["a","b","c","d"];
// classes.forEach((element)=> {
//     console.log(element);
// });

// const numbers = [1, 2, 3, 4, 5];

// // Iterating over an array and logging each element
// numbers.forEach((number) => {
//   console.log(number);
// });

// // Iterating and accessing index
// numbers.forEach((number, index) => {
//   console.log(`Element at index ${index}: ${number}`);
// });


//- Arrays - Methods: push, pop, shift, unshift, slice, splice in JS
//push
// let arr = [1,2,3,4,5];
// arr.push(6);
// console.log(arr);

// //pop
// let arr = [ 1, 2, 3, 4, 5, 6 ];
// let removed = arr.pop();
// console.log(arr);

// //shift
// let arr = [ 1, 2, 3, 4, 5, 6 ];
// let removed = arr.shift();
// console.log(arr);

// //unshift
// let arr = [ 1, 2, 3, 4, 5, 6 ];
// arr.unshift(-3, -2, -1, 0);
// console.log(arr);


// //slice
// let arr = [ 1, 2, 3, 4, 5, 6 ];
// let newarr = arr.slice(1,4);
// console.log(newarr);

// //splice
// let arr = [ 1, 2, 3, 4, 5, 6 ];
// arr.splice(0,1,'a','b');
// console.log(arr);


// // map
// const numbers = [1,2,3,4,5];
// const NewNumbers = numbers.map(num => num*2);
// console.log (NewNumbers);

// // filter
// const number = [1,2,3,4,5,6];
// const NewNumbers = number.filter(num => num % 3 === 0);
// console.log(NewNumbers);

// //find
// const StudentDetails = [{id : 1 , names : 'Martin'}, {id : 2 , names : 'Roy'}];
// const newSD = StudentDetails.find (user => user.id ===1);
// console.log(newSD);

// //some
// const number = [1,2,3,4,5,6];
// const NewNumbers = number.some(num => num % 2 ===0);
// console.log(NewNumbers);

// //every
// const numbers = [2,4,6,8];
// const NewNumbers = numbers.every(num => num % 3 ===0);
// console.log(NewNumbers);

// //reduce 
// const numbers = [1,2,3,4,5,6];
// const sum = numbers.reduce((x,y) => x+y, 0);
// console.log(sum);

// //destructing
// const colors = ["orange", "white", "green"];
// const [a, b, c, d] = colors;
// console.log(a, b, c, d);

// //spreat operators
// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9];

// const copyarr = [...arr1];
// console.log(copyarr);

// const combinearr = [...arr1,...arr2,...arr1];
// console.log(combinearr);

// const insarr = [...arr1,12,...arr2];
// console.log(insarr);

// const minarr = [...arr1];
// console.log(Math.min(...minarr));//if ... is not passed it will show was NaN

// const sumarr = [...arr1,...arr2].reduce((x,y)=> x+y,0);
// console.log(sumarr);


// //Obect creating and accessing and nested
// const employee = {
//     name: "Janhavi",
//     age : 25,
//     address: "Indore",
    
//     Company:{                         //nested
//         Cname:"GammaEdge",
//         Caddress:"Khandwa Road",
//         CNo: 121212
//     }
// };
// console.log(employee.name);
// console.log(employee.address,employee.Company.Cname);
// for (const key in employee){                                 //for..in loop
//    console.log(`${key}: ${employee[key]}`);
// }


// //destructing object 
// const employee = {
//     name: "Janhavi",
//     age : 25,
//     address: "Indore",
//     company: {
//         Cname: "Gammaedge",
//         Cadd: "khandwaRD"
//     }
// }

// const {name, age, state = "MP",company, company:{Cname}} = employee;    //state is added separately not present in employee object
// console.log(name);
// console.log(age);
// console.log(state);         
// //console.log(address);        //address will not print as it is not mentioned in destructing 
// console.log(company);

//spreat operators object
// //cloned object
// const employee = {
//     EName: "Janhavi",
//     BloodGroup: "O+",
//     PhNo: 9090909090,
//     Gender: "Female"
// }
// const company = {
//     CName: "GammaEdge",
//     Address: "KhandwaRD",
//     CNo: 9898989898
// }

//     const clonedObject = { ...employee,...company };
//     console.log(clonedObject);

// //merge object
// const employee = {
//     EName: "Janhavi",
//     BloodGroup: "O+",
//     PhNo: 9090909090,
//     Gender: "Female"
// }
// const company = {
//     CName: "GammaEdge",
//     Address: "KhandwaRD",
//     CNo: 9898989898
// }
//     const mergeData = {...employee,...company };
//     console.log(mergeData);

// //add (overwrite)object
// const employee = {
//     EName: "Janhavi",
//     BloodGroup: "O+",
//     PhNo: 9090909090,
//     Gender: "Female",
// }
// const Company = {
//         Cname:"GammaEdge",
//         Cadd: "Indore",
//     }
// const newEmp = {...employee, ...Company, Shift: "Morning"};
// console.log(newEmp);

// //DeepCopy //Jsonparse
// const  employee = {
//     EName: "Janhavi",
//     BloodGroup: "O+",
//     PhNo: 9090909090,
//     Gender: "Female",
//     Address: {
//     City: "Indore"
//     }
// }

// const DeepCopy = JSON.parse(JSON.stringify(employee));   //deep copy
// //const ShallowCopy = {...employee};     //shallowcopy

// DeepCopy.Address.City = 'Ujjain';

// console.log(DeepCopy);  //will display all data 
// console.log(DeepCopy.Address.City);  //will only show updatd city
// //console.log(ShallowCopy);

// //shift
// const names = ["J","A","N","H","A","V","I"];
// const newname = names.shift();
// console.log(names)


// //reduce
// let number = [1,2,3,4,5,6]
// let num2 = [1,2,3,4,5]
// let newnum = number.reduce((x,y) => x+y,0);
// let newnum2 = num2.reduce((x,y) => x+y,0);
// let sum = newnum+ newnum2;
// console.log("sum of value 1:"+ newnum);
// console.log("sum of value 2:"+newnum2);
// console.log("sum of both value:"+sum);


// //destructuring practice array
// let arr = ["apple", "banana", "kiwi", "pineapple"];
// let [a,b,,c] = arr;
// console.log(a);
// console.log(c);


// function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback(); // The callback function is executed here
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye); // sayGoodbye is passed as the callback


// function a (arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i); // The callback is executed immediately for each element
//   }
// }

// function b (element, index) {
//   console.log(`Element at index ${index}: ${element}`);
// }

// const numbers = [10, 20, 30];
// a(numbers, b);

// //timeout
// console.log("bye")
// function grt(){
//     setTimeout(()=>
//     {
//         console.log("Janhavi")
//     }, 2000
//     )
// };
// grt();
// //intervl
// const intID = setInterval((name) => {
//     console.log(`hello ${name}`)
// }, 1000,"Janhavi");
// setTimeout (()=>
// {
//     clearInterval(intID);
//     console.log("Bye")
// }, 6000
// )

//promises

const newID = new Promise((resolve,reject)=>{
let num = 20;
if (num %2===0) resolve("the no is even");
else reject("the no is odd");
});
newID
.then ((msg)=> console.log(msg))
.catch((error)=>console.log(error));

//async await
async function fname(){
    try{
        let response = await fname ("Janhavi")
    }
    catch {
        
    }
}

const newtestID = setInterval(() => {
    console.log("Hello everyone")
}, 1000);
setTimeout(() => {
    clearInterval(newtestID)
    console.log("Bye! Thank You!")
}, 5000);

//functional and block scope
//functional
function exp(){
    if(true){
        var x=2;
    }
    console.log(X);
}
exp();