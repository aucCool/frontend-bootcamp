# Pasul 2.3 - Tematizare și stilizare cu UI Fabric (Demonstrație)

[Cursuri](../../) | [Exerciții](../exercise/)

În această parte, vom ilustra cum putem să folosim câteva dintre proprietățile de tematizare și stilizare încorporate în librăria de componente ale UI Fabric-ii.

Acestea sunt metodele de tematizare și stilizare asupra cărora ne vom focusa în acest curs:

1. Tematizare folosind metoda `<Customizer>` 
2. Personalizarea temelor și încărcarea lor cu `loadTheme()`
3. Personalizarea componentelor Fabric prin intermediul suportului `styles` 
4. CSS-in-JS cu `mergeStyles`

Primele trei metode funcționează doar cu componente Fabric, însă a patra,`mergeStyles`, poate fi folosită la fel de bine și în alte proiecte  (în general, nu este utilizată în proiectele de bază Fabric).

## 1. Aplicarea temelor Fabric utilizănd `<Customizer>`

O modalitate de a aplica o temă este de a ambala componentele pentru a fi tematizate cu o altă componentă `<Customizer>`. `Customizer` propagă tema în jos către subsidiari prin intermediul mecanismului [React Context](https://reactjs.org/docs/context.html).

Există deja câteva teme predefinite în Fabric, cum ar fi Fluent (care va deveni implicită în următoarea versiune majoră), MDL2, Azure, și alte exemple de teme precum Teams.

Următorul cod (simplificat din `demo/src/components/TodoApp.tsx`) ilustrează un exemplu de aplicare a temei Fluent la aplicația noastră vizată folosind `Customizer`.

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

## 2. Aplicarea temelor personalizate folosind `loadTheme()`

O altă modalitate de a aplica o temă este folosirea funcției `loadTheme()`. Temele încărcate în acest fel se aplică întregii aplicații.

Pentru a încerca `loadTheme()` în aplicația noastră vizată, eliminați eticheta `<Customizer>` din `TodoApp.tsx` și plasați acest cod în domeniul de aplicare al modulului.

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

> Dacă veți dori să creați propria dumneavoastră temă, website-ul Fabric are un  [operator tematic comod](https://aka.ms/themedesigner) pentru a vă ajuta să începeți.

## 3. Personalizarea unei instanțe de control Fabric 

Daca doriți să personalizați o singură componentă din stilul instanței, componentele Fabric expun un suport de `styles` (a nu fi confundate cu cel încorporat în  React numit `style`).

Puteți utiliza inteligența pentru a descoperi ce părți din componentă le puteți personaliza.

Suportul `styles` poate lua fie un obiect, sau o funcție, care returnează un obiect de stil bazat pe suportul de valori ale componentei.

Următorul cod (simplificat din `demo/src/components/TodoHeader.tsx`) demonstrează folosirea `styles` pentru personalizarea individuală a componentelor. TextField-ul utilizează o funcție de stil și PrimaryButton-ul utilizeaza un obiect de stil.

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

## 4. CSS-in-JS cu `mergeStyles`

`mergeStyles` este o bibliotecă de stilizare a claselor de nume CSS din stiluri care sunt exprimate ca obiecte JavaScript. Aceste clase pot fi utilizate ca suport `className` al oricărei componente sau suport, precum `<div>`.

Aceasta este o abordare avansată care, de asemenea, funcționează și în exteriorul Fabric-ii. În aplicațiile de bază Fabric, veți folosi în mod obișnuit doar `mergeStyles` în anumite scenarii de nișă. (Fabric însăși utilizează `mergeStyles` sub acoperire pentru a îmbunătăți o parte din stilul său.)

Beneficiile `mergeStyles`-ului includ:

- Funcționalitate în orice aplicație
- Elimină necesitatea de a importa sau de a grupa foile de stil CSS (toate stilurile sunt grupate precum un cod normal)
- Oferă verificarea tipului pentru stiluri (precum Sass) cănd este utilizat cu TypeScript
- Forte performant în comparație cu alte librării similare 

Următorul cod este un exemplu de bază folosind mergeStyles. ([Acest CodePen](https://codepen.io/dzearing/pen/jGdgrE?editors=1011) ilustrează mult mai detaliat ce face `mergeStyles` și include căteva exemple avansate.)

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
