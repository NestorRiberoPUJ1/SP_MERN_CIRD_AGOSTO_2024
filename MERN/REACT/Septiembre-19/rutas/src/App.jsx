import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Acerca from './pages/Acerca';
import Recepcion from './pages/Recepcion';
import Postres from './pages/Postres';
import RootLayout from './pages/RootLayout';
import NotFound from './pages/NotFound';



function App() {


  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/acerca">Acerca</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* GRUPOS DE RUTAS PARA UN TIPO DE VISTA */}
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Navigate to="/postres" />} /> {/* Se redirige a la ruta "/postres" */}
          <Route path="/postres" element={<Inicio />} /> {/* Se responde con un componente a la ruta "/" */}
          <Route path="/postres/:id" element={<Postres />} /> {/* Se responde con un componente a la ruta "/postres/:id"  donde id es una variable que se puede leer*/}
        </Route>

        <Route path="/acerca" element={<Acerca />} /> {/* Se responde con un componente a la ruta "/acerca" */}
        <Route path="/recepcion" element={<Recepcion />} />   {/* Se responde con un componente a la ruta "/recepcion" */}

        <Route path="*" element={<NotFound />} /> {/* Se responde con un componente a cualquier ruta que no haya sido definida */}
      </Routes>

    </BrowserRouter>
  )
}

export default App
