import React from "react"
import "./Footer.css"
import { BsCapslockFill } from "react-icons/bs"

function Footer() {
    return (
        <div>
            <footer>
                <buttom className='bt-top' >
                    <a href='#'>
                        <BsCapslockFill className='set-bt-top' />
                    </a></buttom>
                <div id="copyright">

                    <div id="contato">
                        <a className="linkedin rede" target="_blank" href="https://www.linkedin.com/in/lucasccgomes/" rel="noreferrer"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="" /></a>
                        <a className="github rede" target="_blank" href="https://github.com/lucasccgomes" rel="noreferrer"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="" /></a>
                        <a className="whatsapp rede" target="_blank" href="https://api.whatsapp.com/send?phone=5547991399367&text=Ol%C3%A1!%20Vi%20seu%20trabalho%20e%20gostaria%20de%20saber%20mais.%20" rel="noreferrer"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="" /></a>
                    </div>

                    <p className="copyright">© 2022 por Lucas O. Gomes. All Rights Reserved</p>

                </div>

            </footer>
        </div>
    )
}

export default Footer