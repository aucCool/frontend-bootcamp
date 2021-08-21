# Шаг 1.1 - Введение в HTML (демонстрация)

## Как работает интернет

Простая веб - страница отображается на экране с помощью следующих шагов.
> В этом процессе есть много подэтапов, но это основные моменты.
1. Вы указываете браузеру, какую веб-страницу вы хотели бы видеть
2. Браузер просматривает сайт на DNS-сервере (система доменных имен)
   -Это похоже на большую телефонную книгу для адресов серверов веб-сайтов
3. Браузер запрашивает у сервера отправку определенной страницы веб-сайта, такой как `developer.mozilla.org/filename.html` или `developer.mozilla.org`
   - Если будет запрошен адрес уровня "root", большинство серверов вернут " <root>/index.html`
4. Сервер отправляет HTML-файл обратно в браузер
5. Браузер начинает читать HTML - файл сверху вниз, останавливаясь в любое время, когда требуются дополнительные ресурсы:
- Таблицы стилей CSS
- Файлы JavaScript
- Шрифты
- Изображения
6.Браузер запрашивает дополнительные ресурсы
   - Эти ресурсы могут запросить еще больше файлов
7. Как только браузер доберется до нижней части страницы, он сможет начать работу над рендерингом, а затем отобразить страницу
![MDN Page Load](https://user-images.githubusercontent.com/1434956/53033758-9da8d580-3426-11e9-9ab8-09f42ccab9a8.png)

## HTML демонстрация 

HTML-теги являются основой всех веб-приложений. Они задают структуру страницы и определяют содержимое внутри.

HTML-тег принимает следующую форму:

```html
<tag class="foo" onclick="myFunction()" otherAttributes="values"> </tag>
```

HTML-теги также могут быть включены  для создания дерева, которое мы называем [Объектная модель документа](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).
[Демонстрационная страница HTML](http://microsoft.github.io/frontend-bootcamp/step1-01/demo) показывает большую коллекцию HTML-элементов, с которыми вы столкнетесь во время разработки. Полный список элементов можно найти на [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

## Пример веб-страницы

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
        В первый день вы познакомитесь с основами работы в Интернете: HTML, CSS и JavaScript.
      </p>
      <img src="../../assets/todo_screenshot.jpg" alt="Picture of the Todo App we will build" />
      <p>
        На второй день мы погрузимся в более сложные темы, такие как TypeScript, тестирование и управление состоянием.
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
