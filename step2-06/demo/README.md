# Pasul 2.6 - Redux: React binding (Demo)

[Cursuri](../../) | [Exerciții](../exercise/)

Redux este în prezent cea mai populară implementare Flux și, ca urmare, ecosistemul bibliotecilor conexe a crescut. Acesta este unul dintre motivele pentru care este o bibliotecă foarte populară în cadrul produselor Microsoft.

Diverși utilizatori GitHub users au colecționat "awesome lists" de tehnologie și articole similare cuRedux. Aici este [o astfel de listă](https://github.com/xgrommx/awesome-redux#react---a-javascript-library-for-building-user-interfaces), dar este literalmente imposibil să enumerăm toate tehnologiile conexe.

În acest curs, introducem o bibliotecă utilă care funcționează cu Redux: [`react-redux`](https://react-redux.js.org/). Intrucat codul pasului 2.5 ar putea fi utilizat cu o oricare construcție web UI, acum vom utiliza `react-redux` pentru a conecta magazinul la aplicația noastră React. Există doi pași în acest proces:

1. Furnizarea magazinului pentru vizualizări
2. Cartografierea magazinului cu suporturi

## Furnizarea contextului magazinului vizualizărilor

Componentele clasei vor accesa magazinul Redux prin intermediul [`<Provider>`](https://react-redux.js.org/api/provider) din `react-redux`. Sub acoperire, `react-redux` folosește conceptul API pentru a trece magazinul către componentele descendente.

```jsx
const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <div>Hello World!</div>
    </Provider>
  );
};
```

## Cartografierea magazinului cu suporturi

`react-redux` frunizează, de asemenea,funcții [`connect()`](https://react-redux.js.org/api/connect), care mapează porțiuni din arborele de stare și distribuie funcțiile în suporturi pentru componenta subsidiară React. Să vedem cum se face acest lucru.


```jsx
import { connect } from 'react-redux';

const MyComponent = props => {
  return <div>
    {props.prop1}
    <button onClick={props.action1()}>Click Me</button>
  </div>;
};

const ConnectedComponent = connect(
  state => {
    prop1: state.key1,
    prop2: state.key2
  },
  dispatch => {
    action1: (arg) => dispatch(actions.action1(arg)),
    action2: (arg) => dispatch(actions.action2(arg)),
  }
)(MyComponent);
```

Deci, există o mulțime de lucruri de asimilat. Vom parcurge diferitele părți:

1. `<MyComponent>` este o componentă simplă care se așteaptă să aibă suporturi, fără nicio cunoștință despre Redux. Este doar o simplă componentă React.

2. Funcția `connect()` preia mai multe argumente.

   - Primul argument mapează fragmente de Redux _state tree_ into `<MyComponent>` _props_
   - Al doilea argument mapează funcții de distribuire în `<MyComponent>` _props_ (utilizate, în general, ca și apeluri de reîntoarcere pentru a răspunde la interacțiunea utilizatorului)

3. În cele din urmă, `connect()` returnează de fapt o funcție, pe care o apelăm imediat să **decorate** `<MyComponent>` în `<ConnectedComponent>` - este o sintaxă dubioasa, așa că studiați-o aici mai atent.

> Da, `connect()` este o funcție care preia funcții ca argumente și returnează o funcție care preia o componentă și returnează o componentă . Încercați să repetați aceasta repede de 10 ori. :)

## O notă despre performanță

Unii oameni care trec prin acest bootcamp abia așteaptă să înceapă să creeze aplicații cu tipuri rapide Redux. Performanța nu este gratuită, și în mod sigur nu este cu Redux. Încercați să parcurgeți aceste link-uri pentru a începe acest subiect:

https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#redux-performance
