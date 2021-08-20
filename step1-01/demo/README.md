# Pasul 1.1 - Introducere în lumea  HTML-ului (Demonstrație)

## Cum lucrează web-ul

O simplă pagină web este afișată pe ecran cu ajutorul următorilor pași.

> Există o mulțime de sub-pași în acest proces, însă aceștia sunt cei mai importanți.

1. Indicați browserului ce pagină web ați dori să vedeți
2. Browserul caută site-ul în serverul DNS
   - Aceasta este precum o carte mare de telefoane, însă pentru server, cu adrese ale site-urilor web
3. Browserul solicită serverului să trimită pagini mult mai specifice ale site-urilor web, precum `developer.mozilla.org/filename.html` sau `developer.mozilla.org`
   - Dacă solicitați "root"-adresa țintă, cele mai multe servere vă vor afișa`<root>/index.html`
4. Serverul trimite înapoi file HTML browser-ului 
5. Browser-ul începe să citească filele HTML de sus în jos, oprindu-se ori de câte ori sunt necesare resurse adiționale precum:
   - Foi de design CSS 
   - File JavaScript
   - Fonturi
   - Imagini
6. Browserul solicită resurse adiționale
   - Aceste resurse ar putea solicita și mai multe pagini 
7. O dată ce browser-ul ajunge în josul paginii, acesta începe să lucreze la redarea și apoi la afișarea paginii

![MDN Page Load](https://user-images.githubusercontent.com/1434956/53033758-9da8d580-3426-11e9-9ab8-09f42ccab9a8.png)

## HTML demonstrație

Etichetele HTML reprezintă baza tuturor aplicațiilor web. Acestea oferă structură paginii și definesc conținutul din interior.

O etichetă HTML ia următoarea formă:

```html
<tag class="foo" onclick="myFunction()" otherAttributes="values"> </tag>
```
Etichetele HTML pot fi, de asemenea, însumate pentru a crea o arborizație pe care o numim [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

[Pagina de demonstrație HTML](https://microsoft.github.io/frontend-bootcamp/step1-01/demo) oferă o largă colecție de elemente HTML pe care le veți întâlni în timpul derulării. Întreaga listă de elemente poate fi întâlnită pe pagina [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

## Eșantion din pagina web

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Frontend Workshop: By Micah Godbolt and Ken Chau</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <header>
      <h1>Frontend Workshop</h1>
      <nav>
        <ul>
          <li><a href="./about.html">About This Workshop</a></li>
          <li><a href="./participate.html">Take This Workshop</a></li>
          <li><a href="./contribute.html">Contribute to This Workshop</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h2>About This Workshop</h2>
      <p>
        The first day provides an introduction to the fundamentals of the web: HTML, CSS and JavaScript.
      </p>
      <img src="../../assets/todo_screenshot.jpg" alt="Picture of the Todo App we will build" />
      <p>
        On the second day we'll dive into more advanced topics like TypeScript, testing, and state management.
      </p>
    </main>
    <footer>
      <h2>Get More Information</h2>
      <ul>
        <li><a href="https://github.com/Microsoft/frontend-bootcamp"> Frontend Bootcamp </a></li>
        <li><a href="https://twitter.com/micahgodbolt"> @micahgodbolt </a></li>
        <li><a href="https://twitter.com/kenneth_chau"> @kenneth_chau</a></li>
      </ul>
    </footer>
  </body>
</html>
```
