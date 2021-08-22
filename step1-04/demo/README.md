# Pasul 1.4 – Introducere în modificări  (Demonstrație)

În această demonstrație vom crea o simplă numărare  care ne va afișa un număr și o creștere a acestuia în momentul accesării.

Să începem această demonstrație în [CodePen](https://codepen.io/micahgodbolt/pen/wOWeVb?editors=0010).

## Modifică Hello World

```js
ReactDOM.render(<p>Hello World</p>, document.getElementById('app'));
```

Apelând  „ReactDOM.render ()” reprezintă modul în care codul nostru ajunge pe pagină.  Funcția ia doi parametri: conținutul de plasat pe pagină și elementul în care doriți să fie plasat.

Primul parametru `render()` seamănă în mare parte cu  HTML, dar de fapt, nu este așa [JSX](https://reactjs.org/docs/introducing-jsx.html). Aici sunt câteva diferențe majore între  JSX și HTML:

- Din moment ce `class` este o [reserved word](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) în  JavaScript, veți avea nevoie sa folosiți `className` asupra etichetelor dumneavoastră HTML: `<div className="foo">`
- Putem folosi etichete HTML personalizate corespunzător componentelor React pe care le creăm: `<div><MyControl>hi</MyControl></div>`
- Comenzile pot fi închise automat: „<MyControl text = 'hi' />“
 - Puteți utiliza JavaScript în JSX!

## Scrierea unei componente de modificat

O componentă React reprezintă o bucată de cod ce returnează o parte din aplicația dumneavoastră.  Aceasta poate include marcaje HTML, stiluri CSS și funcționalități bazate pe JavaScript.

Componentele pot fi create în doua moduri. Primul este o metodă de a utiliza [JavaScript class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), în care se extind (inherits from) clasele de `React.Component`.

Clasele în JavaScript oferă o modalitate de a colecta metode (funcții) și proprietăți (valori) într-un container extensibil.  Extindem „React.Component” deoarece acesta ne oferă mai multe metode încorporate, inclusiv „render”.
```jsx
class App extends React.Component {
  render() {
    return <p>Hello World</p>;
  }
}
```

De asemenea, putem să scriem această componentă precum ofuncție:

```jsx
const App = props => {
  return <p>Hello World</p>;
};
```

Mutând marcajul „Hello World” în funcția „render” a aplicației noastre, după, putem actualiza apelul `ReactDOM.render ()` să arate astfel:

```jsx
ReactDOM.render(<App />, document.getElementById('app'));
```

> Rețineți că componentele React pot fi refolosite scriindu-le în același mod precum o etichetă HTML.

### Props

Indiferent dacă scrieți componenta ca o clasă sau o funcție, aceasta poate primi  elemente de recuzită suplimentare folosind aceeași sintaxă ca și pentru atributele HTML, precum ‘id` sau` href`.

```jsx
<App text="Hello World" />
```

Suportul `text`-ului poate fi accesat în interiorul componentei dumneavoastră prin intermediul ` props.text` într-o componentă funcțională sau `this.props.text` într-o componentă de clasă.

```jsx
const App = props => {
  return <p>{props.text}</p>;
};
```

`props` permite componentei dumneavoastră să fie mult mai reutilizabilă, din moment ce puteți crea mai multe instanțe ale aceleiași componente cu suporturi diferite.

```jsx
ReactDOM.render(
  <div>
    <App text="Hello World" />
    <App text="How are you doing?" />
  </div>,
  document.getElementById('app')
);
```

> Rețineți că o funcție de redare poate returna doar un singur element, astfel încât cele două componente ale „App”-ției noastre trebuie să fie împachetate într-un „div”.

```jsx
const App = props => {
  return <p>{props.text ? props.text : 'oops!'}</p>;
};
```

### Destructurarea suportului
 
Scrierea în repetate rânduri a  „props.text”  într-o funcție (sau a  „this.props.text” într-o clasă) poate fi destul de obositoare. Deoarece acesta este de ademenea  JavaScript, ați putea crea o nouă variabilă pentru acest text folosind atribuirea variabilelor.

```jsx
const App = props => {
  const text = props.text;
  return <p>{text ? text : 'you missed something'}</p>;
};
```

Acest lucru funcționează bine pentru un singur suport, însă componenta dumneavoastră începe să devină mai complexă:

```jsx
<MyComponent
  open={false}
  count={5}
  text="Hi there"
  items={['cat', 'dog', 'bird']}
  config={{
    start: 1,
    end: 10,
    autoStart: true
  }}
/>
```

> Rețineți că toate valorile care nu sunt șir sunt trecute prin JavaScript ca o  împachetarea a acestora în `{}`.

Codul dumneavoastră începe să arate astfel:

```jsx
const open = props.open;
const text = props.text;
const count = props.count;
const items = props.items;
const start = props.config.start;
const end = props.config.end;
```

O abordare comună pentru simplificarea acestui proces este utilizarea unei sintaxe numită [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring).

Destructurarea vă permite să extrageți individual părți informaționale dintr-un obiect printr-o  singură formulare.

```jsx
const {
  open,
  text,
  count,
  items,
  config: { start, end }
} = props;
```

Deci, în timp ce acest lucru ar putea fi exagerat chiar acum, va fi mai ușor să adăugați suporturi treptat.

### Curățarea

Înainte de a trece mai departe, vom modifica apelul nostru „ReactDOM.render” doar pentru a include aplicația noastră.  Acest apel de redare include de obicei doar o singură componentă fără elemente de recuzită.

 În continuare vom crea o componentă „Counter”.  Vom adăuga acum acest lucru în aplicația noastră, apoi vom începe să scriem controlul.

```jsx
const App = props => {
  return <Counter text="chickens" />;
};

ReactDOM.render(<App />, document.getElementById('app'));
```
> Rețineți valorificarea `Counter`-ului. Este posibil ca HTML să nu fie un caz prea senzitiv, însă  JSX este!  O metodă obișnuită este de a folosi numele cu majusculă a elementelor HTML pentru a denumi componentele React corespunzătoare: Buton, Selectare, Etichetă, Formă etc.

## Scrierea unei componente de stare Counter 

 React permite fiecărui control să-și specifice propriul bagaj de date, numit ** stare **.  Putem oferi referință valorilor actuale atunci când redăm UI-ul nostru, și, de asemenea, putem actualiza starea pe parcursul derulării aplicației noastre.

> Cele mai multe componente de stare pe care le veți vedea astăzi vor fi bazate pe „class”.  Recent, este posibil să adăugați starea componentelor funcționale prin utilizarea [`hooks`](https://reactjs.org/docs/hooks-intro.html)

### Adăugarea stării 

Clasele JavaScript folosesc o metodă `constructor` pentru a instanția fiecare copie a unei clase, împreună cu orice stare aplicabilă.  Să creăm o nouă componentă numită „Contor” și să îi oferim o stare care conține o proprietate `clicks` cu o valoare implicită de `0`;


```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }
}
```

- Constructorul preia componentele `props`-ului.
-  [`super()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) funcția numește constructorul din clasa sursă (în acest caz `React.Component`).
-  `clicks`-urile noastre din valoarea de stare pot fi acum accesate prin `this.state.clicks`. Mai târziu, noi putem actualiza starea accesând `this.setState({ clicks: 1 })`.

### Redarea numărării noastre

Pentru componenta noastră `Counter`, scopul este de a fi capabili să urmărim de câte ori este accesat butonul de numărare. Vom folosi următorul marcaj.
```jsx
render() {
  const {text} = this.props;
  const {clicks} = this.state;
  return (
    <div>
      {text}: {clicks}
      <button>Click</button>
    </div>
  )
}
```

### Scrierea accesării butonului nostru 

Următorul nostru pas este să conectăm butonul pentru a crește numărul de `clicks`-uri în componenta noastră de stare.

> Prin convenție, plasarea altor metode mai jos de `render()`, și metode private (acestea sunt doar pentru uz intern) vor fi precizate cu un subliniat.

Această funcție va actualiza starea componentei noastre, incrementând valoarea clicurilor cu 1. (Rețineți că `setState` modifică doar valorile tastelor listate în obiectul trecut ca parametru al acestuia.)

```jsx
_onButtonClick = () => {
  this.setState({
    clicks: this.state.clicks + 1
  });
};
```

> Aceasta nu este o metodă exactă, doar o proprietate de clasă care este setată la un [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). Acest lucru funcționează în cea mai mare parte ca `onButtonClick() { }` însă elimina decizia de [extra boilerplate](https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb) folosită pentru a evita potențialul "gotchas" cu [how `this` works in JavaScript](https://codeburst.io/javascript-the-keyword-this-for-beginners-fb5238d99f85).)

> Rețineți că apelarea `setState`-ului ar mai putea fi scrisă ca `this.setState(prevState => ({ clicks: prevState.clicks + 1 }));` pentru a se asigura că starea nu este actualizată până când starea anterioară nu a fost determinată.
Acum, că avem o funcție de creștere a numărării, nu mai rămâne decât să o conectăm la butonul nostru.

```jsx
<button onClick={this._onButtonClick}>Click</button>
```

> Rețineți, de asemenea, că fiecare „Contor” își păstrează propria stare!  Puteți modifica starea din interiorul unui contor fără a-i afecta pe ceilalți.

## Încercați totul!

Adăugați câteva `Counter`-uri în a noastră `App`,fiecare cu text diferit. Observați cum pot lua cu ușurință diferite suporturi și însă își menținpropria stare.

## Implimentarea acestuia în codul nostru

Pentru a încarca aplicația noastră, va trebui să împărțim fișierul în bucăți mai mici, ce pot fi refolosite.  În această parte a demonstrației vom analiza folderul `final` și modul în care sistemul modulului JavaScript ne permite să împărțim componentele noastre într-o colecție de fișiere care le exportă funcționalitatea.

### Exportările și importările modulului

Deschide `step1-04/final/components/Counter.tsx` și analizează componenta `Counter` .

```tsx
export class Counter extends React.Component {
  // ...
}
```

Acest File exportă componenta Counter component ca o **named export**. Asta  înseamnă că atunci când îl importăm,  facem următoarele:
```tsx
import { Counter } from './components/Counter';
```

> Rețineți că tastați  `{}` în jurul valorii import. De fapt, acesta este un exemplu de destructurare.

#### Exporturi implicite

De obicei folosim exporturi denumite, dar este posibilă și exportarea unei valori implicite precum:
```tsx
export default class Counter extends React.Component {
  // ...
}
```
Când importăm componenta, o putem numi oricum dorim:

```tsx
import SomeCounterComponent from './components/Counter';
```

## Scrierea unei componente a Button-ului

Butoanele se numără printre cele mai frecvente componente scrise. Butoanele personalizate vă ajută să abstrați stilul comun, să adăugați pictograme sau alte decorațiuni și să măriți funcționalitatea (butoane de meniu etc.).  Să aruncăm o privire rapidă asupra unei componente de buton personalizate pentru a vedea cum se îmbină împreună.

```jsx
import React from 'react';
import './Button.css';

export const Button = props => {
  return (
    <button className="Button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
```



