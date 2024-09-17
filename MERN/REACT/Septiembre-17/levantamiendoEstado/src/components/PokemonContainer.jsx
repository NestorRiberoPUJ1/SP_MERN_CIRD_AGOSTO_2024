import PropTypes from 'prop-types'

const styles = {
    pokeContainer: {
        display: "flex",
        flexDirecction: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px"
    }
}

const PokemonContainer = ({ children }) => {

    return (
        <div style={styles.pokeContainer}>
            {children}
        </div>
    )
}

PokemonContainer.propTypes = {
    children: PropTypes.node
}

export default PokemonContainer;