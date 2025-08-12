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
// console.log(Employee.name,Employee.Company.Caddress);
// //destructuring
// let {name} = Employee;
// console.log(name);
// //nested destruturing
// let {Company: {Cname}} = Employee;
// console.log(Cname);

// //spread Operator

// const cloneEmp = {...Employee}
// console.log(cloneEmp);


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


// //SHallo Copy
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
// //update value of blood group , value of company
// let NewEmployee = {...Employee};

// NewEmployee.name = "Ria";
// NewEmployee.Blood_Group = "A+";
// NewEmployee.Company.Cname = "GE";
// console.log(NewEmployee);
// // console.log(Employee);
// //console.log(NewEmployee.Blood_Group: A+);
// // console.log("NewEmployee.Blood_Group: A+");
// // console.log("NewEmployee.Company.Cname: GE");

//Deep Copy

let Employee = {
    name: "Janhavi",
    Blood_Group: "O+",
    address: "Indore",
    Company: {
        Cname: "GammaEdge",
        Caddress: "KhandwaNaka",
        CNo: 9898989898
    }
};
let NewEmployee = JSON.parse(JSON.stringify(Employee));