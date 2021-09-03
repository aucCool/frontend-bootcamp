// Acestea sunt numite importuri dintr-un fișier relativ cu acest fișier 
import { namedConst, namedFn, namedObj, namedConstBracket } from './named';

// Putem chiar să dăm o poreclă constantei numite
import { namedConst as c } from './named';

// Acestea sunt *same instances* aparținând importurilor numite, însă ele sunt toate importate într-un singur obiect
import * as named from './named';

// Printarea exporturilor
console.log(namedConst);
console.log(c);
console.log(namedFn());
console.log(namedObj);
console.log(namedConstBracket);

// Tipărirea exporturilor din nivelul module al importului
console.log(named.namedConst);
console.log(named.namedFn());
console.log(named.namedObj);
console.log(named.namedConstBracket);

// Importurile denumite și la nivel de module fac referire către aceleași instanțe ale obiectului 
console.log(namedObj === named.namedObj); // true

// Importul implicit poate fi numit oricum vrem precum consumator 
import DefaultClass from './default';
import Foo from './default';

console.log(new DefaultClass().hello);
console.log(new Foo().hello);
