//settimeout

setTimeout(function()
{
    console.log("hello world");

},2000);

//cancellation (clearTimeout) settmeout 
function delay(){
    console.log("delayed function")
} 
     let timeint = setTimeout(delay,2000);
     //clearTimeout(timeint);
     console.log(timeint);
     console.log("timeout");


//settimeout purpose

console.log("Start")
setTimeout(function (){
console.log("wellcome to gammaedge");
},1000
)
console.log("End")

//simple settimeout with callback
function data(callback){
    setTimeout(() => {
    let empData = {name: "bob", age: 24, id: 30};
    callback(empData);
    }, 2000);
}
data ((empData)=>{
    console.log("Employee Data:",empData);
})

//callback function with asynchronous call set time out
function data(name, callback){
    setTimeout(() => {
     let greetmsg =  `hello ${name}`  
     callback(greetmsg);
    }, 2000);
}
function displaymessage(msg){
    console.log(`Message is: ${msg}`)
}
data("Robbin", (message));

//settimeout for both line
function greet(name){
   const first = setTimeout(()=> {
        console.log(`hello ${name}`);    
    },1000);
   const second = setTimeout(()=>{
        console.log("what a beautiful day");
    }, 2000)
setTimeout(()=>{
    clearTimeout(first);
    clearTimeout(second);
    console.log("nothing to print")
}, 500);
}
greet("Ronn");

//settimeout 
console.log("welcome to GE")
setTimeout(()=>{
    console.log("bye")
},3000);

// setInterval

const intID = setInterval(()=>{
 console.log("hello every 2 seconds")
}, 2000);
setTimeout(()=>{
    clearInterval(intID);
    console.log("stopped");
},5000
);

//setinterval
function greet(name){
   console.log(`hello ${name}`)
}
let newgreet = setInterval(() => {
    console.log("have a good day")
}, 2000);
setTimeout(() => {
    clearInterval(newgreet);
    console.log("Good Bye")
}, 4000);

greet("Janhavi");


//callback hell

function task1(callback){
    console.log("task one complete");
    callback();
}

function task2(callback){
    console.log("task two complete");
    callback();
}

function task3(){
    console.log("task three complete");
}
//callback hell
task1(function(){
    task2(function(){
        task3();
    })
});

//promises
let checkevn = new Promise((resolve, reject) => {
    let num =3;
    if (num%2===0) resolve ("The number is Even");
    else reject("the number is not even");
});
checkevn
.then((message)=>console.log(message))
.catch((error)=>console.log(error));

//promiseall method

Promise.all([
    Promise.resolve("Task one complete"),
    Promise.resolve("Task 2 complete"),
    Promise.reject("Task 3 failed")
])
.then ((result)=>console.log(result))
.catch ((error)=>console.log(error));

//Promise.resolve()
Promise.resolve("Immidiate success")
.then((value)=>console.log(value));

//Promise.reject()
Promise.reject("Failed")
.catch((error)=>console.log(error));

//promise.finally()
Promise.resolve("successful")
.then((value)=>console.log(value))
.catch((error)=> console.log(error))
.finally(()=>console.log("Pass"))

//promise.resolve()
Promise.resolve(3)
.then((value)=> value + 3)
.then((value)=> value * 5)
//.finally(()=>console.log("Chain complete"));
.then((finalVal) => console.log(finalVal)) // logs: 30
.finally(() => console.log("Promise chain completed."));


//wrap calback in promises
function loadData(callback) {
    setTimeout(() => 
        callback("Data loaded"), 1000);
}
function promiseData() {
    return new Promise((resolve) => {
        loadData((result) => 
            resolve(result));
    });
}
promiseData().then((data) => 
    console.log("callback success: ",data));


//
function greet(callback){
    setTimeout(()=>
    callback("Good Day"),2000);
}
function newgreet(){
    return new Promise((resolve)=>{
        greet((result)=>
        resolve(result));
    });
}
newgreet().then((grt)=>console.log("welcom:",grt))


//simple name callback to promise
function data(name, callback) {
    setTimeout(() => {
        let greetmsg = `Hello ${name}`;
        callback(greetmsg);
    }, 2000);
}

// Wrap it in a Promise
function dataPromise(name) {
    return new Promise((resolve) => {
        data(name, (msg) => resolve(msg));
    });
}

// Use the Promise
dataPromise("Robbin")
    .then((message) => {
        console.log(`Promise Message: ${message}`);
    });


//async await
//async
async function Fname() {
    return "Data fetch successfully"
}
Fname().then((txt)=>console.log(txt));



//for name parameter
async function fname(name){
    return `data return for name : ${name}`
}
fname("Janhavi").then((txt)=>console.log(txt));




//async with await

async function greet(name){
    return `good morning ${name}`
}
async function Greet2(){
    const msg = await greet("Janhavi");
    console.log(msg)
}
Greet2();



// example.js

// A simple async function that simulates a delay using setTimeout
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessage() {
  console.log(" Waiting...");
  await wait(2000); // Wait 2 seconds
  console.log(" Hello from async/await after 2 seconds!");
}

// Call the async function
showMessage();




