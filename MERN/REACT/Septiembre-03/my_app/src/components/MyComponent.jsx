
import './Estilo.css';

import estilos from './Mycomponent.module.css';


const styles={
    contenedor:{
        backgroundColor: 'gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    }
}


// componentes funcionales
const MyComponent = (/* parametros */{ param1 }) => {

    // logica

    return (
        <div className="contenedorSaludo" style={styles.contenedor}>
            <h1 className={estilos.titulo}>My Component {param1} </h1>
        </div>
    )
};

// exportar el componente
export default MyComponent;