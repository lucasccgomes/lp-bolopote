import React from "react"
import "./About.css"
import "../../App.css"
import FotoConfeiteira from "../../assets/About/logo_cartoon_art_illustration.jpg"
import { BsAwardFill, BsCheck2All } from "react-icons/bs"
import { RiMoneyDollarCircleFill } from "react-icons/ri"
import { GiSecretBook } from "react-icons/gi"

const About = () => {
    return (
        <section id='about'>
            <h1>SOBRE</h1>
            <div className='traco'/>
            <div className='container about-container'>
                <div className='about-me'>
                    <div className='about-me-image'>
                        <img src={FotoConfeiteira} alt='foto de um bolo' />
                    </div>
                </div>
                <div className='cout-content'>
                    <div className='about-cards'>
                        <article className='about-card'>
                            <BsCheck2All className='about-icon' />
                            <h5>Ingredientes</h5>
                            <small>Utilizamos os ingredientes de melhor qualidade.</small>
                        </article>

                        <article className='about-card'>
                            <RiMoneyDollarCircleFill className='about-icon' />
                            <h5>Preço justo</h5>
                            <small>Todos merecem saborear nosso Bolo no Pote sem pagar muito.</small>
                        </article>

                        <article className='about-card'>
                            <GiSecretBook className='about-icon' />
                            <h5>O Segredo</h5>
                            <small>Segredo está na paixão e dedicação da nossa confeiteira.</small>
                        </article>

                        <article className='about-card'>
                            <BsAwardFill className='about-icon' />
                            <h5>Sabor</h5>
                            <small>Delicioso, úmido, cremoso e irresistível em camadas perfeitas.</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About