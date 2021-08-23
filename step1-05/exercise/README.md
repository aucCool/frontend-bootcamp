# Pasul 1.5 – Construiți o pagină statică în React (Exercițiu)

Începând cu acest exercițiu, vom lucra în VS Code în loc de CodePen. Dacă nu aveți deja folderul bootcamp deschis într-o fereastră VS Code, vedeți [main readme](https://github.com/Microsoft/frontend-bootcamp/blob/master/README.md) pentru instrucțiuni.
Dacă încă nu aveți aplicația rulată, porniți-o accesând `npm start` din rădăcina folderului` frontend-bootcamp`. Accesați link-ul „exercițiu” din ziua 1 subpasul 5 pentru a vedea rezultatele.

## TodoFooter

1. Adăugați o  componentă TodoFooter în folderul `components`, copiind eticheta`<footer>` și toate subpunctele acesteia din `TodoApp.html` în folderul `step1-05`. Această componentă ar putea fi o funcție sau o clasă.
2. Eliminați  orice proprietăți `onclick`, și schimbați  `class` cu `className`

## TodoList

1. Adăugați o componentă TodoList așa cum ați făcut cu rădăcina. De asemenea, aceasta poate să fie o funcție sau o clasă.
2. Importați TodoListItem și adăugați patru din acestea în interiorul la `<ul>`
3. Puncte Bonus pentru utilizarea  [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) buclei sau utilizarea [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) pentru a crea 4 liste de itemi bazate pe matricea `[1,2,3,4]`

## App

1. Importați ambele componente în `App.tsx` și plasați etichetele acestora sub `TodoHeader`.

