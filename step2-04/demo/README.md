# Pasul 2.4 - React Context (Demonstrație)

[Curs](../../) | [Exercițiu](../exercise/)

În această parte, vom descrie câteva probleme pe care le întâlnim atunci când creăm o aplicație mult mai complexă.
Vom soluționa aceste probleme cu [Contextul React API](https://reactjs.org/docs/context.html). Contextul API este constituit din componentele Provider și Consumer. Să aruncăm o privire asupra conținutului acestei părți:
1. Problema aplicațiilor complexe
2. Contextul React API
3. Contextul Consuming dintr-o componentă de clasă
4. Contextul Consuming dintr-o componentă funcțională  

## Problema aplicațiilor complexe

React reprezintă o singură componentă, cum ar fi aceasta:

```
(props) => view;
```

În aplicația reală, aceste funcții sunt compuse. Arată mai mult ca aceasta:

![](../../assets/todo-components.png)

Capacitatea de a compune componente este utilă, dar prezintă o oarecare complexitate:

1. Datele trebuie să fie trecute de la o componentă la alta cu ajutorul suporturilor, chiar dacă unele din componentele intermediare nu trebuie să cunoască câte ceva informații despre anumite alte date. Aceasta este o problemă numită **props drilling**.

2. Datele partajate pot fi schimbate de diverși factori (interacțiunea utilizatorului, actualizări de la server) și nu există o coordonare a acestor modificări. Acest lucru face ca propagarea actualizărilor între componente să fie dificilă.

Întâlnim această problemă chiar și în simpla noastră aplicație. De exemplu, `<TodoList>` are o interfață de suporturi:

```ts
interface TodoListProps {
  complete: (id: string) => void;
  remove: (id: string) => void;
  todos: Store['todos'];
  filter: FilterTypes;
  edit: (id: string, label: string) => void;
}
```

Nociunul dintre aceste suporturi nu sunt utilizați în însăși `TodoList`; ele sunt doar trecute mai jos către componentele subsidiare `TodoListItem`:

```js
<TodoListItem todos="{todos}" complete="{complete}" remove="{remove}" edit="{edit}" />
```

## Contextul React API

Să rezolvăm aceste probleme cu [Contextul React API](https://reactjs.org/docs/context.html). Contextul este o modalitate a React-ului de a partaja date din componente cu componentele lor subsidiare fără a le trece explicit în jos prin suporturi la fiecare nivel al arborelui. În termeni mai simpli, acesta rezolvă problema gestionării suporturilor menționată mai sus.

Contextul React este creat numind `createContext()` cu câteva date inițiale. Folosiți componenta `<TodoContext.Provider>` pentru a înfășura o parte a arborelui component căruia i se va înmâna contextul.

### Furnizarea contextului cu `<TodoContext.Provider>`

```js
// Pentru a crea un context gol
const TodoContext = React.createContext(undefined);

class TodoApp extends React.Component {
  render() {
    // Treceți în câteva stări și funcții valoarea furnizorului de suport
    return (
      <TodoContext.Provider
        value={{
          ...this.state,
          addTodo: this._addTodo,
          setFilter: this._setFilter,
          /* same goes for remove, complete, and clear */
        }}>
        <div>
          <TodoHeader />
          <TodoList />
          <TodoFooter />
        </div>
      </TodoContext.Provider>
    );
  }
}
```

### Consumați contextul dintr-o componentă de clasă 

Înăuntru unei clase de componente subsidiară de bază, precum`<TodoHeader>`, contextul creat în sursă poate fi accesat prin intermediul `this.context`. Rețineți că pentru acest lucru, trebuie, de asemenea, să setați proprietățile claselor de componente `contextType` către tipul contextului creat mai sus.

```js
class TodoHeader extends React.Component {
  render() {
    // Pasul 1: utilizați suportul contextului
    return <div>Filter is {this.context.filter}</div>;
  }
}

// Pasul 2: asigurați-vă că setați proprietatea clasei de componente contextType 
TodoHeader.contextType = TodoContext;
```

### Consumați contextul dintr-o componentă funcțională  

Dacă folosiți sintaxa funcțională a componentei, puteți să accesați contextul cu prescurtarea `useContext()`:

```js
const TodoFooter = props => {
  const context = useContext(TodoContext);
  return (
    <div>
      <button onClick={context.clear()}>Clear Completed</button>
    </div>
  );
};
```

> Rețineți că`useContext()` necesită o lansare recentă a React-ului (16.8+)

Există o altă sintaxă oficială pentru accesarea contextului cu  `<TodoContext.Consumer>`, dar o vom lasă să fie un Exercițiu pentru dumneavoastră!

