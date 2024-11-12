Modules

- TypeScript is able to work with those modern module files as well as older files.

- Anything declared in a module file will be available only in that file unless an explicit export statement in that file exports it.

- A variable declared in one module with the same name as a variable declared in another file won't be considered a naming conflict (unless one file imports the other file's variable).

- The following a.ts and b.ts files are both modules that export a similarly named shared variable without issue. c.ts causes a type error because it has a naming conflict between an imported shared and its own value:
  // a.ts
  export const shared = "Cher";

  // b.ts
  export const shared = "Cher";

  // c.ts
  import { shared } from "./a";
  //
  // Error: Import declaration conflicts with local declaration of 'shared'.

  export const shared = "Cher";
  //
  // Error: Individual declarations in merged declaration
  // 'shared' must be all exported or all local.

- If a file is a script, though, TypeScript will consider it to be globally scoped, meaning all scripts have access to its contents. That means variables declared in a script file cannot have the same name as variables declared in other script files.

- The following a.ts and b.ts files are considered scripts because they do not have module-style export or import statements. That means their variables of the same name conflict with each other as if they were declared in the same file:

// a.ts
const shared = "Cher";
//
// Cannot redeclare block-scoped variable 'shared'.

// b.ts
const shared = "Cher";
//
// Cannot redeclare block-scoped variable 'shared'.

- If you see these "Cannot redeclare..." errors in a TypeScript file, it may be because you have yet to add an export or import statement to the file. Per the ECMAScript specification, if you need a file to be a module without an export or import statement, you can add an export {}; somewhere in the file to force it to be a module.

// a.ts and b.ts
const shared = 'Cher'; // Ok

export {};

- TypeScript will not recognize the types of imports and exports in TypeScript files written using older module systems such as CommonJS.

- TypeScript will generally see values returned from CommonJS-style require functions to be typed as any.
