//Permitir que el servidor pueda leer las variables de entorno
import dotenv from 'dotenv';
dotenv.config();
//Importamos Express
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
//Creamos instancia de Express
const app = express();

//Definimos el puerto
const PORT = process.env.PORT || 3001;


//Configuraciones

//Permitimos que el servidor pueda recibir datos en formato JSON
app.use(express.json());
// Helmet
app.use(helmet());
//Morgan tiny
app.use(morgan('tiny'));

app.use(express.static('public'));

//Definimos las rutas

//Middleware que intercepta todas las peticiones
import Authenticate from './src/middlewares/Authenticate.js';
app.use(Authenticate.Review);

import MainRoutes from './src/routes/Main.routes.js';
app.use('/',MainRoutes);

import UsuariosRoutes from './src/routes/Usuarios.routes.js';
app.use('/usuarios',UsuariosRoutes);

//Iniciamos el servidor
app.listen(PORT, () => {
    //Mostramos mensaje en consola
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});