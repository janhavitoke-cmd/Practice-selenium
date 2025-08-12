// let evncheck = new Promise ((resolve, reject)=>{
//     let num = 20;
//     if (num%2===0)
//     resolve("Number is even");
//     else reject ("number is odd");
// });
// evncheck
// .then((message) => console.log (message))
// .catch((error) => console.log (error));


//with function
function checkeven(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) resolve("Number is Even");
    else reject("Number is Odd");
  });
}

checkeven(10)
  .then(console.log)
  .catch(console.error);

checkeven(7)
  .then(console.log)
  .catch(console.error);

  // if else
 
function greet(name, num) {
  return new Promise((resolve, reject) => {
    if (num >= 24) {
      reject(`Hello ${name}, Time is Invalid`);
    } else if (num > 15) {
      resolve(`Good Evening ${name}, time is ${num}`);
    } else if (num > 12) {
      resolve(`Good Morning ${name}, time is ${num}`);
    } else {
      resolve(`Hello ${name}, time is ${num}`);
    }
  });
}

greet("Anuj", 25)
  .then(console.log)
  .catch(console.error)

