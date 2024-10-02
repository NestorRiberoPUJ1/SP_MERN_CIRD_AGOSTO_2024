import Cancion from "../models/Canciones.model.js"



const CrearCancion = async (req, res) => {
    const data = req.body;
    try {
        const nuevaCancion = await Cancion.create(data);
        res.json(nuevaCancion);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
}

const MostrarCanciones = async (req, res) => {
    try {
        const canciones = await Cancion.find();//retorna todas las canciones
        res.json(canciones);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const BuscarPorId = async (req, res) => {
    const { id } = req.params;// accedo la variable
    try {
        const cancionPorId = await Cancion.findById(id);//Buscamos por id
        res.json(cancionPorId);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

const ActualizarPorId = async (req, res) => {
    const { id } = req.params;// accedo la variable
    const data = req.body;
    try {
        const cancionPorId = await Cancion.findByIdAndUpdate(id, data, { new: true })
        if (!cancionPorId) {
            return res.status(404).json("La cancion no existe");
        }
        return res.json(cancionPorId);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


const EliminarCancion = async (req, res) => {
    const { id } = req.params;// accedo la variable
    try {
        const cancionEliminada = await Cancion.findByIdAndDelete(id);
        if (!cancionEliminada) {
            res.status(404).json({ mensaje: "Cancion no encontrada" });
            return;
        }
        res.json({ mensaje: "Cancion eliminada correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


export default {
    CrearCancion,
    MostrarCanciones,
    BuscarPorId,
    ActualizarPorId,
    EliminarCancion
}