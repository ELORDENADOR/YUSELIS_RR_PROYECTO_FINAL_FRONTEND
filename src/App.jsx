import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import Footer from './components/pages/footer/Footer'
import Navbar from './components/pages/navbar/Navbar'


function App() {


  return (
   <BrowserRouter>
     <Routes>
        <Route element={<Navbar/>}>
              <Route element={<Footer/>}>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/dentistas" element={<h1>Todos los Dentistas</h1>} />
                    <Route path="/dentista/:id" element={<h1>dentista seleccionado</h1>} />
                    <Route path="/contacto" element={<h1>contacto</h1>} />
                    <Route path="/favotitos" element={<h1>favoritos</h1>} />
              </Route>
        </Route>
        <Route path="*" element={<h1>No existe la pagina</h1>} />
     </Routes>
       
   </BrowserRouter>
  )
}

export default App
