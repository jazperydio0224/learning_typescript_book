Assignability

- TypeScript reads variables' initial values to determine what type those
  variables are allowed to be. If it later sees an assignment of a new
  value to that variable, it will check if that new value's type is the
  same as the variable's.

* Understanding Assignability Errors

- For example, when we wrote lastName = true in the previous snippet, we were trying to assign the value of true--type boolean--to the recipient variable lastName--type string.

* Type Annotations

- When a variable doesn't have an initial value for TypeScript to read, It'll consider the variable by default to be implicitly the "any" type: indicating that it could be anything in the world.

- Variables that can't have their initial type inferred go through what's called an evolving any: rather than enforce any particular type, Typescript will evolve its understanding of the variable's type each time a new value is assigned.

- Allowing variables to be evolving any typed--and using the any type in general-- partially defeats the purpose of TypeScript's type checking.

- Nothing that exists only in the type system gets copied over into emitted Javascript. TypeScript types don't affect emitted Javascript.

* Unnecessary Type Annotations

- The following : string type annotation is redundant because TypeScript could already infer that firstName be of type string:
  let firstName: string = "Tina";
  // ------ Does not change the type system...

* Type Shapes

- TypeScript does more than check that the values assigned to variables match their original types. TypeScript also knows what member properties should exist on objects. If you attempt to access a property of a variable, TypeScript will make sure that property is known to exist on that variable's type.
