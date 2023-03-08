import "./Navbar.css"
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai"
import React, { Component } from "react"

import Mocinha from "../../assets/Navbar/mocinha.png"

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.navbarRef = React.createRef()
        this.mobileRef = React.createRef()
        this.state = {
            clicked: false,
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside)
    }

    handleClickOutside = (event) => {
        if (
            this.navbarRef.current &&
      !this.navbarRef.current.contains(event.target) &&
      this.mobileRef.current &&
      !this.mobileRef.current.contains(event.target)
        ) {
            this.setState({ clicked: false })
        }
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div className="nav-bg">
                <nav>
                    <a href="#">
                        <img
                            className="logo-icon"
                            src={Mocinha}
                            alt="Adicionar Logo Aqui"
                        />
                    </a>
                    <div>
                        <ul
                            id="navbar"
                            ref={this.navbarRef}
                            className={this.state.clicked ? "active" : ""}
                        >
                            <li>
                                <a href="#pedido" onClick={this.handleClick}>
                                    <button className="primary-btn btn">Fazer Pedido</button>
                                </a>
                            </li>
                            <li>
                                <a className="active" href="#" onClick={this.handleClick}>
                  HOME
                                </a>
                            </li>
                            <li>
                                <a href="#catalogo" onClick={this.handleClick}>CATALOGO</a>
                            </li>
                            <li>
                                <a href="#about" onClick={this.handleClick}>SOBRE</a>
                            </li>
                        </ul>
                    </div>
                    <div id="mobile" ref={this.mobileRef} onClick={this.handleClick}>
                        <i id="bar">
                            {this.state.clicked ? (
                                <AiOutlineClose style={{ color: "red", fontSize: "1.5em" }} />
                            ) : (
                                <AiOutlineBars
                                    style={{ fontSize: "1.5em", color: "#552610" }}
                                />
                            )}
                        </i>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
