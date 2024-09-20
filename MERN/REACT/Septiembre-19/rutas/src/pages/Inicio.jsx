import { Link } from "react-router-dom";
import postres from "../data/ListaPostres";



const Inicio = () => {



    return (
        <>
            <h1>Bienvenidos a Postres Mágicos</h1>
            <h2>Aquí creamos postres especiales para eventos</h2>
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