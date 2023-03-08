import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import "./Company.css"

const phrases = [
    "Descubra o prazer de saborear nossos bolos no pote.",
    "Experimente agora e renda-se ao sabor!"
]

const variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
        }
    }
}

export default function Company() {

    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        }, 3500)

        return () => clearInterval(intervalId)
    }, [phrases.length])

    return (
        <div className='company-container' >
            <div className='company-parent'>
                <div className='company-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='#'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>

                    
                    <div className='company-details-role '>
                        <span className='primary-text animation-container'>
                            {" "}
                            <AnimatePresence presence><motion.h1
                                key={phrases[currentPhraseIndex]}
                                className="presentation-slogan"
                                variants={variants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {phrases[currentPhraseIndex]}
                            </motion.h1></AnimatePresence>
                        </span>
                        <span className='company-role-tagline'>
                            Escrever algo aqui
                        </span>
                    </div>

                    <div className='company-optins'>
                        <a href='#pedido'>
                            <button className='btn primary-btn'>
                                {" "}
                                Fazer Pedido{" "}
                            </button>
                        </a>
                        <a href='#'>
                            <button className='btn highlighted-btn'>WhatsApp</button>
                        </a>
                    </div>
                </div>
                <div className='company-picture'>
                    <div className='company-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}