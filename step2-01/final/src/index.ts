import FibConst, { fib } from './fibonacci';
import { Stack } from './stack';

console.log('hello world');

// ---- Module ----
console.log('fib(FibConst) is:', fib(FibConst));

// ---- Tipuri și interfețe ----
type TrafficLight = 'red' | 'green' | 'yellow';
const annoyingLight: TrafficLight = 'red';

interface Car {
  wheels: number;
  color: string;
  make: string;
  model: string;
}

const myCar: Car = {
  wheels: 4,
  color: 'blue',
  make: 'Toyota',
  model: 'Camry'
};
// JSON.stringify realizează o bună reprezentare în șir a unui obiect 
console.log('My car:', JSON.stringify(myCar));

// ---- Generice ----
const myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log('Number on top of the stack:', myStack.pop());

// ---- Distribuiri și destructurări ----
const obj1 = {
  first: 'who',
  second: 'what',
  third: 'dunno',
  left: 'why'
};

const obj2 = {
  center: 'because',
  pitcher: 'tomorrow',
  catcher: 'today'
};

const megaObj = { ...obj1, ...obj2 };

const { first, second, catcher } = megaObj;
console.log('First:', first);
console.log('Second:', second);
console.log('Catcher:', catcher);

// ---- Asincronizare / Așteptare ----
function makePromise(): Promise<number> {
  return Promise.resolve(5);
}

async function getGreeting(name: string): Promise<string> {
  return 'hello ' + name;
}

async function run() {
  const result = await makePromise();
  console.log('makePromise returned:', result);

  const greeting = await getGreeting('Ken');
  console.log('greeting:', greeting);
}

run();

// Faceți din acest fișier un modul, astfel încât codul său să nu intre în domeniul global export {};
