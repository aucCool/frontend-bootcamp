# Pasul 1.5 - Construiți o pagină statică în React (Demonstrație)

Pentru a începe construcția aplicației noastre vizate, vom urmări pașii descriși în [Thinking in React](https://reactjs.org/docs/thinking-in-react.html). Primul pas al acestui proces este divizarea aplicației noastre într-o ierarhie de componente. Pentru această aplicație, o vom simplifica și vom folosi doar patru părți.

- TodoHeader
- TodoList
- TodoListItem
- TodoFooter

Puteți găsi HTML-lul pentru aplicația noastră în`step1-05/TodoApp.html`.

## TodoHeader

Vom stoca toate componentele noastre în interiorul folderului `components` sub `src`. Iar acum să îl creăm. Vom începe scrierea `TodoHeader`-lui în `src/components/TodoHeader.tsx`. Extensia fișierului `tsx` amintește editorului nostru că acest fișier include codul React scris în TypeScript.

> În curând vom vorbi despre TypeScript, însă pentru acum, știm că tot ce este valid în JavaScript este valid și în TypeScript.

```jsx
import React from 'react';

export class TodoHeader extends React.Component<any, any> {
  render() {
    return (
      <header>
        <h1>todos</h1>
        <div className="addTodo">
          <input className="textfield" placeholder="add todo" />
          <button className="submit">Add</button>
        </div>
        <nav className="filter">
          <button className="completed">all</button>
          <button>active</button>
          <button>completed</button>
        </nav>
      </header>
    );
  }
}
```

> Rețineți că din moment ce acesta este React, noi trebuie să schimbăm `class` cu `className`, însă nimic altceva nu se modifică.

## TodoListItem

Ori de câte ori vedeți că complexul de elemente se modifică, trebuie să știți ca acesta este de obicei un semn că trebuie să creați o componentă nouă. Cu câteva elemente de recuzită puteți abstractiza, de obicei, toate aceste elemente într-o singură componentă. Acesta este, cu siguranță, cazul cu sarcinile de făcut.

```jsx
import React from 'react';

export class TodolistItem extends React.Component<any, any> {
  render() {
    return (
      <li className="todo">
        <label>
          <input type="checkbox" /> Todo 1
        </label>
      </li>
    );
  }
}
```

> Rețineți că acest control ar putea fi, de asemenea, creat ca o funcție în loc de clasă:
> ```jsx
> export const TodoListItem = (props) => {
>   return (
>     <li className="todo">
>       <label>
>         <input type="checkbox" /> Todo 1
>       </label>
>     </li>
>   );
> }
> ```
