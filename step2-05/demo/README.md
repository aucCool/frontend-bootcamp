# Step 2.5 - Redux: The Store (Demo)

[Lessons](../../) | [Exercise](../exercise/)

In this step, we will look at solving the problems of complex applications (as mentioned in Step 4) with a library called [Redux](https://redux.js.org).

1. Introduction to Redux
2. Why use Redux?
3. Creating the Redux store
4. Writing reducers
5. Dispatching actions

## Introduction to Redux

As a reminder, the problems that we want to address are:

1. Data needs to be passed down from component to component via props, even when some intermediate components don't use all of the data.
2. Shared data can be changed by various actors (user interaction, updates from server), and there is no coordination of these changes.

Redux is an implementation of the Flux architectural pattern:

![Flux Diagram](../../assets/flux.png)

### View

A view is a React component that consumes the store as its data.

### Actions

[Actions](https://redux.js.org/basics/actions) are serializable JSON messages that represent some event, such as a user's action or a network request. With the aid of **reducers**, they affect the overall state. At minimum, an action should contain a `type` key. Sometimes it contains additional data as a **payload**.

### Store

The [store](https://redux.js.org/basics/store) consists of a **state tree**, a **dispatcher**, and **reducers**.

1. The **state tree** is a _singleton_, _serializable_, _immutable_ nested JSON structure. It is updated from one snapshot to another using reducers.

2. The [**dispatcher**](https://redux.js.org/basics/data-flow) accepts actions, passing them to the reducers.

3. [**Reducers**](https://redux.js.org/basics/reducers) are functions that take in the current state tree and an action, producing the next snapshot of the state tree. This is the only way to update the state tree.

## Why use Redux?

There are lots of alternatives available, but here are some really good reasons to go with Redux:

1. For more complex applications, Flux pattern forces code to be written in a way that is easy to reason about
2. There may be a need to serialize the application state to be transmitted across the network somehow
3. Dev tooling is really amazing
4. Popularity of the framework means the ecosystem is mature at this point

## Using Redux

### Creating the Redux store

The [`createStore()`](https://redux.js.org/api/createstore) function is provided by Redux to create a store. In general, an application has a single store. The function typically takes in the main reducer and an initial snapshot of the state tree.

```ts
const store = createStore(reducer, initialState);
```

### Writing reducers

We'll write our reducers with the help of some utilities from the official [`redux-starter-kit`](https://redux-starter-kit.js.org/), which greatly decreases the amount of boilerplate needed. The process for designing and implementing reducers is as follows:

#### 1. Organize reducers according to the keys of the state tree object

Given a state tree shaped like this:

```ts
{
  todos: {
    [id: string]: TodoItem,
  },

  filter: 'all' | 'complete' | 'active'
}
```

We would organize our reducers matching the keys of the state tree and combine them with [`combineReducers()`](https://redux.js.org/recipes/structuring-reducers/using-combinereducers):

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

#### 2. Write the reducers with mutables

In plain Redux, reducers must make a copy of the state before making modifications, but [`createReducer()`](https://redux-starter-kit.js.org/api/createreducer) will automatically translate all the mutations to the state into immutable snapshots (!!!!!):

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

### Dispatching actions

Dispatching an action will pass the action and the current state to the reducers. The root reducer will produce a new snapshot of the entire state tree. We can inspect the affected snapshot with the help of `getState()`.

```ts
const store = createStore(reducer, initialState);
store.dispatch({ type: 'addTodo', label: 'hello' });
store.dispatch({ type: 'addTodo', label: 'world' });
console.log(store.getState());
```

Creating these action messages by hand is tedious, so we use action creators to do that:

```ts
const actions = {
  addTodo = (label: string) => ({ label, id: nextId(), completed: false })
};

store.dispatch(actions.addTodo('hello'));
```


# Pasul  2.5 - Redux: Magazinul (Demonstrație)

[Cursuri](../../) | [Exercițiu](../exercise/)

În acest pas,  ne vom uita la rezolvarea problemelor aplicațiilor complexe (așa cum am menționat în Pasul 4) cu o librărie numită  [Redux](https://redux.js.org).

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

O vizualizare este o componentă React care consumă magazinul ca pe datele sale.

### Acțiuni 

[Acțiuni](https://redux.js.org/basics/actions) sunt mesaje serializabile JSON care reprezintă câteva evenimente, precum acțiunea utilizatorului sau o cerere de rețea. Cu ajutorul  **reducers**,  ele influențează starea generală. Cel puțin, o acțiune ar trebui să conțină o cheie `type` . Câteodată aceasta conține date adiționale precum **payload**.

### Magazin

Magazinul  [magazin](https://redux.js.org/basics/store) este constituit din **state tree**,  **dispatcher**și **reducers**.

1. **state tree**-ul este _singleton_, _serializable_, _immutable_ nested o structură JSON . Aceasta este actualizată instantaneu către alte reductoare folositoare.

2. Dispecerul [**dispecer**](https://redux.js.org/basics/data-flow) acceptă acțiuni, trecându-le către reductoare.

3. [**Reductori**](https://redux.js.org/basics/reducers) sunt funcții care iau în arborele de stare curent și o acțiune, producând următorul instantaneu al arborelui de stare.  Aceasta este singura modalitate de actualizare a arborelui de stare.

## De ce să folosiți Redux?

Există o mulțime de alternative disponibile, dar iată câteva motive foarte bune pentru a folosi Redux:

1. Pentru aplicații mult mai complexe, modelul Flux obligă codul să fie scris într-un mod ușor de argumentat
2. Poate fi necesară serializarea stării aplicației pentru a fi transmisă cumva dincolo de rețea  
3. Instrumentele de dezvoltare sunt cu adevărat uimitoare
4. Popularitatea construcției înseamnă că ecosistemul in acest moment este matur

## Utilizarea Redux-ului

### Crearea magazinului Redux 

Funcția [`createStore()`](https://redux.js.org/api/createstore) este furnizată de Redux pentru a crea un magazin. În general, o aplicație are un singur magazin. Funcția include de obicei reductorul principal și un instantaneu inițial al arborelui de stare.
```ts
const store = createStore(reducer, initialState);
```

### Scrierea reductoarelor

Vom scrie reductoarele noastre cu ajutorul unor utilități de la oficial [`redux-starter-kit`](https://redux-starter-kit.js.org/), ceea ce scade foarte mult cantitatea de cazan necesară.  Procesul de proiectare și implementare a reductoarelor este după cum urmează:

#### 1. Organizați reductorii în funcție de cheile obiectului arbore de stare

Având în vedere un arbore de stare astfel:

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

Simplificat Redux, reductoarele trebuie să facă o copie a stării înainte de a face modificări , dar [`createReducer()`](https://redux-starter-kit.js.org/api/createreducer) va traduce automat toate mutațiile în stare în instantanee imuabile (!!!!!):

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
Expedierea unei acțiuni va transmite acțiunea și starea curentă către reductoare.  Reductorul de rădăcină va produce un nou instantaneu al întregului arbore de stare.  Putem inspecta instantaneul afectat cu ajutorul `getState()`-ului.

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
