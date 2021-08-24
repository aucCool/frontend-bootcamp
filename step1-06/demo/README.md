# Pasul 1.6 – Crearea unei stări de derulare UI (Demonstrație)

În React, datele se deplasează într-o singură direcție: de sus în jos sub, formă de stare care propagă în jos ierarhia componentelor. Numai componenta care conține starea poate schimba starea în sine. Când apare o interacțiune UI, o componentă de stare trebuie să transmită un eveniment de manipulat către componenta UI care va declanșa evenimentul pentru a semnaliza o schimbare de stare.

[Step #3 of "Thinking in React"](https://reactjs.org/docs/thinking-in-react.html) sugerează găsirea „setului minim de stări modificabile” de care are nevoie aplicația dumneavoastră. Deci, în aceasta demonstrație vom adăuga acea "stare minimă"  aplicației noastre și vom elimina UI-ul nostru  din acea dată. Având făcute acestea, următorul pas va fi crearea unei căi prin care să modificăm acea stare, care va derula la rândul său în jos prin UI-ul nostru. Acest [reconciliation](https://reactjs.org/docs/reconciliation.html) proces, descoperă ceea ce trebuie să se schimbe în UI-ul nostru, în funcție de starea de schimbare, în acest mod React excelează.

## Adăugarea stării la TodoApp

În interiorul clasei noastre `TodoApp`, vom adăuga o stare generală aplicației noastre,aceasta include doar două chei: `todos` și `filter`. Nu trebuie să ne îngrijoram despre numărarea `remaining`-ului deoarece acesta poate fi calculat prin socotirea numărului todos unde câmpul `completed` este setat la `false`.

Deci, avem aici întreaga construcție:

```jsx
constructor(props) {
  super(props);
  this.state = {
    todos: {
      '04': {
        label: 'Todo 4',
        completed: true
      },
      '03': {
        label: 'Todo 3',
        completed: false
      },
      '02': {
        label: 'Todo 2',
        completed: false
      },
      '01': {
        label: 'Todo 1',
        completed: false
      }
    },
    filter: 'active'
  };
}
```

> De asemenea, puteți utiliza o matrice pentru a vă reprezenta todos-urile. Manipularea matricei poate fi mai ușoară în unele cazuri, dar această abordare obiectivă simplifică alte funcționalități și va fi în cele din urmă mai performantă.

## Trecerea stării prin UI

Acum putem trece `filter`-ul și `todos`-urile în componentele noastre.

```jsx
render() {
  const { filter, todos } = this.state;
  return (
    <div>
      <TodoHeader filter={filter} />
      <TodoList todos={todos} filter={filter} />
      <TodoFooter todos={todos} />
    </div>
  );
}
```

## Starea de derulare TodoList

Am trecut deja props-ul nostru în variabilele `filter` și` todos` și am scris un pic de JS care va returna o matrice de `id`-uri filtrate necesare. Vom folosi acea matrice filtrată pentru a ne reda elementele de făcut.

> `todos[id]` returns the todo matching the `id` passed in, and the spread operator (...) is the same as saying `label={todos[id].label} completed={todos[id].completed}`

```jsx
return (
  <ul className="todos">
    {filteredTodos.map(id => (
      <TodoListItem key={id} id={id} {...todos[id]} />
    ))}
  </ul>
);
```

## Starea de derulare și stateful TodoHeader-ului

În cadrul antetului, avem o situație în care nu numai că nu dorim să trecem starea `filter` la aceasta, dar de asemenea, vrem să menținem starea în cadrul controlului. Din fericire, aceasta nu este deloc o problemă pentru React. În primul rând, să ne ocupăm de starea de intrare.

### Numele Condițional al Clasei

În stilul bazat pe CSS, stările vizuale sunt aplicate prin adăugarea și eliminarea de clase. Putem folosi valoarea filtrului pentru a adăuga condiționat o clasă, iluminând astfel butonul de filtrare corect.

```jsx
<nav className="filter">
  <button className={filter === 'all' ? 'selected' : ''}>all</button>
  <button className={filter === 'active' ? 'selected' : ''}>active</button>
  <button className={filter === 'completed' ? 'selected' : ''}>completed</button>
</nav>
```

>  [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) `condition ? expressionIfTrue : expressionIfFalse`-ul este utilizat pe scară largă în codul React, astfel fiecare expresie poate fi un șir pentru className sau chiar un element JSX.

### Adăugarea unei intrări controlate

În React, forma elementelor precum `<input>`, `<textarea>`, și `<select>` pot fi folosite ca oricare **uncontrolled** sau **controlled**.

O  **uncontrolled input** își menține valoarea curentă intern și o actualizează pe baza interacțiunilor utilizatorilor (introducerea textului, alegerea opțiunilor etc.). Codul extrage valoarea din intrare numai atunci când este necesar, cum ar fi la trimitere. Acest lucru este similar cu modul în care funcționează intrările într-un formular HTML simplu.

O **controlled input** preia valoarea sa curentă de la un prop și folosește un apel invers pentru a notifica componenta părinte despre modificările făcute de către utilizator. Valoarea intrării nu se modifică până când componenta părinte nu actualizează elementele de intrare ca răspuns la apelul invers.

> Este important să înțelegem distincția dintre controlat și necontrolat atunci când scriem sau folosim componente form, neînțelegerile acestui concept sunt o sursă foarte comună de bug-uri. Vedeți [this article](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/) pentru mai multe explicații detaliate.

Să încercam schimbarea textului din câmp în componenta noastră `TodoHeader` pentru a controla intrarea. Pentru a adăuga intrarea controlată, avem nevoie de două lucruri, acestea au fost deja explicate în demonstrația noastră:

1. O variabilă de stare pentru a păstra valoarea intrării:

```jsx
this.state = { labelInput: '' };
```

2. O funcție de apel invers pentru a actualiza acea valoare:

```jsx
_onChange = evt => {
  this.setState({ labelInput: evt.target.value });
};
```

Cu aceste două piese la locul lor, putem actualiza intrarea noastră necontrolată pentru a fi  controlată.

```jsx
<input value={this.state.labelInput} onChange={this._onChange} className="textfield" placeholder="add todo" />
```

> Dacă aveți instalate React Dev Tools, deschideți-le și aruncați o privire asupra `labelInput`-ului așa cum l-am scris în introducere.
