/*
TypeScript is fine with later assigning a different value of the same type
to a variable. If a variable is, say, initially a string value, later
assigning it to another string would be fine:
*/
let firstName = "Carole";
firstName = "Joan";

/*
If TypeScript sees an assignment of a different type, it will give us
a type error. We couldn't, say, initially declare a variable with a    
string value and then later on put in a boolean:
*/
let lastName = "King";
lastName = true;
// Error: Type 'boolean' is not assignable to type 'string'.

/*
TypeScript's checking of whether a value is allowed to be provided
to a function call or variable is called assignability: whether that
value is assignable to the expected type it's passed to. This will be
an important term in later chapters as we compare more complex objects.
*/

/* ----------------------------
Understanding Assignability Errors
---------------------------- */
/*
Errors in the format "Type... is not assignable to type..." will be some of 
the most common types of errors you'll see when writing TypeScript Code.
*/

/* ------------------------------------
Type Annotations
------------------------------------ */

// Here, assigning the evolving any variable "rocker" is first assigned a
// string, which means it has string methods such as toUpperCase, but
// then is evolved into a number:
let rocker; // Type: any

rocker = "Joan Jett"; // Type: string
rocker.toUpperCase(); // Ok

rocker = 19.58; // Type: number
rocker.toPrecision(1); // Ok

rocker.toUpperCase();
//
// Error: 'toUpperCase' does not exist on type 'number'.

// Declaring the type of a variable without having to assign it
// an initial value, called a "type annotation".

// A type annotation is placed after the name of a variable
// and includes a colon followed by the name of a type.

let rocker1: string;
rocker1 = "Joan Jett";

// Assigning a value whose type is not assignable to the variable's
// annotated type will cause a type error.

rocker1 = 19.58;
// Error: Type 'number' is not assignable to type 'string'.

/* Unnecessary Type Annotations */
// redundant
let firstName1: string = "Tina";

// The following firstName is declared to be of type string,
// but its initializer is the number 42, which TypeScript
// sees as an incompatibility:
let firstName2: string = 42;
// Error: Type 'number' is not assignable to type 'string'.

/* Type Shapes */
// Suppose we declare a rapper2 variable of type string. Later on,
// when we use that rapper2 variable, operations that TypeScript
// knows work on strings are allowed:
let rapper2 = "Queen Latifah";
rapper2.length; // ok

// Operations that TypeScript doesn't know to work on strings
// will not be allowed:
rapper2.push("!");
//
// Property 'push' does not exist on type 'string'.

let cher = {
  firstName: "Cherilyn",
  lastName: "Sarkisian",
};

cher.middleName;
//
// Property 'middleName' does not exist on type
// '{ firstName: string; lastName: string; }'
