import React, { useContext} from 'react'
import { CartContextReducerDentistas } from '../../../context/CartContextReducerDentistas'

const DentistasFavoritos = () => {

    const {state,dispatch} = useContext(CartContextReducerDentistas)

  return (
    <div>
        DENTISTAS FAVORITOS
        <ul>
            {
               state.dentistasFavoritos.map(item => (
                   <li key={item.id}>
                       {item.name}
                       <button  onClick={()=>dispatch({type: "BORRAR_DENTISTA_FAVORITO_SELECCIONADO",payload: item.id }) } >Quitar</button>
                  </li>
               ))
            }
        </ul>
        <button onClick={()=>dispatch({type: "BORRAR_LISTA_DENTISTAS_FAVORITOS" }) } >Limpiar</button>
        
    </div>
  )
}

export default DentistasFavoritos