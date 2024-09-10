import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const rangeRef = useRef(null);


  useEffect(() => {
    console.log(rangeRef.current.value);
  }, [])


  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
    const data = {
      name,
      lastName,
      email,
      password,
      range: rangeRef.current.value
    }
    console.log(data);

    //Resetear formulario
    setName('');
    setLastName('');
    setEmail('');
    setPassword('');
    rangeRef.current.value = 50;
  }

  return (
    <>
      <h1>REGISTRO</h1>
      <form action="" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>


        <input type="range" name="" id="" ref={rangeRef} />

        <button type='submit'>ENVIAR</button>

      </form>

      <h2>Nombre: {name}</h2>
      <h2>Apellido: {lastName}</h2>
      <h2>Email: {email}</h2>
      <h2>Password: {password}</h2>

    </>
  )
}

export default App
