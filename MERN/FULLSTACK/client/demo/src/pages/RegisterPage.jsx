import { Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";



const Register = () => {


    const [form, setForm] = useState({});

    const [errors, setErrors] = useState({});

    const handleRegister = async () => {

        try {
            const response = await axios.post("/api/users", form);//REALIZAR LA PETICIÓN DE CREACIÓN AL BACKEND
            const data = response.data; //CONVIERTE LA RESPUESTA
            const status = response.status; //OBTENEMOS EL ESTADO DE LA RESPUESTA
            console.log(data, status);  //VEMOS EN CONSOLA LA RESPUESTA
        } catch (error) {
            console.log(error.response.data.errors); //SI HAY ERROR LO MOSTRAMOS EN CONSOLA
            setErrors(error.response?.data?.errors); //GUARDAMOS LOS ERRORES EN EL ESTADO
        }


    }

    return (
        <>
            <Typography variant="h2" >
                Register Page
            </Typography>

            <Stack sx={{ width: 300 }} spacing={2}>
                <TextField
                    type="email"
                    variant="outlined"
                    placeholder="example@email.com"
                    label="Email"
                    value={form.email || ""}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    error={errors.email ? true : false}
                    helperText={errors.email ? errors.email.message : ""}
                />
                <TextField
                    type="password"
                    variant="outlined"
                    label="Password"
                    value={form.password || ""}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    error={errors.password ? true : false}
                    helperText={errors.password ? errors.password.message : ""}
                />
                                <TextField
                    type="password"
                    variant="outlined"
                    label="Password"
                    value={form.confirmPassword || ""}
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                    error={errors.confirmPassword ? true : false}
                    helperText={errors.confirmPassword ? errors.confirmPassword.message : ""}
                />
                <Button variant="contained" color="primary" onClick={handleRegister} >Register</Button>

            </Stack>
            <Link to="/users">VIEW USERS</Link>
        </>
    );
}


export default Register;


