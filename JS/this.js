// //global (not work here)

// console.log(this);
// var car = "Volvo"
    
//  console.log(this.car);

 //object

let car = {
    CarName : "Volvo",
    model : 15,
    newname: function(){
    console.log(`Car name is ${this.CarName}`);
}
};
car.newname();

or

