// De făcut: importați funcția fib(n) și constanta din './fibonacci.ts'
// import FibConst, {fib} from ...

// De făcut: importați Stack din ...

// Derulați exercițiul aici, obțineți rezultatelor utilizând console.log()
console.log('hello world');

// ---- Modules ----

// De făcut: înregistrați rezultatele din istoric (FibConst)

// ---- Tipuri și Interfețe ----

// De făcut: definiți tipul TrafficLight 
// type TrafficLight = ???

// De făcut: definiți interfața Car 
// interface Car { ??? }

// De făcut: creați instanța Car 
// const myCar: Car = { ??? }

// ---- Generice ----

// De făcut: Demonstați Stack-ul
// const myStack: Stack<number> = ???

// ---- Distribuirea și destructurarea ----
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

// De făcut: combinați obj1 și obj2 într-un singur obiect megaObj folosind sintaxa de distribuire
// const megaObj = ???

// De făcut: utilizați sintaxa de destructurare și înregistrați rezultatele { first, second, catcher }

// ---- Asincronizare / Așteptare ----
function makePromise() {
  return Promise.resolve(5);
}

// De făcut: creați o funcție nouă asincronă

async function run() {
  // De făcut: apelați makePromise() folosind sintaxa de așteptare și înregistrați rezultatele
  // De făcut: apelați funcția dumneavoastră asincronă 
}

run();

// Faceți din acest fișier un module, astfel încât codul său să nu intre în domeniul global
export {};
