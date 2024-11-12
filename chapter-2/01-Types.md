What's in a Type?

- A "type" is a description of what a Javascript value shape might be. By "shape" I mean which properties and methods exist on a value, and what the built-in typeof operator would describe it as.

For example, when you create a variable with the initial value "Aretha":
let singer = "Aretha";

Typescript can infer, or figure out, that the singer variable is of type string.

The most basic types in Typescript correspond to the seven basic kinds of primitives in Javascript:

1. null
2. undefined
3. boolean // true or false
4. string // "", "Hi!", "abc123", ...
5. number // 0, 2.1, -4, ...
6. bigint // 0n, 2n, -4n, ...
7. symbol // Symbol(), Symbol("hi"), ...

For each of these values, Typescript understands the type of the value to be one of the seven basic primitives:

1. null; // null
2. undefined; // undefined
3. true; // boolean
4. "Louise"; // string
5. 1337; // number
6. 1337n; // bigint
7. Symbol("Franklin"); // symbol
