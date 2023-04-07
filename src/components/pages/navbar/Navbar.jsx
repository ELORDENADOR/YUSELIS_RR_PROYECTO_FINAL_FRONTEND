import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <br/>
         <NavLink  to="/dentistas" className={({isActive}) => (isActive ? " activeNavbar" : "navbar")} >Dentistas  </NavLink>
        <br/>
         <NavLink  to="/contacto" className={({isActive}) => (isActive ? " activeNavbar" : "navbar")} >Contacto </NavLink>
         <br/>
         <NavLink  to="/favotitos" className={({isActive}) => (isActive ? " activeNavbar" : "navbar")} >Favotitos  </NavLink>
         <br/>
     
       <Outlet/>
    </div>
  )
}

export default Navbar