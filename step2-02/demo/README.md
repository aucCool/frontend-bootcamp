# Paul 2.2 - Librăria de componente UI Fabric (Demonstație)

[Cursuri](../../) | [Exerciții](../exercise/)

[UI Fabric](https://developer.microsoft.com/en-us/fabric) este o librărie de componente ce reflctă ultimul design de limbaj Microsoft. Este folosită în mai multe aplicații Microsoft web fiind aceasta [derulată accesând acest link](https://github.com/OfficeDev/office-ui-fabric-react).

Vom vorbi despre:

- [Caracteristicile ce o îmbunătățesc](#what-makes-it-good)
- [Cum să o găsiți](#how-to-find-it)
- [Cum să o utilizați](#how-to-use-it)
- [Partajarea aplicațiilor cu Stack](#layout-with-stack)

## Caracteristicile ce o îmbunătățesc

- Fabric a fost dezvoltat atât de către dezvoltatori căt și de către ingineri de design lucrănd împreună precum o echipă
- Cele mai importante produse Microsoft îl folosesc
- Este documentat atât cu exemple căt și cu documentații TypeScript API 
- Componentele sunt extrem de personalizate și tematice
- Librărie cuprinzătoare
- Lucrează cu tehnologii de asistare și se conformează standardelor de accesibilitate web pentru gestionarea focalizării 
- Complet finanțat și bine gestionat - rotații de protecție și o mulțime de lucrări automatizate
- Ingineria este realizată liber în GitHub
- Sistemele de inginerie sunt partajate și reutilizate de către alte echipe 

## Cum să o găsiți

GitHub repo:
https://github.com/officedev/office-ui-fabric-react

Documentație:
https://developer.microsoft.com/en-us/fabric/#/components

## Cum să o utilizați

### Importarea unei componente

```jsx
import { DefaultButton } from 'office-ui-fabric-react';

const MyComponent = () => {
  return (
    <div>
      <DefaultButton>Hello World</DefaultButton>
    </div>
  );
};
```

### Personalizarea comportamentului componentelor individuale 

Aruncați o privire asupra acestui [Documentația butonului](https://developer.microsoft.com/en-us/fabric#/components/button).

Din document, putem vedea că daca vrem să redăm o pictigramă împreună cu textul butonului, putem trece `iconProps`-ul către buton:

```js
import { DefaultButton } from 'office-ui-fabric-react';

const MyComponent = () => {
  return (
    <div>
      <DefaultButton iconProps={{ iconName: 'Mail' }}>Send Mail</DefaultButton>
    </div>
  );
};
```

### Personalizarea componentelor de redare

Câteva componente Fabric includ funcții de redare pentru a permite personalizarea anumitor părți ale componentei. Un exemplu cu TextField:

```js
import { TextField } from 'office-ui-fabric-react';

const MyComponent = () => {
  return (
    <div>
      <TextField onRenderPrefix={() => <Icon iconName="Search" />} />
      <TextField onRenderPrefix={() => 'hello world'} />
    </div>
  );
};
```

## Aspect cu Stack

Înainte de a începe, să aruncăm o privire asupra aspectului modern flexbox--a CSS, o metodă care este puternică, dar foarte, foarte complicată de utilizat: 

- Un ghidaj: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Un instrument: http://the-echoplex.net/flexyboxes/
- Știați că au existat aproximativ trei standarde flexbox? (asta înseamnă că articolele vechi s-ar putea să aibă un cod nefuncționabil)

Răspunsul oferit de Fabric este: Stack.

**Stack** este o componentă de tip container care abstractizază utilizarea flexbox-ului pentru a defini aspectul compenentelor secundare acestuia.

Flexbox folosește stiluri CSS pentru a controla:

- direcția
- creșterea
- micșorarea
- învelișul
- justificarea
- alinierea

Stack abstractizază aceste stiluri CSS și oferă tastări pentru a le face mai accesibile.

Consultați un fel de carte de bucate în a noastră [documentație](https://developer.microsoft.com/en-us/fabric#/components/stack).
