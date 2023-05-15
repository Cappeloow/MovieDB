import React from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import { BrowserRouter } from 'react-router-dom';
export default function App () {
return (
<>
<Header />
<Main/>
<Footer />
</>
)
}