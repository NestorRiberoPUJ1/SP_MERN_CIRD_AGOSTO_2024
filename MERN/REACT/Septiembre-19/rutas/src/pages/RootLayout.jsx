import { useReducer } from 'react';
import { Outlet } from 'react-router-dom';


const styles = {
    container: {
        padding: '20px',
        margin: '20px',
        backgroundColor: 'lightgray',
        borderRadius: '5px',
        border: '1px solid #ddd',
        boxShadow: '0 0 5px #ddd',
    }
}

const estadoInicial = {
    mensaje: "",
    numero: "",
}


const reducer = (estado, accion) => {
    switch (accion.tipo) {
        case 'ESTABLECER_MENSAJE':
            return {
                ...estado,
                mensaje: accion.valor
            };
        case 'ESTABLECER_NUMERO':
            return {
                ...estado,
                numero: accion.valor
            };
        default:
            return estado;
    }
};


const RootLayout = () => {

    const [estado, dispatch] = useReducer(reducer, estadoInicial);


    const handleChangeMensaje = (e) => {
        dispatch({ tipo: 'ESTABLECER_MENSAJE', valor: e.target.value });
    }

    const handleChangeNumero = (e) => {
        dispatch({ tipo: 'ESTABLECER_NUMERO', valor: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado', estado);
    }

    return (
        <div style={styles.container}>
            <h1>Root Layout</h1>
            <div>
                <Outlet /> {/* Se renderiza el contenido de las rutas hijas */}
            </div>
            <div>
                <form action="" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="mensaje">Mensaje:</label>
                        <input
                            type="text"
                            id="mensaje"
                            name="mensaje"
                            value={estado.mensaje}
                            onChange={handleChangeMensaje}
                        />
                    </div>
                    <div>
                        <label htmlFor="numero">Número:</label>
                        <input
                            type="text"
                            id="numero"
                            name="numero"
                            value={estado.numero}
                            onChange={handleChangeNumero}
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}


export default RootLayout;