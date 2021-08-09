# Frontend Bootcamp / Дни в Интернете

> 🚨🚨 This project is a work in progress! Issues and pull requests are encouraged. 🚨🚨

## Добро пожаловать

В данном двухдневном семинаре вы изучите основы разработки интерфейсов при создании рабочего веб-приложения. Первый день дает представление об основах Интернета: HTML, CSS и JavaScript. Это ориентировано как на новых, так и на опытных разработчиков. На второй день мы углубимся в более продвинутые темы, такие как TypeScript, управление состоянием и тестирование. Несмотря на это, примеры должны быть доступны для каждого и вы получите максимальную отдачу от них, при этом, если у вас есть некий предыдущий опыт в программировании и веб-технологиях.

## Подготовка

### 1. Необходимое программное обеспечение

Перед запуском убедитесь, что на вашем компьютере установлены последние версии нижеследующего:

- [Node/NPM](https://nodejs.org/en/) (выберите LTS **LTS** опцию)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com)
  - Если вы используете гаджет Mac, также выполните [следующие действия](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line) для установки команды `code`.
  - IЕсли у вас уже был установлен VS Code, проверьте наличие обновлений!
- React Developer Tools для [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) или [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

### 2. Установка и открытие проекта

- Откройте VS Code, а затем нажмите ```ctrl + ` ``` (отступ, в левом верхнем углу клавиатуры), чтобы открыть встроенный терминал.
- Используйте команду `cd` (изменить папку) чтобы найти подходящее место для вашего кода.
- Введите `git clone https://github.com/Microsoft/frontend-bootcamp.git` в терминал, чтобы получить копию кода мастерской.
- Введите `cd frontend-bootcamp` чтобы изменить текущий указатель на папку `bootcamp` 
- Введите `npm install` чтобы установить все зависящее от проекта.
- Введите `code -r .` чтобы открыть код начальной загрузки в VS Code.
> Если вы работаете на компьютере Mac, убедитесь, что сначала выполнили [данные действия](https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line),
чтобы сделать команду `code` доступной.

### 3. Запустите сборку "внутренний цикл"

На данный момент ваше окно VS-кода должно выглядеть примерно так:

<img src="https://user-images.githubusercontent.com/1434956/53654442-9c379400-3c02-11e9-8768-d19e092b606d.png" width=500 />

Чтобы запустить "внутренний цикл разработки", выполните:
```
npm start
```

Это приведет к загрузке сайта, показанного ниже.

<img src="https://user-images.githubusercontent.com/1434956/53656239-88426100-3c07-11e9-8456-e3d958aa4def.png" width=500 />

### 4. Структура Урока

1. Демонстрации будут либо через CodePen (шаги 1, 2 и 3), либо выполнены в папке `step`. Следуйте шагу README, чтобы осмотреть демонстрацию.

2. Как и демо-версии, упражнения выполняются с помощью CodePen или в папках шагов проекта. Эти упражнения дадут вам возможность попробовать то, что было продемонстрировано на первом шаге.
  
## Чего ожидать?

Для каждого урока докладчик будет проходить через некий демонстрационный код, чтобы обучиться основным понятиям по теме. На этом этапе не беспокойтесь о написании кода. Просто следуйте инструкциям, приведенным ниже.

Большинство уроков также содержат часть упражнений. Инструкции по упражнениям обычно находятся в файле `readme` для папки `excersise` каждого шага.

### День первый

Первый день посвящен основам HTML, CSS и JavaScript, а также с введением понятий React and Typescript.

1. [Введение о HTML](step1-01)
2. [Введение о CSS](step1-02)
3. [Введение о JavaScript](step1-03)
4. [Введение о React](step1-04)
5. [Компоненты React](step1-05)
6. [State-driven UI](step1-06) //TODO Lolita - we need to find a better translation "Управляемый пользовательский интерфейс" is not right
7. [Types and UI-driven state](step1-07) //TODO Lolita - same here for "Типы и состояние, управляемые пользовательским интерфейсом"

### День второй

1. [Базы TypeScript](step2-01)
2. [Библиотека компонентов UI Fabric](step2-02)
3. [Тематизация и укладка(step2-03)
4. [Контекст React](step2-04)
5. [Redux: Store](step2-05) //TODO Lolita - we need to find a better translation
6. [Redux: React binding](step2-06) //TODO Lolita - we need to find a better translation

### Бонусный контент

* [Redux: Вызовы служб](bonus-servicecalls)
* [Тестирование с Jest](bonus-jest)

## Дополнительные ресурсы

- [Веб-документы MDN](https://developer.mozilla.org/en-US/) //TODO Lolita
- [React Docs](https://reactjs.org/docs/getting-started.html) //TODO Lolita
- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) //TODO Lolita

## Follow the authors!

If you are interested in JavaScript, TypeScript, React, Redux, or Design Systems, follow us on Twitter:

- [@kenneth_chau](https://twitter.com/kenneth_chau)
- [@micahgodbolt](https://twitter.com/micahgodbolt)

## Other projects from the UI Fabric team at Microsoft

- [UI Fabric](https://developer.microsoft.com/en-us/fabric) - [github repo](https://github.com/officedev/office-ui-fabric-react)
- [Just](https://microsoft.github.io/just): The task library that just works - [github repo](https://github.com/Microsoft/just)
- [Rush](https://rushjs.io): A scalable monorepo manager for the web - [github repo](https://github.com/Microsoft/web-build-tools/)

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Legal notices

Microsoft and any contributors grant you a license to the Microsoft documentation and other content
in this repository under the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/legalcode),
see the [LICENSE](LICENSE) file, and grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT), see the
[LICENSE-CODE](LICENSE-CODE) file.

Microsoft, Windows, Microsoft Azure and/or other Microsoft products and services referenced in the documentation
may be either trademarks or registered trademarks of Microsoft in the United States and/or other countries.
The licenses for this project do not grant you rights to use any Microsoft names, logos, or trademarks.
Microsoft's general trademark guidelines can be found at http://go.microsoft.com/fwlink/?LinkID=254653.

Privacy information can be found at https://privacy.microsoft.com/en-us/

Microsoft and any contributors reserve all other rights, whether under their respective copyrights, patents,
or trademarks, whether by implication, estoppel or otherwise.
