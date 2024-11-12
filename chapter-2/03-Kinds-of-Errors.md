Kinds of Errors

- While writing TypeScript, the two kinds of "errors" you'll come
  across most frequently are:

1. Syntax - Blocking TypeScript from being converted to Javascript
2. Type - Something mismatched has been detected by the type checker

- The differences between the two are important.

* Syntax errors

- Syntax errors are when TypeScript detects incorrect syntax that it
  cannot understand as code.
- These block TypeScript from being able to properly generate output
  Javascript from your file.

This input TypeScript has a syntax error for an unexpected let:
let let wat;
//
// Error: ',' expected

- Its compiled Javascript output, depending on the TypeScript compiler
  version, may look something like:
  let let, wat;

* Type errors

- Type errors occur when your syntax is valid but the TypeScript type
  checker has detected an error with the program's type.
- These do not block TypeScript syntax from being converted to Javascript.
- They do, however, often indicated something will crash or behave
  unexpectedly if your code is allowed to run.

console.blub("Nothing is worth more than laugher.");
//
// Error: Property 'blub' does not exist on type 'Console'.

- Even though TypeScript may output Javascript code despite the presence
  of type errors, type errors are generally a sign that the output Javascript likely won't run the way you wanted. It's best to read
  them and consider fixing any reported issues before running Javascript.
