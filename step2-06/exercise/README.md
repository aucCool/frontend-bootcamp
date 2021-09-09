# Pasul 2.6 - Redux: React binding (Exercițiu)

[Cursuri](../../) | [Demonstrație](../demo/)

Dacă încă nu ai aplicația derulată, începe derularea cu `npm start` din radăcina fișierului `frontend-bootcamp`. Accesați link-ul "exercise" din ziua 2 pasul 6 pentru a vedea rezultatele.

La începutul acestui exercițiu, adăugați butoanelor să nu lucreze "Add" și "Clear Completed" . Vom remedia problema în acest pas!

1. Deschideți `exercise/src/index.tsx` și infășurați `<TodoApp>` cu `<Provider>` conform instrucțiunilor din comentariu

2. Deschideți `exercise/src/components/TodoFooter.tsx` și ștergeți modificatorul de tip "nullable" type  (`?`-ul) în definiția interfeței a `TodoFooterProps`

3. Decomentați fragmentele de cod de jos și completați argumentele `connect()` - simțiți-vă liberi să utilizați `TodoListItem.tsx` precum un ghid

4. Repetați pașii 2, 3 pentru fișierul `TodoHeader.tsx` 

## Exercițiu Bonus

Pentru lecturi suplimentare, accesați aici pentru a învăța mai multe despre parametrii `mergeProps` `options` pentru `connect()`:

https://react-redux.js.org/api/connect
