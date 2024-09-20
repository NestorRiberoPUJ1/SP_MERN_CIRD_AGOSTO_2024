import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Acerca = () => {

    const navigate = useNavigate();
    const [formulario, setFormulario] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado", formulario);
        navigate('/recepcion', { state: { mensaje: formulario.mensaje } });
    }


    return (
        <>
            <h2>Acerca de</h2>
            <p>Esta es la página de acerca de</p>
            <h3>Contáctanos</h3>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formulario.nombre || ""}
                        /* Maneja deestructuración para solo cambiar la clave nombre */
                        onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formulario.email || ""}
                        /* Maneja deestructuración para solo cambiar la clave email */
                        onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        name="mensaje"
                        id="mensaje"
                        cols="30"
                        rows="10"
                        value={formulario.mensaje || ""}
                        /* Maneja deestructuración para solo cambiar la clave mensaje */
                        onChange={(e) => setFormulario({ ...formulario, mensaje: e.target.value })}
                    >
                    </textarea>
                </div>
                <button type="submit" >Enviar</button>
            </form>
        </>
    )
}

export default Acerca;