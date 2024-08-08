console.log("Hii TS")

// let a:number = 12;

// Basic TYPES

let a: number = 24
let b: string = "24"
let c: boolean = true

let array: number[] =[1, 2, 3, 4]
let array2: string[] =["","",""]

// let bigInt: bigint = 126541555116653n;

let user: {name:string, age:number} ={
  name: "TS",
  age: 24
}


let user2: undefined = undefined
let user3: null = null


// Tuple
let tuple: [number, string, boolean, number] = [45, "hi", true, 45]
// const [getter, setter] = useState("")  // tuple example


// enum
enum Color {
  primary = "Blue",
  secondary = "Green"
}

let myColor:Color = Color.primary;

// any 
let anything: any = "could be anything"
anything = 32;


// UNknown
let notSure: unknown = 4;

if(typeof notSure == 'number'){
  // console.log("number")
  notSure.toFixed(2)
}

if (typeof notSure === 'string') {
  notSure.charAt(1)
}


// Never
function infinite(): never{
  while (true) {}
}

function infinitee(message: string): never{
  throw new Error(message)
}


// void
function add(): void {
  console.log(2 + 2)
}

// ------------------------------------------------
// ------------------------------------------------
// ------------------------------------------------



// 3. Types and interfaces


// infers in TS
let inferredNumber = 42;
let inferredString = "Hello, world!";


// types
type User = {
  name: string;
  age: number;
}

const nav: User = {
  name: "John Doe",
  age: 30
}

// ---------------------

// intersection
type Vehicle = {
  name: string;
  year: number;
  model: string
}

type Car = Vehicle & {
  doors: number;
  isElectric: boolean
}

const myCar: Car = {
  name: "Toyota Camry",
  year: 2020,
  model: "LE",
  doors: 4,
  isElectric: false
}



// UNion
let Person: string | object = 'Nav';

Person = {
  name: 'Nav',
}

// ----------------------------


// interface
interface Users {
  name: string;
  age: number;
}

let Person1: Users = {
  name: 'Nav',
  age: 30
}

// ---------------------------------

//* Difference 

interface VehicleInterface{
  name: string;
  year: number;
  model?: string  // ? means it is optional
}

// interface CarInterface extends Vehicle{
//   doors: number;
//   isElectric: boolean
// }
interface VehicleInterface{
  doors: number;
  isElectric: boolean
}

const iCar: VehicleInterface = {
  name: 'Toyota Camry',
  year: 2020,
  // model: 'LE',
  doors: 4,
  isElectric: false
} 

//? So, declaration, mearging is the most imp and key difference

// ------------------------------------


//! Type Assertions 
//? means hume pta hai konsa type aane waala hai but hum ts ko bta nhi sakte abhi


const route = {
  params: 8
}
const value = route.params as number

let capitalize = value.toFixed()    // jonsa type hoga uske methods aa jaayenge

// usasage

let someValue: any = "This is a str"

let strLength: number = (someValue as string).length
let strLength2: number = (<string>someValue).length


// ----------------------------------------
// ----------------------------------------


//! Function
//~ Regular Function

function add1(a:number, b:number): number {
  return a + b;
}

console.log(add1(2,4));

//~ Arrow Function
const sub = (a:number, b:number): number => {
  return a - b;
}

//~ Parameter
//~ 1. Optional Parameter
function greet(name: string, greeting?:string): string {
  return greeting? `${greeting}, ${name}` : `helloe, ${name}`
}

console.log(greet("navyum"));
console.log(greet("navyum", "welcome to ts"));

//~ 2. Default Parameter
function greet2(name: string, greeting:string = "hello"): string {
  return `${greeting}, ${name}`
}

console.log(greet("navyum"));
console.log(greet("navyum", "welcome to ts"));

//~ 3. Rest Parameter
function sum2(...number: number[]): number {
  return number.reduce((a, b) => a + b, 0);
}
console.log(sum2)

// ------------------------------------------------
// ------------------------------------------------


//! Classes

class Personn {
  public name: string;
  private age: number;
  protected address: string;
  readonly birthDate: string;

  // constructor
  constructor(name: string, age: number, address: string, birthDate: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.birthDate = birthDate;
  }

  // getter for age
  public getAge(): number {
    return this.age;
  }
}

const person1 =  new Personn("TS", 22, "India", "25-11-99")

console.log(person1)
console.log(person1.getAge())
person1.birthDate = "4-11-53"

// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------


//! Generics
//~ create component that can work with any data type while still maintaining

function identity<T>(arg: T): T {
  return arg;
}


let numberIdentity = identity<number>(42)
let str = identity<string>("hiii")


interface Pair<T, U> {
  first: T;
  second: U;
}

let numberStringPair: Pair<number, string> = {
  first: 1,
  second: "hello"
}

let booleanStringPair: Pair<string, boolean> = {
  first: "hello",
  second: true
}

//? create stack with genric claas 
class Stack<T> {
  private items: T[] = [];
  push(item: T): void {
    this.items.push(item);
  }
  pop():T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(1)
console.log(numberStack)
console.log(numberStack.pop())

const stringStack = new Stack<string>();
// stringStack.push(1)
stringStack.push("1")

// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------


//! Literal Types in Ts

// String Literal type
type Greeting = "hi" | 2 | "kaise ho?";

function greett(greeting: Greeting) {
  console.log(greeting);
}

greett(2)


// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------


//! Namespace

namespace registerValidation {
  export function validateName(name: string): boolean {
    return name.length > 0;
  }
}
const isValidName = registerValidation.validateName('')
console.log(isValidName)

// -----------------------------------------------------


//! Type Gaurds 
//~ Type gaurd alloe you to create more specific type checks within code blocks

function isString(value: any):value is string {
  return typeof value === "string";
}

function checking(value: string | number) {
  if (isString(value)) {
    console.log("yes its string");
  }else {
    console.log("Number");
  }
}

checking(2)

// -----------------------------------------------------

//! Index signature
// allow you to define types for dynamic property keys

interface StringArray {
  [index: string]: string;
}

let myArray: StringArray;
myArray = {"0": "hello", "1": "world"};

let myStr: string = myArray[0]


// ---------------------------------------------------


//! Keyof operator

interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;
let m: PersonKeys = 'age'
console.log(m)

// ---------------------------------------------------


//! Utility Types

interface Animal {
  name: string;
  sound: string;
}

// type PartialAnimal = Partial<Animal>;
// type RequiredAnimal = Required<Animal>;
type ReadonlyAnimal = Readonly<Animal>;
type RecordAnimal = Record<string, number>;
// pick    
// omit

const dog: RecordAnimal = {
  name: 'dog',
  sound: 'bark'
}

// dog.name = "Tim"

const record: RecordAnimal = {
  name: 1,
}

type NameOnly = Pick<Animal, "name">;
let cat: NameOnly = {
  name: 'cat',
}

type OmitOnly = Omit<Animal, "name">;
let rabbit: OmitOnly = {
  sound: 'meow'
}

// ----------------------------------------------------


// Modules 
import * as MathUnits from './mathUnit'

console.log(MathUnits.add(2,2))
const calc = new MathUnits.Calculator();
console.log(calc.add(2,2))


// -----------------------------------------------


//~ alias
// type definition add on for a variable

type UserId = object | string;   // string alias // object alias
let userId: UserId = "abc"



// -----------------------------------------------


//~ Decorators
// this are used for annotations and a meta-programmin syntax
// class
// method
// property
// parameter
// accessor

function simpleClassDecorator(constructor: Function) {
  console.log('simpleClassDecorator');
}

@simpleClassDecorator
class MyClass {
  constructor() {
    console.log("My Class");
  }
}


const myClassInstance = new MyClass();


// ------------------------------------------------------------
// ------------------------------------------------------------
// ------------------------------------------------------------



//!                   INTERVIEW QUESTIONS



// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------








