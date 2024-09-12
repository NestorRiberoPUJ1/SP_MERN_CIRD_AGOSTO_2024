import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Card = ({ animal }) => {

    // CONST [estado, funcionParaModificarElEstado] = useState(estadoInicial)
    const [likes, setLikes] = useState(0);

    const [descriptionLikes, setDescriptionLikes] = useState(' Con 0 Me gusta');

    const handleClick = () => {
        alert(animal.name);
    }

    const handleMouseEnter = (event) => {
        console.log(event); // Evento
        console.log(event.target); // Elemento que dispara el evento
        console.log(animal.description); // ACCIONES QUE QUIERO HACER
    }

    const handleLikes = () => {
        //incrementar el estado de likes
        if (likes < 10) {
            setLikes((prevValue) => {
                //modificacion de likes
                const newLikes = prevValue + 1;
                setDescriptionLikes(` Con ${newLikes} Me gusta`);
                return newLikes; // nuevo valor de likes
            })
        }
        console.log('LIKES', likes);
    }


    useEffect(() => {
        // Función que se ejecuta cuando el componente se monta
        console.log('COMPONENTE MONTADO', animal.name);
        return () => {
            // Función que se ejecuta cuando el componente se desmonta
            console.log('COMPONENTE DESMONTADO', animal.name);
        }
    }, []); // [] -> arreglo de dependencias, si no hay dependencias se ejecuta solo una vez


    useEffect(() => {
        console.log('COMPONENTE ACTUALIZADO CON LIKES', animal.name, likes);
    }, [likes]); // Este efecto se ejecuta cuando likes cambia


    return (
        <div>
            <h2 onClick={handleClick} >{animal.name}</h2>
            <p onMouseEnter={handleMouseEnter}>
                {animal.description}
                {descriptionLikes}
            </p>
            <img src={animal.image} alt={animal.name} />
            <button onClick={handleLikes}>Likes ({likes})</button>
        </div>
    );
}

Card.propTypes = {
    animal: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
}


export default Card;
