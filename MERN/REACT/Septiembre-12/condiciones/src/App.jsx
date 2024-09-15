import { useState } from "react"

const App = () => {

  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  }


  const isEven = counter % 2 === 0; // devuelve true si es par y false si es impar
  
  // Funcion que devuelve true si es primo y false si no lo es
  const isPrime = () => {
    if (counter === 0 || counter === 1) {
      return false;
    }
    for (let i = 2; i < counter; i++) {
      if (counter % i === 0) {
        return false;
      }
    }
    return true;
  }

  return (
    <>
      <h1>Condiciones</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={handleCounter}>Incrementar</button>

      { // Condicional if ternario (condicion ? si es true : si es false)
        isEven ?
          <h3>Es par</h3>
          :
          <h3>Es impar</h3>
      }

      { 
        // Condicional if normal
        isPrime() && <h3>Es primo</h3>
      }

    </>
  )
}

export default App
