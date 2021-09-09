# Pasul  2.5 - Redux: Magazinul (Demonstrație)

[Cursuri](../../) | [Exercițiu](../exercise/)

În acest pas, ne vom uita la rezolvarea problemelor aplicațiilor complexe (așa cum am menționat în Pasul 4) cu o librărie numită [Redux](https://redux.js.org).

1. Introducere în Redux
2. De ce să folosim Redux?
3. Crearea unui magazin Redux 
4. Reductoare de scriere
5. Acțiuni de expediere

## Introducere în Redux

Amintiți-vă, problemele pe care dorim să le abordăm sunt:

1. Datele necesită să fie trecute în jos de la o componentă la alta prin intermediul suporturilor, chiar și atunci când unele componente intermediare nu utilizează  toate datele.
2. Datele partajate pot fi schimbate de diverși factori (interacțiunea utilizatorului, actualizări de pe server) și nu există o coordonare a acestor schimbări.

Redux este o implementare a modelului arhitectural Flux:

![Flux Diagram](../../assets/flux.png)

### Vizualizare

O vizualizare este o componentă React care consumă magazinul ca și cum ar fi date proprii.

### Acțiuni 

[Acțiuni](https://redux.js.org/basics/actions) sunt mesaje serializabile JSON care reprezintă câteva evenimente, precum acțiunea utilizatorului sau o cerere de rețea. Cu ajutorul **reducers**, ele influențează starea generală. O acțiune ar trebui să conțină cel puțin o cheie `type`. Câteodată aceasta conține date adiționale precum **payload**.

### Magazin

Magazinul [magazin](https://redux.js.org/basics/store) este constituit din **state tree**, **dispatcher**și **reducers**.

1. **state tree**-ul este _singleton_, _serializable_, _immutable_ nested o structură JSON. Aceasta este actualizată instantaneu de către alte reductoare folositoare.

2. Dispecerul [**dispecer**](https://redux.js.org/basics/data-flow) acceptă acțiuni, trecându-le către reductoare.

3. [**Reductori**](https://redux.js.org/basics/reducers) sunt funcții care iau în arborele de stare curent și o acțiune, producând următorul instantaneu al arborelui de stare. Aceasta este singura modalitate de actualizare a arborelui de stare.

## De ce să folosiți Redux?

Există o mulțime de alternative disponibile, dar iată câteva motive foarte bune pentru a folosi Redux:

1. Pentru aplicații mult mai complexe, modelul Flux obligă codul să fie scris într-un mod ușor de argumentat
2. Poate fi necesară serializarea stării aplicației pentru a fi cumva transmisă dincolo de rețea  
3. Instrumentele de dezvoltare sunt cu adevărat uimitoare
4. Popularitatea construcției înseamnă că ecosistemul este matur în acest moment

## Utilizarea Redux-ului

### Crearea magazinului Redux 

Funcția [`createStore()`](https://redux.js.org/api/createstore) este furnizată de Redux pentru a crea un magazin. În general, o aplicație are un singur magazin. Funcția include de obicei reductorul principal și un instantaneu inițial al arborelui de stare.

```ts
const store = createStore(reducer, initialState);
```

### Scrierea reductoarelor

Vom scrie reductoarele noastre cu ajutorul unor utilități de la oficialul [`redux-starter-kit`](https://redux-starter-kit.js.org/), ceea ce micșorează foarte mult cantitatea de spațiu necesară. Procesul de proiectare și implementare a reductoarelor este următorul:

#### 1. Organizați reductorii în funcție de cheile obiectului arbore de stare

Având în vedere un arbore de stare, va fi astfel:

```ts
{
  todos: {
    [id: string]: TodoItem,
  },

  filter: 'all' | 'complete' | 'active'
}
```

V-am organiza reductoarele dumneavoastră care se potrivesc cu cheile arborelui de stare și le-am combina cu [`combineReducers()`](https://redux.js.org/recipes/structuring-reducers/using-combinereducers):

```ts
import { createReducer } from 'redux-starter-kit';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  todos: createReducer({}, {
    addTodo: (state, action) => { /* ... */ }
  }),
  filter: createReducer('all', {
    setFilter: (state, action) => { /* ... */ }
  })
})
```

#### 2. Scrieți reductoarele cu mutabile

Simplificat Redux, reductoarele trebuie să facă o copie a stării înainte de a face modificări, dar [`createReducer()`](https://redux-starter-kit.js.org/api/createreducer) va traduce automat toate mutațiile în stare în instantanee imuabile (!!!!!):

```ts
// first argument: initial state
// second argument: object whose keys correspond to possible values of action.type
const todosReducer = createReducer(
  {},
  {
    addTodo: (state, action) => {
      state[action.id] = { label: action.label, completed: false };
    }
  }
);
```

### Acțiuni de expediere
Expedierea unei acțiuni va transmite acțiunea și starea curentă către reductoare. Reductorul de rădăcină va produce un nou instantaneu al întregului arbore de stare. Putem inspecta instantaneul afectat cu ajutorul `getState()`-ului.

```ts
const store = createStore(reducer, initialState);
store.dispatch({ type: 'addTodo', label: 'hello' });
store.dispatch({ type: 'addTodo', label: 'world' });
console.log(store.getState());
```

Crearea manuală a acestor mesaje de acțiune este obositoare, așa că folosim creatorii de acțiuni pentru a face acest lucru:

```ts
const actions = {
  addTodo = (label: string) => ({ label, id: nextId(), completed: false })
};

store.dispatch(actions.addTodo('hello'));
```
