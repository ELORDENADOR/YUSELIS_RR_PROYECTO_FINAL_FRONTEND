import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CartContextReducerDentistas } from '../../../context/CartContextReducerDentistas'


const Dentistas = () => {

const {state,dispatch} = useContext(CartContextReducerDentistas)

useEffect(() =>{
    const dentistas = axios.get("https://jsonplaceholder.typicode.com/users")
    dentistas
    .then((res) => dispatch({type:"OBTENER_DENTISTAS", payload: res.data}))
    .catch((err) => console.log(err));
},[])


  return (
    <div>
        <ul>
            {
               state.dentistas.map(item => (
                   <li key={item.id}>
                       {item.name}                      
                       <button onClick={()=>dispatch({type:"GUARDAR_DENTISTAS_FAVORITOS", payload: item})} >Agregar a favoritos</button>
                       
                       <Link to={`/dentista/${item.id}`}>
                       <button>Ver Detalle</button>
                       </Link>
                   </li>
               ))
            }
        </ul>
        
    </div>
  )
}

export default Dentistas