import { Link } from "react-router-dom";
import postres from "../data/ListaPostres";
import { useContador } from "../components/ContextProvider";



const Inicio = () => {

    //Utilizamos contexto para obtener el estado global
    const { contador, aumentarContador, disminuirContador } = useContador();


    return (
        <>
            <h1>Bienvenidos a Postres Mágicos</h1>
            <h2>Aquí creamos postres especiales para eventos</h2>
            <h3>Visitas:{contador}</h3>
            <button onClick={aumentarContador}>+</button>
            <button onClick={disminuirContador}>-</button>
            <ul>
                {postres.map((postre) => {
                    return (
                        <li key={postre.id}>
                            <h3>{postre.nombre}</h3>
                            <Link to={`/postres/${postre.id}`}>Ver receta</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Inicio;