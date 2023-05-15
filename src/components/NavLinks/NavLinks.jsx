import React from "react";
import "./NavLinks.css";
export default function NavLinks () {
    return (
        <nav className="headerLinks">
        <ul>
            <li><a href="/">Movies</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="about">About</a></li>
        </ul>
    </nav>
    )
}