# Pasul 1.2 - Introducere în CSS (Demonstrație)

## Proprietățile CSS-ului

Având în vedere că am exersat adăugarea etichetelor HTML la pagini web, haideți să exersăm adăugarea de stiluri la aceste etichete. Aceste stiluri pot fi folosite în destul de multe contexte! Putem modifica:

- Typografia
- Culorile
- Afișarea (colțuri, margini, decorații)
- Aspectul
- Poziția
- Formatul de afișare: curent și blocat
- Animațiile și [mult mai multe](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

Stilurile CSS sunt mereu scrise perechi în `property: value` (precum `background: blue;`) și finisate cu semicoloane.

## Aplicarea CSS-ului la o pagină HTML 

CSS-ul poate fi aplicat etichetelor HTML în 3 moduri diferite.

1. Prin folosirea curentă a etichetelor HTML `style` atribuite
   - `<div style="background: blue; color: white;">Hello </div>`
2. Prin intermediul etichetei `<style>` în pagina HTML 
3. Printr-o filă externă CSS
   - `<link rel="stylesheet" href="./css-demo-finished.css" />`

## Vizarea elementelor specifice

Stilurile curente sunt mereu aplicate direct elementului pe care îl alegi, însă etichetele `<style>` și filele externe CSS necesită o modalitate prin care să putem potrivi elementele cu seturile lor respective de stiluri. Aceasta se realizează cu  **[CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)**. Când cele selectate sunt combinate cu stilurile CSS, procesul va fi numit **ruleset**.

Seturile de reguli CSS iau următoarea formă:

```css
selector1,
selector2 {
  property1: value1;
  property2: value2;
}
```

Aici veți găsi o afișare mai detaliată de la [Chris Eppstein](https://twitter.com/chriseppstein/status/1100115119437111296):

<img src="https://raw.githubusercontent.com/Microsoft/frontend-bootcamp/master/assets/css-syntax.png"/>

Elementul ce necesită a fi selectat poate fi o singură etichetă, o clasă, un ID sau atribuite. De asemenea, pot fi [combinații](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors) ale acestor elemente.
