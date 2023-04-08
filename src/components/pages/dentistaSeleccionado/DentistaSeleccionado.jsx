import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CartContextReducerDentistas } from '../../../context/CartContextReducerDentistas'
import "./DentistaSeleccionado.css";

const DentistaSeleccionado = () => {


    const {state,dispatch} = useContext(CartContextReducerDentistas)

const {id} = useParams()


useEffect(() =>{
    const dentista = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    dentista
    .then((res) => dispatch({type:"OBTENER_DENTISTA_SELECCIONADO", payload: res.data}))
    .catch((err) => console.log(err));   

 },[])




  return (
   <div>
      DentistaSeleccionado
    
    <div id='contenedorDentistaSeleccionado'>
   
                       
     {/* <p className='infoDentista'><strong  className='titulo' >Nombre:</strong><strong className='respuesta'>{state.dentista.name}</strong></p>
     <p className='infoDentista' > <strong className='titulo'>Corre:</strong>:<strong className='respuesta'>{state.dentista.email}</strong></p>
     <p className='infoDentista'><strong className='titulo'>Telefono: </strong><strong className='respuesta'>{state.dentista.phone}</strong></p>
     <p className='infoDentista'> <strong className='titulo'>Pagina web:</strong> <strong className='respuesta'>{state.dentista.website}</strong></p> */}


     <table>
      <thead>
           <tr>
               <th>Nombre</th><th>Correo</th><th>Telefono</th><th>Pagina web</th>
           </tr>
      </thead>

      <tbody>
                         
          <tr>                    

                    <td>
                     {state.dentista.name}
                    </td>           
                    <td>
                    {state.dentista.email}
                    </td>              
                     <td>
                     {state.dentista.phone}
                    </td>
                    <td>
                      {state.dentista.website}
                    </td>
          </tr>
           
      </tbody>

</table>
  






</div>
   </div>
  )
}

export default DentistaSeleccionado