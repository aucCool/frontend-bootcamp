// Tipuri de bază
let isDone: boolean = false;
let decimal: number = 6;
let color: string = 'blue';
let sky: string = `the sky is ${color}`;

// Tipuri de funcție 
type FibFn = (n: number) => number;

// Tipuri de obiect
type Obj = {
  [key: string]: string;
};

// Obiect cu chei specificate
type Specific1 = {
  foo: string;
  bar: number;
  common: string;
};

type Specific2 = {
  alice: string;
  bob: number;
  common: number;
};

// compoziție 
type TypeOfObj = {
  foo: string;
  bar: number;
  obj1: Specific1;
  obj2: Specific2;
};

// Obținerea tipurilor prin proprietăți
type Obj1Type = TypeOfObj['obj1'];

// uniune, intersecție 
type Union = Specific1 | Specific2;
type Intersection = Specific1 & Specific2;

// casting
let choose1 = <Specific1>{ common: '5' };

// uniune șir literară 
type CatStatus = 'alive' | 'dead' | 'both';

// Clase
class Animal { }

// Numai pentru scopuri ilustrative
// În aplicațiile reale, evitați moștenirea, dacă este posibil
// excepție remarcată: React.Component cu react@<16.8.0
class Cat extends Animal { }
class Dog extends Animal { }

// Orice tip - evitarea este posibilă
let mystery: any = "I don't like the person who will be maintaining this code";
mystery = 2;
mystery = () => 3;

// adăugând un export o va transforma într-un "module"
export default {};
