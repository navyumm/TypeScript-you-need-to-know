
# Topics we gonna covers here

1. Setup Typescript in VS code
2. Data Types
   * Number, String, Boolean, Big int
   * Array, Tupples
   * any, unknown never void 
   * enums
3. Types and interfaces
4. Union and Intersection
5. Aliases
6. Classes and Generics
7. Funtions
8. Literal Types 
9. Assertions Types
10. Modules
11. Decorators
12. Special Types Bonus


## Extensions
JavaScript and TypeScript Nightly
ESLint
Prettier ESLint
Pretty TypeScript Errors
ES7+ React/Redux/React-Native snippets


npm i typescript -g
npm i -g ts-node
tsc -init
   "module": "ES2022",
   


## Some Imp QUestions

### Que 1: What is TypeScript and how does it differ from JavaScript?
TypeScript is a super set of javaScript that adds static types. It provides type safety and pattern tooling spot compared to javaScript.

### Que 2: What are the benefits of using TypeScript?
TypeScript provides several benefits, including improved code maintainability, better code completion, and reduced errors.

### Que 3: What are the basics type in TypeScript.
Basic types include number, string, Boolean, Null, Undefined and Any.


### Que 4: How do you declare a variable with his specific type in typescript?
let variableName: type = value;

let name: string = 'John Doe';
let age: number = 30;
let isAdmin: boolean = true;


### Que 5: What is an interface in typescript?
An interface is a way to define a contract for classes or objects, specifying what properties and methods they should have.


### Que 6: What is the purpose of type and interface in typescript?
Both type and interface are used to define shapes of objects and functions.
Interfaces are preferred for defining object structures and extending classes,
while type is more flexible and can define complex union and intersection types.


### Que 7: What are TypeScript enums and how are they used?
Enums are a way to define a set of named constants.
They can be numeric or string-based.

### Que 8: Explain the concept of union types in typescript?
In TypeScript, a union type is a way to define a value that can be one of multiple types. It allows you to combine multiple types into a single type, indicating that a value can be any one of those types.

syntax:
type UnionType = Type1 | Type2 | ... | TypeN;


### Que 9: How do you handle optional properties in typescript?
In TypeScript, you can handle optional properties by using the " ? " symbol after the property name in an interface or type definition.

```
interface User {
  name: string;
  age?: number; // age is an optional property
}

const user1: User = {
  name: 'John Doe',
  age: 30
};

const user2: User = {
  name: 'Jane Doe'
}; // no error, age is optional
```

### Que 10: What are generics in typescript and why are they useful?
Generics allow you to create reusable components that can work with any data type.
They help in maintaining type safety while writing reusable code.


### Que 11: What is type inference in typescript?
Type inference in typescript's ability to automatically deduce the type of a variable based on its value.


### Que 12: What are tigers and how do they work?
Type guards are functions or constructors that help typescript narrow down the type of a variable within a conditional block.

### Que 13: How does tysship handle module resolution and what does the difference strategies?
Typescript handles module resolution based on configuration options,
like baseURL, paths, and module resolution.
Strategies include nodejs and classic

### Que 14: What declaration files (.d.ts) and how are they used?
Declaration files provide type information about javascript libraries. They help typescript understand types from non-typescript code.

### Ques 15: How do you work with advanced types like map types and conditional types in typescript?
Mapped types create new types by transforming existing ones, while conditional types provide a way to define types based on conditions.
Example of conditional type: 
1
``` type Truefalse<T> = T extends true ? 'Yes' : 'No'; ```

### Que 16: Why do we use tuples in typescript? loophole or limitations when using tuples in typescript?
A couple is a special type of array in typescript that allows you to define an array with a fixed number of elements each with a specific type tuples are useful when you need a heterogeneous collection of values.

Example of Tuple Loophole:
```
let person: [string, number] = ["Alice", 30];
person[2] = "New Value";
```





