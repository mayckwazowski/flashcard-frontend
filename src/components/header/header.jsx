import React from "react";
import { Navbar } from "react-materialize";
import { NavLink } from "react-router-dom";

const Header = () => (
    <Navbar>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/courses">Cursos</NavLink></li>
    </Navbar>
)

export default Header