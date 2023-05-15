import React from "react";
import './main.css'
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import About from "../About/About";
import MovieDetails from "../MovieDetails/MovieDetails";
import MovieList from "../MovieList/MovieList";
import Contact from "../Contact/Contact";
import { Routes, Route } from "react-router-dom";
export default function Main () {
    
    return ( 
    <main>
    <Routes>
    <Route path='/' element={<MovieList />}/>
    <Route path=':id' element={<MovieDetails />}/>
    <Route path='about' element={<About />}/>
    <Route path='contact' element={<Contact />}/>
    </Routes>
    </main>
    )
}