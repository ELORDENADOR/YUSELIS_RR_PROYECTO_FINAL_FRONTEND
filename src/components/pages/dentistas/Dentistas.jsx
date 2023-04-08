import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContextReducerDentistas } from '../../../context/CartContextReducerDentistas'

import "./Dentistas.css";

const Dentistas = () => {

const {state,dispatch} = useContext(CartContextReducerDentistas)

// const [imgDentistas,setImgDentistat] = useState([])

useEffect(() =>{
    const dentistas = axios.get("https://jsonplaceholder.typicode.com/users")
    dentistas
    .then((res) => dispatch({type:"OBTENER_DENTISTAS", payload: res.data}))
    .catch((err) => console.log(err));
},[])


// useEffect(() =>{
//   const imgDentista = axios.get("https://randomuser.me/api/?results")
//   imgDentista
//   .then((res) => setImgDentistat(res.data))
//   .catch((err) => console.log(err));
// },[])

// console.log(imgDentistas)


  return (
    <div id='contenedorListadoDeDentistas'>
      <p id='tituloDentistas'>DENTISTAS</p>
            {/* {
                              
               state.dentistas.map(item => (                                

              
          <li key={item.id} >

                {item.name}                  
                                
                <button  id='botonGuardarDentistaFavoritos'   onClick={()=>dispatch({type:"GUARDAR_DENTISTAS_FAVORITOS", payload: item})} >Agregar a favoritos</button>
             
                <Link to={`/dentista/${item.id}`}><button id='verDetalleDentista' >Ver Detalle</button></Link>

            </li>
                 
               ))
            } */}


{/* {
  imgDentistas.map(item =>{
    <li key={item.id}>    
     <h2> este{item.male}</h2>
    </li>
  })
} */}

<table>
      <thead>
           <tr>
               <th>Nombre</th><th>Agregar a favoritos</th><th>Ver Detalle</th>
           </tr>
      </thead>

      <tbody>
         {state.dentistas.map(item => (                    
          <tr key={item.id}>                    

                    <td>
                      {item.name}  
                    </td>           
                    <td>
                       <button  id='botonGuardarDentistaFavoritos'   onClick={()=>dispatch({type:"GUARDAR_DENTISTAS_FAVORITOS", payload: item})} >ok</button>
                    </td>              
                     <td>
                      <Link to={`/dentista/${item.id}`}><button id='verDetalleDentista' >ok</button></Link>
                    </td>
          </tr>
               ))
         }
      </tbody>

</table>
  
        
    </div>
  )
}

export default Dentistas