import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import './App.css'
import Footer from './components/layout/footer/Footer'
import Dentistas from './components/pages/dentistas/Dentistas'
import DentistasFavoritos from './components/pages/dentistasFavoritos/DentistasFavoritos'

import Navbar from './components/layout/navbar/Navbar'
import CartContextReducerDentistasProvaider from './context/CartContextReducerDentistas'
import DentistaSeleccionado from './components/pages/dentistaSeleccionado/DentistaSeleccionado'


function App() {


  return (
   <BrowserRouter>

   <CartContextReducerDentistasProvaider>
     <Routes>
        <Route element={<Navbar/>}>
              <Route element={<Footer/>}>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/dentistas" element={<Dentistas/>} />
                    <Route path="/dentista/:id" element={<DentistaSeleccionado/>} />
                    <Route path="/contacto" element={<h1>contacto</h1>} />
                    <Route path="/favotitos" element={<DentistasFavoritos/>} />
              </Route>
        </Route>
        <Route path="*" element={<h1>No existe la pagina</h1>} />
     </Routes>
   </CartContextReducerDentistasProvaider>
     
       
   </BrowserRouter>
  )
}

export default App
