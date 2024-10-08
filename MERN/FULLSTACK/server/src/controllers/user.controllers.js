import User from "../models/user.model.js";






const create = async (req, res) => {
    try {
        const data = req.body;
        const newElement = await User.create(data);
        res.json(newElement).status(201);
        return;
    } catch (error) {
        console.log(error);
        res.json(error).status(500);
        return;
    }
}

const findAll = async (req, res) => {
    try {
        const elements = await User.find();
        res.json(elements).status(200);
        return;
    } catch (error) {
        console.log(error);
        res.json(error).status(500);
        return;
    }
}

const findById = async (req, res) => {
    try {
        const { id } = req.params;
        const element = await User.findById(id);

        if (!element) {
            res.json("NOT FOUND").status(404);
            return;
        }
        res.json(element).status(200);
        return;
    } catch (error) {
        console.log(error);
        res.json(error).status(500);
        return;
    }
}

const updateById = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.params;
        const element = await User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!element) {
            res.json("NOT FOUND").status(404);
            return;
        }
        res.json(element).status(200);
        return;
    } catch (error) {
        console.log(error);
        res.json(error).status(500);
        return;
    }
}

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const element = await User.deleteById(id);
        if (!element) {
            res.json("NOT FOUND").status(404);
            return;
        }
        res.json(element).status(200);
        return;
    } catch (error) {
        console.log(error);
        res.json(error).status(500);
        return;
    }
}


export default {
    create,
    findAll,
    findById,
    updateById,
    deleteById,
}