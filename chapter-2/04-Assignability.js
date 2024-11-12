/*
TypeScript is fine with later assigning a different value of the same type
to a variable. If a variable is, say, initially a string value, later
assigning it to another string would be fine:
*/
var firstName = "Carole";
firstName = "Joan";
/*
If TypeScript sees an assignment of a different type, it will give us
a type error. We couldn't, say, initially declare a variable with a
string value and then later on put in a boolean:
*/
var lastName = "King";
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
var rocker; // Type: any
rocker = "Joan Jett"; // Type: string
rocker.toUpperCase(); // Ok
rocker = 19.58; // Type: number
rocker.toPrecision(1); // Ok
rocker.toUpperCase();
//
// Error: 'toUpperCase' does not exist on type 'number'.
