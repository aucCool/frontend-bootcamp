# Pasul 1.7 - Scrierea și crearea unei stări de derulare UI (Exercițiu)

Dacă încă nu aveți derulată aplicația, începeți derularea cu `npm start` din rădăcina fișierului `frontend-bootcamp`. Accesați link-ul "exercise" din ziua 1 pasul 7 pentru a vedea rezultatele.

## TodoFooter

1. Deschideți TodoFooter și scrieți o interfață `TodoFooterProps`. Aceasta ar putea să includă doua valori,`clear` și `todos`. Folosiți această interfață în funcția props în felul următor: `(props: TodoFooterProps)`

2. Scrieți o funcție `_onClick` care numește `props.clear`.

  - Din moment ce TodoFooter nu este o clasă, funcția `_onClick` trebuie să fie stocată într-o construcție înainte de `return`.
  - Amintiți-vă cum se utilizează o funcție matrice pentru a defini această manipulare a click-ului.

3. Atribuiți `_onClick` butonului `onClick` prop. Nu veți avea nevoie să folosiți `this` din moment ce componenta nu este o clasă.

4. Testați funcționalitatea acesteia. Verificați câteva todo-uri complete și accesați butonul `Clear Completed`.

## TodoHeader

1. Deschideți TodoHeader și scrieți `TodoHeaderProps` care va include `addTodo`, `setFilter` și `filter`. Înlocuiți primul `any` în clasa declarației cu această interfață.

2. Această componentă are, de asemenea, stare. Scrieți `TodoHeaderState` (este o singură valoare), și adăugați-o acolo unde a fost a doua `any`.

3. Adăugați `_onFilter` la fiecare buton de filtrare

  - Rețineți că putem adăuga noi parametri la onClick, dar putem extrage informații din ținta evenimentului!
  - Amintiți-vă să utilizați și pentru aceasta o funcție matrice

4. Apelați `_onAdd` din butonul submit

5. Verificați această nouă funcționalitate! Acum putem să adăugăm un filtru todos!
