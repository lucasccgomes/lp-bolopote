import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import "./Catalogo.css"
import "../../App.css"

export default function Catalogo() {
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <div id="catalogo" className="catalogo-center">
            <h1>CATALOGO</h1>
            <div className="traco" />

            <div className="catalogo">
                <motion.div
                    ref={carousel}
                    className="carousel"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        className="inner"
                        drag="x"
                        dragElastic={0.2}
                        dragConstraints={{ left: -width, right: 0 }}
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div className="item-img">
                            <div className="img-ca img-pineapple">
                                <div className="discr-card">
                                    <h1>ABACAXI</h1>
                                    <p>O bolo no pote sabor abacaxi é uma sobremesa que traz a doçura suave e refrescante da fruta tropical em uma combinação perfeita com a massa de bolo macia e úmida.</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="item-img">
                            <div className="img-ca img-strawberry">
                                <div className="discr-card">
                                    <h1>MORANGO</h1>
                                    <p>O bolo no pote sabor morango é uma sobremesa que agrada tanto aos olhos quanto ao paladar. Com uma cor vibrante e um aroma delicioso esta sobremesa combina a doçura dos morangos com a textura macia e úmida do bolo.</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="item-img">
                            <div className="img-ca img-prestige">
                                <div className="discr-card">
                                    <h1>PRESTIGIO</h1>
                                    <p>O bolo no pote sabor prestigio é uma sobremesa irresistivel que combina o sabor marcante do chocolate com a doçura suave do coco, agrada a todos os paladares opção perfeita para quem ama o sabor do chocolate e do coco.</p>
                                </div>
                                   
                            </div>
                        </motion.div>
                        <motion.div className="item-img">
                            <div className="img-ca img-brigadier">
                                <div className="discr-card">
                                    <h1>BRIGADEIRO</h1>
                                    <p>O bolo no pote sabor brigadeiro é uma deliciosa sobremesa que encanta muitos paladares. Com sua textura macia e úmida, este bolo é uma verdadeira explosão de sabor em cada colherada.</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="item-img">
                            <div className="img-ca img-child">
                                <div className="discr-card">
                                    <h1>NINHO</h1>
                                    <p>O bolo no pote sabor ninho é uma sobremesa que traz uma combinação deliciosa de sabores. O sabor suave e adocicado do leite em pó é protagonista dessa deelicia, que ainda conta com uma massa de bolo macia e molhadinha.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
