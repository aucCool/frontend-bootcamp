# Pasul 1.3 -Introducere în JavaScript (Demonstrație)

Este posibil în totalitate să creezi un site web cu nimic altceva decât  HTML și CSS,dar de îndată ce doriți să utilizați instrumente de legătura, altele decât link-uri și formulare, va trebui să înțelegeți JavaScript, limbajul de programare a site-urilor web. Din fericire, JavaScript a fost actualizată destul de puțin de la apariția sa din anii 90’, iar acum este folosită pentru aproape orice: aplicații web, aplicații mobile, aplicații native , servere, roboți și nave robotice.

În această demonstrație vom acoperi câteva nuclee de bază ale limbajului care ne vor ajuta atunci când vom începe sa ne redactăm aplicațiile vizate. La sfârșitul acestei demonstrații veți fi capabili să numărați și să afișați numărul scrisorii"a" în antetul email-lului nostru. Aici sunt prezentate marcajele cu care vom lucra:

```html
<div id="contact-form">
  <label for="email">Email</label><input id="email" type="email"/>
  <input class="submit" value="Submit" type="submit" />
</div>
```

La sfârșitul acestei demonstrații vor fi acoperite următoarele noțiuni:

- Variabile
- Evenimente
- Funcții
- Condiționalități
- Bucle
- Interacțiuni cu ajutorul DOM-ului (Obiectul model al documentului)

## Introducerea în variabile

Noi putem crea o nouă variabilă cu cuvintele cheie  `var`, `let`, `const` și să le utilizam în aplicația noastră. Aceste variabile pot conține una din următoarele tipuri de valori:

- **boolean**: `true`, `false`
- **number**: `1`, `3.14`
- **string**: `'single quotes'`, `"double quotes"`, or `` `backticks` ``
- **array**: `[ 1, 2, 3, 'hello', 'world']`
- **object**: `{ foo: 3, bar: 'hello' }`
- **function**: `function(foo) { return foo + 1 }`
- **null**
- **undefined**

> [When to use `var`/`let`/`const`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable-in-jav) Utilizați `const` pentru variabile la care nu vă așteptați să se modifice niciodată, și `let` pentru orice altceva. `var` în cea mai mare parte nu mai este utilizat. Vezi link-ul pentru mai multe detalii despre utilizarea acestora.

### Exemple de variabile

```js
const myBoolean = true;
const myNumber = 5;
const myString = `Using backticks I can reuse other variables ${myNumber}`;
const myArray = [1, 'cat', false, myString];
const myObject = { key1: 'value1', anotherKey: myArray };
const myFunction = function(myNumberParam) {
  console.log(myNumber + myNumberParam);
};
```

>JavaScript este un limbaj scris dinamic, astfel, dacă inițial  înmagazinați un număr într-o variabilă (`let myVar = 0`), le puteți modifica pentru a conține un șir prin simpla scriere `myVar = 'hello'` fără nicio problemă.

### Adăugarea variabilelor
Să începem demonstrația noastră prin adăugarea de variabile la [script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script). Această variabilă va fi globală și constantă.

```js
const match = 'a';
```

## Funcții

Funcțiile sunt piese reutilizabile de funcționalitate. Funcțiile pot prelua intrări (parametri) și să returneze valori (sau nimic). Funcțiile pot fi numite din cadrul programului dumneavoastră, din cadrul altelor funcții, sau invocate din cadrul DOM-ului însuși. 
În exemplele noastre vom crea funcții numite `displayMatches` (camelCase este tipic pentru funcții) și vom accesa aceste funcții ori de câte ori butonul submit este accesat. Pentru moment vom avea doar funcții numite `alert("I'm Clicked")`, aceasta fiind o funcție care afișează o cutie de mesaje de alertă în browserul nostru.

```js
function displayMatches() {
  alert("I'm Clicked");
}
```

## Evenimente

Însăși funcțiile nu au nici-un efect asupra paginii. Când declar `function displayMatches()` , eu doar definesc funcția; însă nu am și executat-o.

Pentru a executa o funcție avem nevoie să o atașam la un eveniment. Aici avem câteva numere de evenimente posibile: tastări accidentale, clicuri de mouse, încărcarea documentului, și altele.

### Add event listeners

Pentru a atașa o funcție la un eveniment, noi utilizăm [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) precum acesta:

```js
window.addEventListener('load', function() {
  console.log('loaded');
});

window.addEventListener('click', function() {
  console.log('click');
});
```

> [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) is a reference to the entire window containing the HTML document.

### Gestionarea evenimentelor globale

Dacă aveți impresia impresia ca este un pic prea detaliat, nu sunteți singurul. Multe dintre [most common event types](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers) sunt disponibile ca și proprietăți ale evenimentelor. În acest mod putem seta proprietăți precum `onload`  sau `onclick` astfel:

```js
window.onload = function() {
  console.log('loaded!');
};
window.onclick = function() {
  console.log('clicked!');
};
```

> Țineți minte că o singură funcție poate fi atribuită la `onload`, dar multe evenimente de ascultare pot fi adăugate pentru `load`.

În exemplul nostru, dorim să inițiem o funcție atunci când butonul este accesat. Pentru aceasta, noi trebuie să găsim o referire către acest buton. Putem utiliza [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) metodă prin care browser-ul va furniza [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) variabila globală pentru a obține referirea. Atunci vom putea seta funcțiile pentru a fi`onclick`-ul butonului de accesat.

```js
const button = document.querySelector('.submit');
button.onclick = displayMatches;
```

De asemenea, puteți combina două declarații precum acestea:

```js
document.querySelector('.submit').onclick = displayMatches;
```
Reîncărca pagina și accesează butonul pentru a vedea funcțiile tale!

## Repetare
Apoi ne vom actualiza funcția noastră pentru a o repeta printr-un șir de litere. Buclăm peste fiecare literă [`for of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) syntax. Vom folosi un antet real mai târziu, însă acum aceasta verifică dacă funcția noastră este în derulare.

```js
function displayMatches() {
  const text = 'abcda';
  for (let letter of text) {
    console.log(letter);
  }
}
```

## Condiționalități 

În continuare dorim să comparăm fiecare `letter` cu valoarea noastră globală `match`, și dacă sunt aceleași, vom crește o variabilă `matches`. Rețineți următorul lucru `letter = match` va seta variabila `letter` către valoarea din`match`, deci pentru a face comparație, vom folosi operatorul egal `==` sau strictul operator egal `===`.

```js
function displayMatches() {
  const text = 'abcda';
  let matches = 0;
  for (let letter of text) {
    if (letter === match) {
      matches++;
    }
  }
  console.log(matches);
}
```

> În JavaScript, este mai sigur să folosiți strict `===` pentru comparații, deoarece `==` va încerca să convertească operanzii către același tip. De exemplu, `"1" == 1` convertește `"1"` către un număr apoi revine adevărat. Acest rezultat oferă un sens decen, dar comportamentul în anumite alte cazuri este [nu cel la care te-ai putea aștepta](https://www.youtube.com/watch?v=et8xNAc2ic8). (Vezi [acest video](https://www.destroyallsoftware.com/talks/wat) pentru mai multe comportamente neobișnuite ale JavaScript-ului.)

## Interacțiuni cu ajutorul DOM-ului

Acum că avem o funcție care performează toată logica noastră, este timpul să ne conectăm la DOM-ul nostru folosind câteva funcții de alcatuire ale browser-ului.
Mai întâi trebuie să obținem o referință la câmpul de e-mail din DOM-ul aplicației noastre. Pentru aceasta, am adăugat un `id` la antet, și vom găsi elementul folosind [`getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) din variabila globală a `document`-ului. Această funcție va returna o referire către acest, și o vom putea stoca în `email`-lului.

```js
function displayMatches() {
  const email = document.getElementById('email');
  console.log(email);
  // ...
}
```

Deoarece ceea ce urmărim de fapt este valoarea câmpului de intrare, putem seta variabila noastră „text” la șirul conținut în „valoare”-a cheie a intrării e-mail-lului. Pentru a vedea cum funcționează aceasta, în Chrome puteți da click dreapta pe mesajul consolă creat de către codul de mai sus, alegeți "save as variable" și apoi tastați `variableName.value`.

```js
function displayMatches() {
  const email = document.getElementById('email');
  const text = email.value;
  console.log(text);
  // ...
}
```

### Scrierea valorilor înapoi în DOM
Acum că am citit valori din DOM și le-am introdus în logica noastră de potrivire, suntem gata să returnăm numărul de potriviri în aplicația noastră. Pentru a face acest lucru, trebuie mai întâi să obținem o referință la butonul nostru de trimitere, și din moment ce acest buton nu are un `id`, vom folosi `querySelector` pentru a îl obține. Această funcție preia orice selector CSS valid și returnează prima potrivire găsită.

```js
function displayMatches() {
  // ...
  const submit = document.querySelector('.submit');
}
```

Acum, că avem o referință la intrarea de trimitere, putem seta valoarea acestuia să conțină numărul de potriviri.

```js
function displayMatches() {
  // ...
  const submit = document.querySelector('.submit');
  submit.value = matches + ' matches';
}
```

De asemenea, putem avea aceasta intr-o singura linie, precum următoarea:

```js
function displayMatches() {
  // ...
  document.querySelector('.submit').value = matches + ' matches';
}
```
