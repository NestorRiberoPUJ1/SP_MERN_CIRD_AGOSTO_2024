import { useState } from "react";
import PromiseComponent from "./components/PromiseComponent"
import { useEffect } from "react";
import axios from 'axios';


const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';


function App() {

  const [pokeName, setPokeName] = useState('');

  const [pokemonList, setPokemonList] = useState([]);

  const fetchData = async () => {
    try {
      // Petición GET a la API
      const respuesta = await fetch(BASE_URL + pokeName); // Petición GET a la API
      const datos = await respuesta.json(); // Conversión de la respuesta a JSON
      console.log(datos); // Impresión de los datos en consola
    } catch (error) {
      // Manejo de errores
      console.log(error);// Impresión del error en consola
    }
  }

  const loadPokemons = async () => {
    try {
      // Petición GET a la API
      const respuesta = await axios.get(BASE_URL); // Petición GET a la API
      const datos = respuesta.data; // Extracción de los datos de la respuesta
      console.log(datos); // Impresión de los datos en consola
      setPokemonList(datos.results);
    } catch (error) {
      // Manejo de errores
      console.log(error);// Impresión del error en consola
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    fetchData();  // Llamada a la función que realiza la petición
  }

  useEffect(() => {
    loadPokemons();
  }, [])


  return (
    <>
      <h1>API</h1>
      <PromiseComponent />
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <select value={pokeName} onChange={(e) => setPokeName(e.target.value)}>
          {
            pokemonList.map((pokemon, index) => (
              <option key={index} value={pokemon.name}>{pokemon.name}</option>
            ))
          }
        </select>

        <button type="submit">BUSCAR</button>
      </form>

    </>
  )
}

export default App
