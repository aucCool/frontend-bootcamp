# Шаг 1.5 - Создание статической страницы в React (демо)
Чтобы начать создание нашего приложения todo, мы выполним действия, описанные в [Мышление в React](https://reactjs.org/docs/thinking-in-react.html). Первый шаг этого процесса-разбить ваше приложение на иерархию компонентов. Для этого приложения мы собираемся сделать его простым и использовать только четыре части.

- Todo Заголовок
- Тodo Cписок
- Список задач Todo
- Нижний колонтитул Todo

Вы можете найти HTML-код для нашего приложения в: `step1-05/TodoApp.html`.

## Todo Заголовок

Мы будем хранить все наши компоненты в папке "компоненты" в разделе "src". Давайте создадим это сейчас. Затем мы начнем писать "Заголовок для выполнения" в "src/components/TodoHeader.tsx". Расширение файла `tsx` сообщает нашему редактору, что этот файл включает в себя код реакции, написанный TypeScript.

>Мы скоро поговорим о TypeScript, но пока знайте, что весь допустимый JavaScript-это допустимый TypeScript.
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

> Обратите внимание, что, поскольку это React, нам пришлось изменить "класс" на "имя класса", но больше ничего не меняется.

## Список задач Todo

Каждый раз, когда вы видите повторяющиеся сложные элементы, это обычно является признаком того, что вам следует создать новый компонент. С помощью нескольких реквизитов вы обычно можете абстрагировать все эти элементы в один компонент. Это, безусловно, относится к предметам todo.
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

>Обратите внимание, что этот элемент управления также может быть создан как функция вместо класса:
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
