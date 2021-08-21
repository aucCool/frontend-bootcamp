# Шаг 2.3 - Тематизация и стилизация с помощью материла пользовательского интерфейса (демонстрация)
[Lessons](../../) | [Exercise](../exercise/)

В этом разделе мы проиллюстрируем, как использовать некоторые встроенные функции тематизации и стиля библиотеки компонентов структуры пользовательского интерфейса.

Это методы тематизации и стилизации, на которых мы сосредоточимся на этом шаге:

1. Тематизация с помощью компонента " <Настройщик>"
2. Настройка тем и загрузка с помощью " loadTheme()`
3. Настройка компонентов ткани с помощью реквизита " стили`
4. CSS-в-JS с `слиянием стилей"

Первые три метода работают только с компонентами материалов, но четвертый, "Стили слияния", также может использоваться в других проектах (и обычно не используется в проектах на основе материалов).

## 1. Применение тем материлала с помощью `<Настройщик>`


Один из способов применения темы-обернуть компоненты, подлежащие тематизации, компонентом " <Настройщик>". `Настройщик` распространяет дочернюю тему через [Контекст реакции](https://reactjs.org/docs/context.html) механизм.

В материале  уже есть некоторые предопределенные темы, такие как Fluent (которые станут по умолчанию в следующем крупном выпуске), MDL2, Azure и некоторые другие примеры тем, таких как команды.

Cледущий код  (simplified from `demo/src/components/TodoApp.tsx`) показывает пример применения темы Fluent к нашему приложению todo с помощью " Настройщик`.

```jsx
import { Customizer } from 'office-ui-fabric-react';
import { FluentCustomizations } from '@uifabric/fluent-theme';

function render() {
  return (
    <Customizer {...FluentCustomizations}>
      <Stack>
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </Stack>
    </Customizer>
  );
}
```

## 2. Применение настраиваемых тем с помощью `загрузить тему()`

Другой способ применить тему-использовать функцию " loadTheme ()". Темы, загруженные таким образом, применяются ко всему приложению.

Чтобы опробовать "loadTheme ()" в нашем приложении для задач, удалите тег "<Настройщик> " из "TodoApp.tsx" и поместите этот код в область модуля.
```ts
import { loadTheme } from 'office-ui-fabric-react';

loadTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#ffffff'
  }
});
```

## 3. Настройка одного экземпляра элемента управления структурой

Если вы просто хотите настроить стиль экземпляра одного компонента, компоненты материала предоставляют опору "стили" (не путать со встроенной функцией React, называемой "стиль").

Вы можете использовать технологию автодополнения Microsoft, чтобы определить, какие части компонента можно настроить.

Реквизит "стили" может принимать либо объект, либо функцию, которая возвращает объект стиля на основе значений реквизита компонента.

Следующий код (упрощенный из "demo/src/components/To do Header.tsx") демонстрирует использование  `стилей` для настройки отдельных компонентов. Текстовое поле использует функцию стиля, а oсновная кнопка использует объект стиля.

```js
function render() {
  const buttonStyles = {
    root: { backgroundColor: 'maroon' },
    rootHovered: { background: 'green' }
  };

  const textFieldStyles = (props: ITextFieldStyleProps): Partial<ITextFieldStyles> => ({
    ...(props.focused && {
      field: {
        backgroundColor: '#c7e0f4'
      }
    })
  });

  return (
    <Stack>
      <Stack.Item>
        <TextField placeholder="What needs to be done?" styles={textFieldStyles} />
      </Stack.Item>
      <PrimaryButton styles={buttonStyles}>Add</PrimaryButton>
    </Stack>
  );
}
```

## 4. CSS-в-JS с `mergeStyles`

`mergeStyles`это библиотека стилей, которая создает имена классов CSS из стилей, выраженных в виде объектов JavaScript. Эти классы могут использоваться в качестве реквизита "Имя класса" любого компонента или элемента, например `<div>`.

Это продвинутый подход, который также работает за пределами материала. В приложениях на основе материала вы, как правило, используете "Стили слияния" только в определенных нишевых сценариях. ((Сам материал использует `Стили слияния` под низом, чтобы придать некоторый стиль.)

Преимущества `mergeStyles` включают:

- Работает в любом приложении
- Устраняет необходимость импорта или объединения таблиц стилей CSS (все стили поставляются в комплекте как обычный код JS)
- Обеспечивает проверку типов стилей (например, Sass) при использовании TypeScript
- Очень эффективен по сравнению с другими подобными библиотеками.

Ниже приведен базовый пример использования стилей слияния. ([[Этот код](http://codepen.io/dzearing/pen/jGdgrE?editors=1011) более подробно иллюстрирует, что делает "mergeStyles", и включает некоторые расширенные примеры.)
```jsx
// can also import from office-ui-fabric-react in Fabric-based apps
import { mergeStyles } from '@uifabric/merge-styles';

const blueBackgroundClassName = mergeStyles({
  backgroundColor: 'green'
});
const className = mergeStyles(blueBackgroundClassName, {
  padding: 50, // px is assumed if no units are given
  selectors: {
    ':hover': {
      backgroundColor: 'red'
    }
  }
});

const myDiv = <div className={className}>I am a green div that turns red on hover!</div>;
```
