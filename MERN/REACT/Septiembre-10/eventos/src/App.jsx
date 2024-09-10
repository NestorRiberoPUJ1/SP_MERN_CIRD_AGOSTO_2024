import './App.css'
import Card from './components/Card'




const animals = [
  {
    name: 'Perro',
    description: 'El mejor amigo del hombre',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwWRH-oXGeRDRQxDcmt1EgAt-FzSg_qAQFBA&s'
  },
  {
    name: 'Gato',
    description: 'Animal independiente',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHguuI7TtAhuJ3qLYZ7lD6_HBTDwpqjqIPg&s'
  },
  {
    name: 'Chinchilla',
    description: 'Animal nocturno',
    image: 'https://www.hola.com/horizon/landscape/61cabbada09e-consejos-tener-chinchilla-como-mascota-t.jpg?im=Resize=(1200)'
  }
]


const App = () => {

  return (
    <>
      <h1>Eventos</h1>
      <Card animal={animals[0]}/>
      <Card animal={animals[1]}/>
      <Card animal={animals[2]}/>
    </>
  )
}

export default App
