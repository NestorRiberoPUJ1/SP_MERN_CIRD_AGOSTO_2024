import express from 'express';
const router = express.Router();
import userControllers from '../controllers/user.controllers.js';


//CREATE
router.post("/",userControllers.create);
//FIND ALL
router.get("/",userControllers.findAll);
//FIND BY ID
router.get("/:id",userControllers.findById);
//UPDATE BY ID
router.put("/:id",userControllers.updateById);
//DELETE BY ID
router.delete("/:id",userControllers.deleteById);

export default router;