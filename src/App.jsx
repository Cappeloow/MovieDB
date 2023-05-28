import React from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import { BrowserRouter } from 'react-router-dom';
import {MyMoviesProvider} from "./context/MyMoviesContext";
export default function App () {
return (
<>
<MyMoviesProvider>
<Header />
<Main/>
<Footer />
</MyMoviesProvider>
</>
)
}