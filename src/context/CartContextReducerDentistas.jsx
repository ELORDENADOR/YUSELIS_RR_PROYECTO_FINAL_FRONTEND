import React, { createContext } from 'react'

export const CartContextReducerDentistas = createContext()


const CartContextReducerDentistasProvaider = ({childred}) => {
    

  return (
    <div>
         <CartContextReducerDentistas.Provider value={{}}>
          {childred}
         </CartContextReducerDentistas.Provider>


    </div>
  )
}

export default CartContextReducerDentistasProvaider