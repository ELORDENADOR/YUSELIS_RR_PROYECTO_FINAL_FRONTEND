import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CartContextReducerDentistas } from '../../../context/CartContextReducerDentistas'


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
                       
      <h2> {state.dentista.name}</h2>
      <h2> {state.dentista.email}</h2>
      <h2> {state.dentista.phone}</h2>
      <h2> {state.dentista.website}</h2>

</div>
  )
}

export default DentistaSeleccionado