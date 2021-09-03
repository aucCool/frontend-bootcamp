// Interfață pentru un obiect sau o clasă
interface Car {
  make: string;
  model: string;
}

class MyCar implements Car {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}
const myCar1: Car = new MyCar('Honda', 'Accord');

const myCar2: Car = {
  make: 'Honda',
  model: 'Accord'
};

// Interfață pentru o funcție 
interface InterestingFn {
  (someArgs: string): number;
}
const interesting: InterestingFn = (someArgs: string): number => {
  return Number(someArgs);
};

// adăugând un export pentru a o transforma într-un "module"
export default {};
