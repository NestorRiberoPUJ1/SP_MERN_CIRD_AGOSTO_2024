// Importamos las definiciones de modelo y schema desde mongoose
import { model, Schema } from 'mongoose';
import customValidations from '../utils/customValidations.js';

//MODELADO DE DATOS DEL ESQUEMA
const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "¡El email es obligatorio!"],
        trim: true,// borra los espacios al final
        lowercase: true,
        unique: true,
        validate: [customValidations.validateEmail, "Ingrese un email válido"]

    },
    password: {
        type: String,
        required: [true, "¡El password es obligatorio!"],
        minLength: [6, "El password no puede ser menor a 6 carateres"],
    }
}, { timestamps: true });


// Crea el modelo de User
const User = model("User", UserSchema);

// Exporta el modelo para usarlo en tu aplicación
export default User;