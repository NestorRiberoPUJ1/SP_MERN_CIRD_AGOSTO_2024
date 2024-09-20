import { useNavigate, useParams } from "react-router-dom";
import postres from "../data/ListaPostres";



const Postres = () => {

    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const postre = postres[id - 1]

    const backNavigation = () => {
        navigate(-1);   // Navega hacia atrás
    }

    return (
        <>
            <h1>El postre #{id}</h1>
            <h2>{postre.nombre}</h2>
            <p>{postre.receta}</p>
            <button onClick={backNavigation}>Volver</button>
        </>
    )
}

export default Postres;