import React from "react"
import NavLinks from "./NavLinks/NavLinks";
import MyMovies from "./MyMovies/MyMovies"
import './header.css';
export default function Header(){
    return (
        <header>
          <h1>MovieDB</h1>
          <NavLinks />
          <MyMovies/>
        </header>
      );
}