# Pasul 2.1 - Introducere în TypeScript (Demonstrație)

[Lessons](../../) | [Exercise](../exercise/) | [Final](../final/)

În acest curs, vom descoperi destule concepte TypeScript pentru a fi productivi în cadrul utilizării React & Redux.

Acest pas va include următoarele subiecte:

- [ES modules](#modules)
- [Types](#typescript-types)
- [Spread](#spread-operator) și [Destructuring](#destructuring)
- [Promise](#promise) și [Async / Await](#async--await)

> Pentru a încerca utilizarea conceptelor noastre TypeScript și pentru a vedea corespondentul în JavaScript, puteți utiliza [TypeScript playground](http://www.typescriptlang.org/play/index.html). Nu o vom utiliza în aceast curs, însă, în general, este destul de folositoare. 

## Modules

Din punct de vedere istoric, JS a fost executat numai în browser. Codul trebuia încărcat cu ajutorul etichetelor `<script>`. Odată cu introducerea node.js-ului, comunitatea JS avea nevoie de o modalitate de o calculare mai complexă, nu doar a fișierelor de tip script. Alte limbaje acceptă noțiunea de module, astfel încât diferite grupuri au început să dezvolte standarde de modularitate pentru JS.

Cele mai importante lucruri de știut sunt următoarele:

- **commonjs** - standardul Node.js-ului pentru a suporta module-le
  - încărcarea sincronă folosind funcțiile `require()` 
  - `require()` ce poate fi solicitată dinamic în cursul programului
- **ESM (ECMAScript module)** - suport la nivel de limbaj 
  - analizarea statică și sincronă
  - suportul dinamic și asincron cu ajutorul `import()` care va returna promise

> Pentru mai multe informații despre tiparele și standardele _many_ modularity dezvoltate de-a lungul timpului, vedeți [acest articol](https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc). Încă s-ar putea să mai întâlniți unele din tiparele vechi în codul moșteninit.

## Tipuri TypeScript 

Referire către [`demo/src/types`](./src/types/index.ts) pentru exemple a unor tipuri valabile în TS care beneficiază de derulare React.

## Operator Spread 

Operatorul spread `...` oferă o modalitate rapidă de clonare și concatenare a obiectelor și matricelor. Această sintaxă este întâlnită de multe ori în interiorul suporturilor React și a reductoarelor Redux.

Cu **objects**:

```ts
// Shallow copy an object
const cloned1 = { ...obj };

// Shallow copy and add/overwrite a key
const overridden1 = { ...obj, key: value };

// Shallow copy multiple objects and add a key
const cloned2 = { ...obj1, ...obj2, key: value };

// Use an expression to calculate a key dynamically
const overridden = { ...object, [key + '-suffix']: value };
```

Cu **arrays**:

```ts
const copy1 = [...arr];
const copy2 = [...arr1, ...arr2];
const copyWithExtras = [123, ...arr, 'hello'];
```
Distribuirea unei matrici în argumente poziționale la o funcție: 

```ts
function myFunc(a: number, b: number, c: number) {
  // ...
}
const arr = [1, 2, 3];
myFunc(...arr);
```

Distribuirea unui obiect în suporturi pentru o componentă React:

```jsx
const obj = { a: 1, b: 2, c: 3 };
// equivalent to:
// <MyComponent a={obj.a} b={obj.b} c={obj.c} />
const rendered = <MyComponent {...obj} />;
```

## Destructuring

Destructurarea este o modalitate concisă de a înlătura proprietățile unui obiect sau unei matrici:

```ts
const obj = { foo: 1, bar: 2 };
const { foo, bar } = obj;
// foo = 1, bar = 2

const arr = [1, 2];
const [foo, bar] = arr;
// foo = 1, bar = 2
```

Puteți separa un obiect de restul obiectelor cu ajutorul destructurării: 

```ts
const obj = { a: 1, b: 2, c: 3, d: 4 };
const { a, ...rest } = obj;
// a = 1, rest = {b: 2, c: 3, d: 4}

const arr = [1, 2, 3];
const [foo, ...bar] = arr;
// foo = 1, bar = [2, 3]
```

## Promise

Promise-ul este un obiect ce reprezintă lucrul ce va fi finalizat ulterior, asincron. Promise-le sunt înlănțuite, aceasta ne ajută la scrierea unui cod asincron mentenabil. (Tipic, codul asincron moștenit folosește apeluri inverse pentru a permite apelantului să aibă control asupra a ceea ce trebuie să facă după ce sarcina a fost finalizată, care devine [foarte greu de citit](http://callbackhell.com/).) 

```ts
const aPromise = new Promise((resolve, reject) => {
  // do something async and call resolve() to let promise know it is done
  setTimeout(() => {
    // setTimeout will call this method after 1s, simulating async operation like network calls
    resolve();
  }, 1000);
});
```

Fiecare instanță promise expune o funcție `then()` care este înlănțuită. Aceasta va furniza, de asemenea, `catch()`, care cuprinde toate excepțiile sau apelurile `reject()`:

```ts
// Promise.resolve() creates an already-resolved promise instance
const aPromise = Promise.resolve('hello world');

aPromise
  .then(result => {
    return makeAnotherPromise();
  })
  .then(result => {
    return makeYetAnotherPromise();
  })
  .catch(err => {
    console.error(err);
  });
```

> Pentru mai multe informații, vedeți [aceasta sinteza a promise-urilor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) sau [această aprofundare](https://developers.google.com/web/fundamentals/primers/promises). 

## Async / await

**Async / Await** este o proprietate la nivel de limbaj pentru scrierea funcțiilor asincrone la fel ca pentru cele obișnuite, codificate sincron. Suportul JS pentru aceasta este construit pe baza superiorității `Promise`-ului și inspirat puternic din [C#'s async / await syntax](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/). O funcție asincronă este scrisă în următorul mod: 

```ts
async function someFunctionAsync() {
  // Inside here, we can await on other async functions
  const result = await someOtherFunctionAsync();
  return result + ' hello';
}
```

Toate funcțiile care sunt marcate cu `async` redau automat o `Promise`. Exemplele anterioare returnau o `Promise<string>` și pot fi folosite astfel: 

```ts
someFunctionAsync().then(result => {
  console.log(result);
});
```

> Pentru mai multe informații, vedeți [acest articol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).
