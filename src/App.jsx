import { BrowserRouter, Route, Routes } from "react-router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/shared/Menu"
import Footer from "./components/shared/Footer"
import Home from "./components/views/home/Home.jsx"
import DetalleDeProducto from "./components/views/Producto/DetalleDeProducto"
import Login from "./components/views/Login"
import Administrador from "./components/views/Administrador"
import FormularioProducto from "./components/views/Producto/FormularioProducto"
import Error404 from "./components/views/Error404"
import { useEffect, useState } from "react"
import ProtectorAdmin from "./components/routes/ProtectorAdmin"

const App = () => {

  //temporal, no se usara localstorage para la sesion del usuario
const sesionUsuario = JSON.parse(sessionStorage.getItem("usuarioKey")) || false;
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);
  const [productos, setProductos] = useState([])

  useEffect(() => {
  sessionStorage.setItem('usuarioKey', JSON.stringify(usuarioLogueado))
}, [usuarioLogueado])


return (
    <>
    <BrowserRouter>
   <Menu></Menu>
   <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detalle" element={<DetalleDeProducto/>}/>
      <Route path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}/>}/>
      <Route path="/administrador" element={
        <ProtectorAdmin usuarioLogueado={usuarioLogueado}></ProtectorAdmin>}>
      <Route index element={<Administrador productos={productos} setProductos={setProductos}></Administrador>}/>
      <Route path="crear" element={<FormularioProducto titulo="Crear Producto"></FormularioProducto>}/>
      <Route path="editar/:id" element={<FormularioProducto titulo="Editar Producto"></FormularioProducto>}/>
      </Route>
      <Route path="*" element={<Error404></Error404>}/>
    </Routes>
   </main>
   <Footer></Footer>
   </BrowserRouter>
    </>
)
}

export default App