import React from "react"
import Home from "./Components/Home/Home"
import "./App.css"
import Formulario from "./Components/Form/Formulario"
import Navbar from "../src/Components/Navbar/Navbar"
import Catalago from "./Components/Catalogo/Catalogo"
import About from "./Components/About/About"
import Footer from "./Components/Footer/Footer"


function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Catalago />
            <About />
            <Formulario />
            <Footer/>
        </div>
    )
}

export default App

