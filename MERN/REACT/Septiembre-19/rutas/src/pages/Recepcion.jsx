import { useLocation, useNavigate } from "react-router-dom";



const Recepcion = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const mensaje = location.state?.mensaje || 'No hay mensaje';


    const backNavigation = () => {
        navigate(-1);   // Navega hacia atrás
    }

    return (
        <div>
            <h1>Recepcion</h1>
            <h2>Tu mensaje es:</h2>
            <p>{mensaje}</p>
            <button onClick={backNavigation}>Volver</button>
        </div>
    )
}

export default Recepcion;