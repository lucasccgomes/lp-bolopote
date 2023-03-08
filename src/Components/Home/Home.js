import React from "react"
import Company from "./Company/Company"
import Footer from "./Footer/Footer"
import "./Home.css"

export default function Home() {
    return(
        <div className="home-container">
            <Company/>
            <Footer/>
        </div>
    )
}