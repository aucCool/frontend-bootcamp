# Pasul 2.3 - Tematizare și stilizare cu UI Fabric (Exercițiu)

[Cursuri](../../) | [Demonstrație](../demo/)

Dacă încă nu aveți aplicația derulată, începeți derularea cu `npm start` din rădăcina fișierului `frontend-bootcamp`. Accesați link-ul "exercise" din ziua 2 pasul 3 pentru a vedea rezultatele.

## Aplicarea temelor Fabric 

Aplicarea unor teme predefinite din pachetul UI Fabric înăuntru TodoApp sub `exercise/src/components/TodoApp.tsx`. Faceți aceasta prin înlocuirea:

```ts
import { FluentCustomizations } from '@uifabric/fluent-theme';
```

cu:

```ts
import { TeamsCustomizations } from '@uifabric/theme-samples';
```

## Aplicarea temelor personalizate

1. Creați propria dumneavoastră temă folosind [generator de teme](https://developer.microsoft.com/en-us/fabric#/styles/themegenerator) și copiați codul generat.

2. În `exercise/src/components/TodoApp.tsx`, ștergeți componenta `Customizer`.

3. Lipiți în tema codului generat înainte de `TodoApp` definiția componentei.

4. Jucați-vă cu valorile și folosiți-vă de inteligența codului VS pentru a descoperi mai multe proprietăți ale tipului `ITheme`.

## Personalizați o instanță de control Fabric 

1. Deschideți `exercise/src/components/TodoFooter.tsx`

2. Găsiți `<DefaultButton>` și inserați un suport `styles` 

3. Încercați să personalizați aceasta cu un obiect de stil (lăsați inteligența codului VS să vă ghideze cu privire la ce puteți utiliza pentru personalizare)

4. Încercați să personalizați aceasta cu o funcție de stil 

## CSS-in-JS cu `mergeStyles`

Așa cum a fost menționat în demonstrație, aceasta este o abordare avansată care funcționează și în afara Fabric-ii. În general, nu veți utiliza această abordare în aplicațiile Fabric.

1. Incercați să generați un nume de clasă utilizănd `mergeStyles` și folosiți-o ca pe un suport `className` în interiorul `TodoApp`

```jsx
import { mergeStyles } from 'office-ui-fabric-react';

const className = mergeStyles({
  backgroundColor: 'red',
  selectors: {
    ':hover': {
      backgroundColor: 'blue'
    }
  }
});
```

2. Încercați să oferiți câtorva coponente mai multă substanță 
