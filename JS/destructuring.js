// // //dest
// // let arr = [1,2,3,4,5,6];
// // let [a,b,c,d]= arr;
// // console.log(a,b,c);

// //dest obj

// let Employee = {
//     name: "Janhavi",
//     Blood_Group: "O+",
//     address: "Indore",
//     Company: {
//         Cname: "GammaEdge",
//         Caddress: "KhandwaNaka",
//         CNo: 9898989898
//     }
// };
//  let {name,Company:{Cname}} = Employee;
//  console.log(name);
//  console.log(Cname);//with desstructuring
//  console.log(Employee.Company.Cname);//without destructuring


// //spread operator
// //shallow copy
// let Employee = {
//     name: "Janhavi",
//     Blood_Group: "O+",
//     address: "Indore",
//     Company: {
//         Cname: "GammaEdge",
//         Caddress: "KhandwaNaka",
//         CNo: 9898989898
//     }
// };
// let newEmp = {...Employee}
// newEmp.name = 'User';
// newEmp.Company.Caddress = 'VijayNagar'
// console.log(newEmp)

// //deepcopy
// let Employee = {
//     name: "Janhavi",
//     Blood_Group: "O+",
//     address: "Indore",
//     Company: {
//         Cname: "GammaEdge",
//         Caddress: "KhandwaNaka",
//         CNo: 9898989898
//     }
// };
// let newdeepcopy = JSON.parse(JSON.stringify(Employee));
// console.log(newdeepcopy);