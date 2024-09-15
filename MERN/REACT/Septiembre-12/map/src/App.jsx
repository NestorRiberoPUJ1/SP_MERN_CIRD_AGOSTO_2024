import { useState } from "react"
import Pokemon from "./components/Pokemon"


const pokemones = [
  {
    name: "Pikachu",
    power: 60,
    type: "Electrico",
    img: "https://www.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/06/pikachu-3059226.jpg",
    skills: [
      {
        name: "Carga",
        description: "Descripcion carga"
      },
      {
        name: "Bola Voltio",
        description: "Descripcion bola voltio"
      }
    ]
  },
  {
    name: "Charizard",
    power: 120,
    type: "Fuego",
    img: "https://wallpapers.com/images/featured/charizard-81j38es78uba4o6j.jpg",
    skills: [
      {
        name: "Giro fuego",
        description: "Descripcion Giro fuego"
      },
      {
        name: "Vuelo",
        description: "Descripcion Vuelo"
      }
    ]
  },
  {
    name: "Blastoise",
    power: 100,
    type: "Agua",
    img: "https://i.redd.it/jgbtr6obcaxa1.jpg",
    skills: [
      {
        name: "Chorro a Presion",
        description: "Descripcion chorro a presion"
      },
    ]
  },
  {
    name: "Gengar",
    power: 130,
    type: "Fantasma",
    img: "https://designersprototype.nl/wp-content/uploads/2020/08/Gengar-example.jpg",
    skills: [
      {
        name: "Obscuridad absoluta",
        description: "Descripcion obscuridad absoluta"
      },
      {
        name: "Sombre Trampa",
        description: "Descripcion Sombra Trampa"
      }
    ]
  },
  {
    name: "Gyarados",
    power: 180,
    type: "Agua",
    img: "https://cdn.donmai.us/sample/fd/dc/__gyarados_pokemon_drawn_by_jeffrey_chen__sample-fddc7b345257aa67c9f5614b4ff5a303.jpg",
    skills: [
      {
        name: "Tsunami",
        description: "Descripcion Tsunami"
      },
      {
        name: "Chorro a Presion",
        description: "Descripcion Chorro a Presion"
      }
    ]
  },
  {
    name: "Mewtwo",
    power: 130,
    type: "Psiquico",
    img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/150.png",
    skills: [
      {
        name: "Psicobomba",
        description: "Une hasta 2 cartas de Energía de tu pila de descartes a 1 de tus Pokémon."
      },
      {
        name: "Golpe Límite",
        description: "Si a tu rival le quedan 3 cartas de Premio o menos, este ataque hace 90 puntos de daño más."
      }
    ]
  }
]

const styles = {
  pokeContainer: {
    display: "flex",
    flexDirecction: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px"
  }
}


function App() {


  const [type, setType] = useState("ALL");


  return (
    <>
      <h1>POKEMONES</h1>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="ALL">Todos</option>
        <option value="Electrico">Eléctricos</option>
        <option value="Fuego">Fuego</option>
        <option value="Agua">Agua</option>
        <option value="Fantasma">Fantasma</option>
        <option value="Psiquico">Psíquico</option>
      </select>

      <div style={styles.pokeContainer}>
        {
          pokemones.map((item, index) => {
            return (
              type === "ALL" || item.type === type ? <Pokemon pokemon={item} key={`poke_${index}`} /> : null
            )
          })
        }
      </div>

      <div style={styles.pokeContainer}>
        {
          pokemones.filter((value) =>
            value.type === type || type === "ALL"
          ).map((item, index) => {
            return (
              <Pokemon pokemon={item} key={`poke_${index}`} />
            )
          })
        }
      </div>
        

    </>
  )
}

export default App
