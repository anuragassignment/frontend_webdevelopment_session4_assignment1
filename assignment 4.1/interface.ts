//namespace created
namespace Ns {
    //interface exported to be accessed and consumed in the bundle file
    export interface Person {
        [name: string]: any;
        age: number;
        printDetails(): void;
    }
    //JohnDoe object exported to be accessed and consumed in the bundle file
    export const JohnDoe: Person = {
        firstname: "John",
        lastname: "Doe",
        age: 21,
        printDetails() {
            console.log(`Person's Details are 1.Name: ${this.firstname} ${this.lastname}  2.Age: ${this.age}`);
        }
    }
}