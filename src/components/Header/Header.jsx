import React from "react"
import NavLinks from "./NavLinks/NavLinks";
import MyMovies from "./MyMovies/MyMovies"
export default function Header(){
    return (
        <div>
          <h1>MovieDB</h1>
          <NavLinks />
          <MyMovies/>
        </div>
      );
}