import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { CartContextReducerDentistas } from "../../../context/CartContextReducerDentistas";
import "./Navbar.css";

const Navbar = () => {
  const { state, dispatch } = useContext(CartContextReducerDentistas);

  return (
    <div  className={state.isDark ? "dark" : "light"}>
      <br />
      <NavLink
        to="/dentistas"
        className={({ isActive }) => (isActive ? " activeNavbar" : "navbar")}
      >
        Dentistas{" "}
      </NavLink>
      <br />
      <NavLink
        to="/contacto"
        className={({ isActive }) => (isActive ? " activeNavbar" : "navbar")}
      >
        Contacto{" "}
      </NavLink>
      <br />
      <NavLink
        to="/favotitos"
        className={({ isActive }) => (isActive ? " activeNavbar" : "navbar")}
      >
        Favotitos{" "}
      </NavLink>
      <br />

      <button onClick={() => dispatch({ type: "CAMBIO_TEMA" })}>{state.isDark ? "light" : "dark"}</button>

       
       <h2>DENTISTAS FAVORITOS: {state.dentistasFavoritos.length}</h2>

      <Outlet />
    </div>
  );
};

export default Navbar;
