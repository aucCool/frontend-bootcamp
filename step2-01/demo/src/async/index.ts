async function fetchSomething() {
  const response = await fetch('http://localhost:3000/hello');
  return await response.text();
}

// Funcțiile asincrone mereu returnează o Promise
fetchSomething().then(text => {
  console.log('hello ' + text);
});

// adăugând un export o va transforma intr-un "module"
export default {};
