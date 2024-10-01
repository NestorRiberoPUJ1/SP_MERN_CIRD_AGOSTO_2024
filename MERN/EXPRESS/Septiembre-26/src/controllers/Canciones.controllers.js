
const listaCanciones = [
    { id: 1, nombre: "Burning Love", autor: "Elvis Presley" },
    { id: 2, nombre: "Yesterday", autor: "The Beatles" },
    { id: 3, nombre: "Dancing Queen", autor: "ABBA" },
    { id: 4, nombre: "Bohemian Rapsody", autor: "Queen" },
];



const MostrarCanciones = (req, res) => {
    res.json(listaCanciones);
}

const BuscarPorId = (req, res) => {
    const { id } = req.params;// accedo la variable
    console.log(id);
    //buscar la cancion por id
    const miCancion = listaCanciones.filter((value, index) => {
        return value.id == id;
    });//BUSCA LA CANCION POR ID
    res.json(miCancion);
}

const ActualizarPorId = (req, res) => {
    const { id } = req.params;// accedo la variable
    const data = req.body;// obtenemos la informacion
    console.log(id, data);
    //buscar la cancion por id
    const miCancion = listaCanciones.filter((value, index) => {
        return value.id == id;
    });//BUSCA LA CANCION POR ID
    if (miCancion.length === 0) {
        //no existe
        return res.status(404).json("NO EXISTE");
    }
    listaCanciones[parseInt(id) - 1] = data;
    return res.json(listaCanciones);
}


export default {
    MostrarCanciones,
    BuscarPorId,
    ActualizarPorId,
}