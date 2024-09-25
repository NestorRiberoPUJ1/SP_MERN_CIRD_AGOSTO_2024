import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";


const Contexto = createContext();


const ContextProvider = ({ children }) => {

    const [contador, setContador] = useState(0);

    const aumentarContador = () => setContador(contador + 1);
    const disminuirContador = () => setContador(contador - 1);


    return (
        <Contexto.Provider value={{ contador, aumentarContador, disminuirContador }}>
            {children}
        </Contexto.Provider>
    );
}

const useContador = () => {
    return useContext(Contexto);
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};


export { ContextProvider, useContador };