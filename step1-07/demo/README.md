# Pasul 1.7 – Scrierea și crearea unei stări de derulare UI (Demonstrație)

Acum că avem un UI care este pur și simplu condus de starea aplicației noastre, trebuie să adăugăm funcționalități pentru a permite UI-ului să conducă starea. Acest lucru se face adesea prin crearea de funcții care numesc „setState” așa cum am văzut în „TodoHeader”. Valorile din stat sunt apoi transmise componentelor subsidiare precum props.

> În a doua parte a acestui atelier vom învață cum putem să expunem aceste funcții fără a le trece explicit în jos prin props.

Aceasta este baza „logicii noastre de afaceri”  și gestionează operațiunile noastre fundamentale „CRUD”: Creare, Citire, Actualizare, Ștergere. Nu avem timp să parcurgem scrierea tuturor acelor funcții, dar puteți vedea că acestea sunt deja expuse în demonstrația „TodoApp” și trecute în componentele noastre.

## Introducere în TypeScript

Aruncând o privire asupra componentelor noastre din `TodoApp`, puteți vedea că lista noastră de props-uri devine nu doar mai lungă, ci mult mai complexă! Trecem prin funcții diferite semnături, obiecte complexe `todos` și șiruri de filtrare care reprezintă întotdeauna una dintre cele trei valori.

Pe măsură ce aplicațiile cresc, devine dificil să reținem ce face fiecare funcție sau ce conține fiecare todo. De asemenea, deoarece JavaScript este un limbaj tastat dinamic, dacă aș vrea să schimb valoarea lui `todos` într-o matrice din` TodoList`,  în JavaScript întâlnesc nici-o problemă. Dar dacă `TodoListItems` se așteaptă la un obiect, aplicația noastră s-ar opri.

Din aceste două motive, industria trece la scrierea aplicațiilor care sunt tastate strict și mulți folosesc TypeScript pentru a realiza acest lucru.

Precum și stările [TypeScript's website](https://www.typescriptlang.org/) :

> TypeScript este un superset de JavaScript care se compilează în JavaScript simplu.

Dacă am folosit deja [Sass](https://sass-lang.com/), sunteți familiarizați cu acest concept. În același mod în care tot ce este valid CSS este valid Sass, tot ce este valid JavaScript este valid TypeScript. De aceea exercițiile noastre au fost scrise în fișierele `ts` și `tsx` în loc de `js` și `jsx`.

Să aprofundăm și să vedem cum TypeScript ne poate ajuta să ne clarificăm componentele props și să ne ferim de viitoarele regresii.

# Demonstrație 

Să începem în TodoList deoarece acesta are cel mai mare flux de date în sus și în jos. Nu există nici-o interactivă UI în această componentă, deoarece pur și simplu trecem „completat” la fiecare „TodoListItem”, dar putem scrie o interfață props pentru a ne asigura că totul este transmis corect.

## Scrierea TodoListProps-urilor

Uitându-ne la `TodoApp` noastră știm că `TodoList` are 3 prop-uri: `filter`, `todos`, și `complete`. Vom începe crearea unei interfețe numite `TodoListProps` care reprezintă ocomponentă a props-ului.

```ts
interface TodoListProps {
  filter: any;
  todos: any;
  complete: any;
}
```

> Rețineți că pentru moment folosim cuvantul cheie `any`. Însă acest lucru nu ne oferă nici-o siguranță, ne permite doar să specificăm nume valide prop pe care le putem trece la această componentă.

Având această interfață scrisă, o vom adăuga acum la clasa noastră de componente.

```ts
export class TodoList extends React.Component<TodoListProps, any>
```

> Rețineți că prima valoare în `<>` este pentru interfața prop-urilor, iar a doua, este pentru stare.

Acum că avem o componentă tastată, să ne întoarcem la a noastră `TodoApp` și să vedem ce se întâmpla dacă încercăm să schimbăm numele prop-ului.

## Adăugarea tipului în siguranță

Până acum am stabilit doar care sunt numele noastre prop, nu și tipul de valori din interiorul acestora. Să ne uităm mai întâi la `filter` și  să vedem cum putem îmbunătăți siguranța acestui tip de prop.

### Tipul filtrului

Știm că `filter`-ul nu ar trebui să fie un obiect, o matrice sau o funcție, așa că putem specifica că acesta ar putea fi mereu un șir precum acesta:

```ts
interface TodoListProps {
  filter: string;
  todos: any;
  complete: any;
}
```
Dar, din moment ce știm că filtrul poate lua doar una din cele trei valori, putem face acest lucru explicit cu un [union type](https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types):

```ts
interface TodoListProps {
  filter: 'all' | 'active' | 'completed';
  todos: any;
  complete: any;
}
```

Acum încercați să reveniți la `TodoApp` și să schimbați atributul `filter` în  `TodoList` la altceva. Veți vedea o eroare în editor (dacă folosiți VS Code) și pe linia de comandă când veți salva fișierul.

### Complete Type

Prop-ul `complete` nu este o dată, ci o funcție. Din fericire, TypeScript poate gestiona funcția type la fel de bine ca pe o dată.

```ts
interface TodoListProps {
  filter: 'all' | 'active' | 'completed';
  todos: any;
  complete: (id: string) => void;
}
```

Pentru funcții ne preocupă doar parametrii trecuți și valoarea returnată. Puteți vedea în exemplul de mai sus că funcția preia un `id` de tip șir și returnează `void`, ceea ce înseamnă că aceasta nu are valoare returnată.

> Tehnic, toate funcțiile în JavaScript returnează `undefined` dacă altă valoare returnată nu este specificată, dar declarând un tip de returnare al `void`-ului vom cauza o eroare TypeScript dacă nu încercați să returnați valoarea din funcție (sau folosiți implicit valoarea sa returnată din `undefined`).

## Todos Type

Prop-ul `todos` este interesant prin faptul că `todo`-ul este un obiect cu o grămadă de chei necunoscute. Deci iată că avem aici modul în care interfața ar putea arăta.

```ts
interface TodoListProps {
  filter: 'all' | 'active' | 'completed';
  todos: {
    [id: string]: {
      label: string;
      completed: boolean;
    };
  };
  complete: (id: string) => void;
}
```

> Rețineți că `[id: string]` nu indică o matrice; ci este un obiect [index signature](https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types).

Acum că interfața noastră este completă, încercați să schimbați cuvântul "all" în `filter === all` și observați că VS Code vă va anunța că aceasta condiție va fi mereu falsă. Comparați-l cu simplu JavaScript: dacă aveți o greșeala de scriere în acea linie, nu veți înțelege de ce filtrul dumneavoastră nu funcționează.

## Partajarea type-urilor

Cele mai multe din componentele noastre vor trebui să specifice type-uri pentru `todos` și `filter`, deci este foarte bine faptul că TypeScript-ul ne permite să partajăm type-urile printre fișiere. Am scris deja și am exportat acele type-uri partajate în fișierul `TodoApp.types.ts`, deci trebuie doar să le importăm și să le folosim în interfața noastră.

```ts
import { FilterTypes, Todos, CompleteTodo } from '../TodoApp.types';

interface TodoListProps {
  complete: CompleteTodo;
  todos: Todos;
  filter: FilterTypes;
}
```

## Scrierea TodoListItemProps-urilor

Sărind în jos către TodoListItem, așa cum am început să scriem `TodoListItemProps`-ul, noi realizam faptul că două din prop-uri, `label` și `completed`, au fost deja definite în interfața `TodoItem`. Astfel, putem să facem un `TodoListItemProps` reutilizând interfața `TodoItem` prin extinderea ei.

```ts
import { CompleteTodo } from '../TodoApp.types';

interface TodoListItemProps extends TodoItem {
  id: string;
  complete: CompleteTodo;
}
```

Rezultatul final al acesteia este o interfață cu toate cele patru proprietăți: `id`, `complete`, `completed` și `label`.

În continuare vom putea trage prop-urile rămase în funcția de redare:

```jsx
const { label, completed, complete, id } = this.props;
```

Apoi vom folosi evenimentul începutului `onChange` pentru a porni apelul nostru invers `complete`. Putem vedea în semnătură că `complet` se așteaptă la un „id” de tip șir, așa că vom trece în prop `id`-ul nostru.

> O funcție [callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) trece într-o componentă precum prop.

```jsx
<input type="checkbox" checked={completed} onChange={() => complete(id)} />
```

> Rețineți că numele funcției param și prop se întâmpla să fie la fel, însă acest lucru nu este neapărat necesar.

Acum, când toate todo-urile noastre lansează apelul invers `onChange`, dați-le un click și aruncați o privire asupra modului în care aplicația răspunde. Deoarece textul subsolului nostru se bazează pe numărul de todo-uri neverificate,  subsolul se va actualiza automat pentru a analiza noua stare.

