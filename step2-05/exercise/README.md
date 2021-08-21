# Step 2.5 - Redux: Магазин (Упражнение)

[Lessons](../../) | [Demo](../demo/)

Если у вас еще не запущено приложение, запустите его, запустив "запуск npm" из корневой папки "front end-bootcamp". Нажмите на ссылку "упражнение" в разделе день 2 шаг 5, чтобы увидеть результаты.

1. Сначала взгляните на интерфейс магазина в `exercise/src/store/index.ts`. Заметьте, что  `Магазин` интерфейс имеет два ключа: `todos` и `filter`. Мы сконцентрируемся на `todos`, который представляет собой объект, в котором ключи являются строковыми идентификаторами, а значения имеют тип `TodoItem`.

2. Откройте `exercise/src/reducers/index.ts` и заполните недостающие реализации редуктора.

3. Откройте `exercise/src/index.tsx` и напишите несколько  вызовов `dispatch`. 

4. Посмотрите, что написано в консоли (F12 на ПК, "cmd-опция-I" на Mac).

6. Установите Redux DevTools [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) или [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/) расширение. 

6. Понаблюдайте за изменениями состояния и попробуйте совершить "путешествие во времени".
