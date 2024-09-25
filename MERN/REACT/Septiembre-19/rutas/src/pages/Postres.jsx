import { useNavigate, useParams } from "react-router-dom";
import postres from "../data/ListaPostres";
import { useContador } from "../components/ContextProvider";



const Postres = () => {

    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const postre = postres[id - 1]

    const backNavigation = () => {
        navigate(-1);   // Navega hacia atrás
    }

        //Utilizamos contexto para obtener el estado global
        const { contador, aumentarContador, disminuirContador } = useContador();

    return (
        <>
            <h1>El postre #{id}</h1>
            <h2>{postre.nombre}</h2>
            <h3>Visitas:{contador}</h3>
            <button onClick={aumentarContador}>+</button>
            <button onClick={disminuirContador}>-</button>
            <p>{postre.receta}</p>
            <button onClick={backNavigation}>Volver</button>
        </>
    )
}

export default Postres;