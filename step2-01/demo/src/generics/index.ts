// Generice pentru clase
class Stack<T = number> {
  private data: T[] = [];

  push(item: T) {
    this.data.push(item);
  }
  pop(): T {
    return this.data.pop();
  }
}

const numberStack = new Stack();
const stringStack = new Stack<string>();

// Generice pentru funcții
function reverse<T>(arg: T[]): T[] {
  // TODO: implement the logic to reverse the array
  return arg;
}

// adăugând un export o va transforma într-un "module"
export default {};
