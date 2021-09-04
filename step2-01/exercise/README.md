
# Pasul 2.1 – Introducere în TypeScript (Exercițiu)

[Curs](../../) | [Demonstrație](../demo/) | [Final](../final/)

Dacă încă nu aveți aplicația în derulare, începeți derularea cu `npm start` din rădăcina folderului `frontend-bootcamp`.

Exercițiile vor fi completate în dosarul ce se află sub acest pas step's `exercise/src`, în cazul în care nu se specifică altceva. De asemenea, puteți să deschideți [Pasul 2.01 pagina de exerciții](http://localhost:8080/step2-01/exercise/) pentru a vedea rezultatele muncii dumneavoastră.

## Module

1. Deschideți fișierul `exercise/src/fibonacci.ts` în codul VS

2. Înăuntru acestui fișier, scrieți o funcție numită `fib(n)` care preia un număr și returnează numărul Fibonacci `n`-th (asigurați-vă că specificați tipul `n`).

> HINT: `function fib(n: number) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }`

3. Exportați `fib(n)` precum **named export**

4. Exportați o variabilă constantă `FibConst` precum **default export**

5. Înăuntru aceluiași folder `index.ts`, importați ambele `fib` și `FibConst` și utilizați construcția în funcția `console.log()` pentru a înregistra rezultatele din `fib(FibConst)`.

## Tipuri și interfețe  

Înăuntru `exercise/src/index.ts`-ului:

1. Adăugați un tip alias pentru șirul de tip union ce descrie statusul culorilor din trafic Red-Green-Yellow: `type TrafficLight = ???`

2. Descrieți un tip de mașină cu o interfață: `interface Car { ... }` completată cu  `wheels`, `color`, `make`, `model`

3. Creați o instanță auto validă și înregistrați-o folosind `console.log()`: `const myCar: Car = { ??? }`;

## Generice

Înăuntru `exercise/src/stack.ts`, creați o clasă generică pentru `Stack<T>` completată cu tipuri de metode `pop()` și `push()`.

> Sugestie: matricea JavaScript are deja `push()` și `pop()` implementate pentru dumneavoastră, care pot fi depozitul suport pentru dumneavoastră. 

În `exercise/src/index.ts`, creați un `Stack<number>` și utilizați `console.log()` pentru a îi demonstra funcționalitatea.

## Răspândirea și destructurarea

1. Notați următorul cod în index.ts:

```ts
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
```

2. Acum creați o singură linie, folosind sintaxa de răspândire `{...x, ...y}`, pentru a crea o nouă variabilă `megaObj`, care combină aceste două obiecte.

3. Folosiți sintaxa de destructurare în scopul recuperării valorilor pentru `{first, second, catcher}` din `megaObj`.

## Asincronizare / așteptare 

Notați următorul cod în index.ts:

```ts
function makePromise() {
  return Promise.resolve(5);
}
```

1. Apelați `makePromise()` cu sintaxa `await` și înregistrați rezultatele.

2. Creați o nouă funcție care utilizează cuvântul cheie `async`. În interiorul funcției, faceți un`await` ce apelează `makePromise()` și returnează rezultatele.

