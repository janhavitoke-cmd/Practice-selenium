// //var hoisting

// console.log(b);
// var b= 3;

// //int hoisting

// console.log(myname);
// let myname = "Janhavi";
// console.log(myname)

// //function hoisting

// newfunction();
// function newfunction (name= "janhavi", age =26)
// {
//     console.log(`hello, ${name}`);     //using naming convention and back tick
//     console.log("hello!", name, age)  //by directily calling parameters
// }



// //global scope
// function sum(x,y){
// return x+y;
// }
// console.log(sum(4,6));

//function scope
function e(){
const name = "Anvesha"
let greeting = `${name} today is a good day`
console.log(greeting)
};
//console.log(greeting);
e();


// //blocked scope
// function display(){
//     for (let i=0; i <=5; i++){
//     console.log(i);     //this will work as it is defined in a block
// }
// }
// //console.log(i)         //not defined error will throw if its called outside the function as its not defined outsided
// display();