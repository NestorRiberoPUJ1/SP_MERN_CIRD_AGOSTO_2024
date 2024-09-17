import PropTypes from 'prop-types'
import styles from './Pokemon.module.css';


const colorType = {
    Electrico: "#FFD700",
    Fuego: "#FF4500",
    Agua: "#1E90FF",
    Fantasma: "#8A2BE2",
    Psiquico: "#FF1493",
    default: "#FFD700"
}

const constrastColor = {
    Electrico: "#000",
    Fuego: "#000",
    Agua: "#000",
    Fantasma: "#fff",
    Psiquico: "#fff",
    default: "#000"
}


const Pokemon = ({ pokemon, selected, setSelected }) => {

    const handleSelect = () => {
        // Si esta seleccionado, lo deselecciono
        if (selected === pokemon.name) {
            setSelected("")
        }
        // Si no esta seleccionado, lo selecciono
        else {
            setSelected(pokemon.name)
        }
    }


    return (
        <div className={styles.PokeCard} style={
            {
                backgroundColor: colorType[pokemon.type],
                color: constrastColor[pokemon.type],
                outline: selected===pokemon.name ? "6px solid black" : ""
            }

        }
            onClick={handleSelect}
        >
            <div className={styles.PokeHeader}>
                <h2>{pokemon.name}</h2>
                <h2>{pokemon.power}</h2>
            </div>
            <div className={styles.PokeImage}>
                <img src={pokemon.img} alt="img" />
            </div>
            <div className={styles.PokePowers}>
                {pokemon.skills.map((item, index) => {
                    return (
                        <div key={`${pokemon.name}_skills_${index}`}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div >
    );
};


Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        power: PropTypes.number,
        img: PropTypes.string,
        skills: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            description: PropTypes.string
        }))
    }),
    selected: PropTypes.string,
    setSelected: PropTypes.func
}

export default Pokemon;