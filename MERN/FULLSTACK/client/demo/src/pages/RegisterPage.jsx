import { Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";



const Register = () => {


    const [form, setForm] = useState({});

    const handleRegister = async () => {

        const response = await axios.post("/api/users", form);//REALIZAR LA PETICIÓN DE CREACIÓN AL BACKEND
        const data = response.data; //CONVIERTE LA RESPUESTA
        console.log(data);  //VEMOS EN CONSOLA LA RESPUESTA

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
                />
                <TextField
                    type="password"
                    variant="outlined"
                    label="Password"
                    value={form.password || ""}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <Button variant="contained" color="primary" onClick={handleRegister} >Register</Button>

            </Stack>
            <Link to="/users">VIEW USERS</Link>
        </>
    );
}


export default Register;


