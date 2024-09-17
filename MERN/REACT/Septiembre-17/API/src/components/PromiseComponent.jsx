import { useState } from "react";
import { useEffect } from "react";



const PromiseComponent = () => {

    const [cargando, setCargando] = useState(false);


    const cargandoInfo = () => {
        return new Promise((resolve, reject) => {
            // Simulación de una solicitud a una API
            setTimeout(() => {
                const exito = Math.random() > 0.5 ? true : false; // Simulación de éxito aleatorio
                if (exito) {
                    resolve('Datos obtenidos correctamente');
                } else {
                    reject('Error al obtener datos');
                }
            }, (Math.random() * 5000)); // Simulación de una solicitud de tiempo aleatorio
        });
    };


    // Se ejecuta una vez, después de que el componente se renderiza
    useEffect(() => {
        setCargando(true);
        cargandoInfo()
            .then((res) => {    // Caso de éxito
                console.log(res);
                setCargando(false);
            })
            .catch((err) => {   // Caso de error
                console.log(err);
                setCargando(false);
            });
    }, [])


    return (
        <div>
            <h1>PromiseComponent</h1>
            <h2>
                {cargando ? 'Cargando...' : 'Finalizado'}
            </h2>
        </div>
    )
}

export default PromiseComponent;