// Destructurarea
var [a, b, ...rest] = [1, 2, 3, 4];
console.log(a, b, rest); // 1 2 [3,4]

// Atribuirea matricei
var list = [1, 2];
list = [...list, 3, 4];
console.log(list); // [1,2,3,4]

// Atribuirea obiectului
const point2D = { x: 1, y: 2 };
const point3D = { ...point2D, z: 3 };

// Concatenarea a două obiecte
const obj1 = { x: 1 };
const obj2 = { y: 2 };

const obj3 = { ...obj1, ...obj2 };

// Destructurarea obiectului
const { x } = obj3;

// adăugând un export o va transforma într-un "module"
export default {};
