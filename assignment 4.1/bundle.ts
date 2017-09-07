//file paths referenced in the bundle.js
///<reference path="./function.ts" />
///<reference path="./interface.ts" />

//interface from the interface file accessed in the bundle file
const Jane: Ns.Person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 23,
    printDetails() {
        console.log(`Person's Details are 1.Name: ${this.firstName} ${this.lastName}  2.Age: ${this.age}`);
    }
}

//Method printDetails on const Jane invoked
Jane.printDetails();

//Const JohnDoe accessed from interface file through namespace
Ns.JohnDoe.printDetails();

//function addition accessed from function file through namespace
console.log(Ns.addition(33, 6));