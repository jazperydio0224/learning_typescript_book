/*
Take the following snippet, in which TypeScript
is emitting a type error about a member property
being erroneously called as a function:
*/

let firstName = "Whitney";
firstName.length();
//
// This expression is not callable.
// Type 'Number' has no call signatures

/*
TypeScript came to that complaint by, in order:
1. Reading in the code and understanding there to be
   a variable named firstName
2. Concluding that firstName is of type string because
   its initial value is a string, "Whitney"
3. Seeing that the code is trying to access a .length
   member of firstName and call it like a function
4. Complaining that the .length member of a string is 
   a number, not a function (it can't be called like a function)   
*/
