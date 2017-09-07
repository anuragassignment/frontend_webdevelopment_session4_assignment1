var Ns;
(function (Ns) {
    Ns.addition = function (a, b) { return ("Addition of " + a + " + " + b + " is " + (a + b)); };
})(Ns || (Ns = {}));
var Ns;
(function (Ns) {
    Ns.JohnDoe = {
        firstname: "John",
        lastname: "Doe",
        age: 21,
        printDetails: function () {
            console.log("Person's Details are 1.Name: " + this.firstname + " " + this.lastname + "  2.Age: " + this.age);
        }
    };
})(Ns || (Ns = {}));
var Jane = {
    firstName: "Jane",
    lastName: "Doe",
    age: 23,
    printDetails: function () {
        console.log("Person's Details are 1.Name: " + this.firstName + " " + this.lastName + "  2.Age: " + this.age);
    }
};
Jane.printDetails();
Ns.JohnDoe.printDetails();
console.log(Ns.addition(33, 6));
//# sourceMappingURL=bundle.js.map