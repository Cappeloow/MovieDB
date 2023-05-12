import React from "react";
import './main.css'
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
// import { Switch, Route } from 'react-router-dom';
export default function Main () {
    
    return ( 
    <main>
    <FilterDropdown/>
    <MarkAsSeenBtn/>
    </main>
    )
}