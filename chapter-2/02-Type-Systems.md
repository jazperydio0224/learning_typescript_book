Type Systems

- A type system is the set of rules for how a programming language understands what types the constructs in a program may have.

- At its core, TypeScript's type system works by:

1. Reading in your code and understanding all the types and values in existence
2. For each value, seeing what type its initial declaration indicates may contain
3. For each value, seeing all the ways it's used later on in code
4. Complaining to the user if a value's usage doesn't match with its type
