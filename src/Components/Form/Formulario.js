import React, { useState , useEffect } from "react"
import "./formulario.css"
import "../../App.css"

function validateForm(form) {
    if (!form.name
        || !form.mobilenumber
        || !form.district
        || !form.typecake
        || !form.size
        || !form.pay
        || !form.ctFidelidade 
        ||   (parseInt(form.brigadeiroAmount) === 0 && 
        parseInt(form.abacaxiAmount) === 0 && 
        parseInt(form.morangoAmount) === 0 && 
        parseInt(form.ninhoAmount) === 0 && 
        parseInt(form.prestigioAmount) === 0)) {
        alert("Escolha pelo menos um sabor.")
        return false
    }
    
    return true
}


function getForm() {
    const form = {
        name: document.getElementById("name").value,
        mobilenumber: document.getElementById("mobilenumber").value,
        district: document.getElementById("district").value,
        observacao: document.getElementById("observacao").value,
        typecake: document.getElementById("typecake").value,
        size: document.getElementById("size").value,
        pay: document.getElementById("pay").value,
        adress: document.getElementById("adress").value,
        adressnumber: document.getElementById("adressnumber").value,
        ctFidelidade: document.querySelector("input[name='ctFidelidade']:checked").value,
        delivery: document.querySelector("input[name='delivery']:checked").value,
        brigadeiroAmount: document.getElementById("brigadeiroAmount").value,
        abacaxiAmount: document.getElementById("abacaxiAmount").value,
        morangoAmount: document.getElementById("morangoAmount").value,
        ninhoAmount: document.getElementById("ninhoAmount").value,
        prestigioAmount: document.getElementById("prestigioAmount").value,
    }
    return form
}

function sendWhatsApp(form, showDeliveryFields) {
    let prestigio = ""
    if (form.prestigioAmount && form.prestigioAmount >= 1) {
        prestigio = `*Prestigio:* ${form.prestigioAmount}\n`
    }
    let morango = ""
    if (form.morangoAmount && form.morangoAmount >= 1) {
        morango = `*Morango:* ${form.morangoAmount}\n`
    }
    let brigadeiro = ""
    if (form.brigadeiroAmount && form.brigadeiroAmount >= 1) {
        brigadeiro = `*Brigadeiro:* ${form.brigadeiroAmount}\n`
    }
    let ninho = ""
    if (form.ninhoAmount && form.ninhoAmount >= 1) {
        ninho = `*Ninho:* ${form.ninhoAmount}\n`
    }
    let abacaxi = ""
    if (form.abacaxiAmount && form.abacaxiAmount >= 1) {
        abacaxi = `*Abacaxi:* ${form.abacaxiAmount}\n`
    }
    const delivery = form.delivery ? `*${form.delivery}*` : ""
    const ctFidelidade = form.ctFidelidade ? `*Cartão Fidelidade:* ${form.ctFidelidade}` : ""
    const observacao = form.observacao ? `*Observacao:* ${form.observacao}` : ""

    let valorTotal = 0
    if (form.morangoAmount && form.morangoAmount >= 1) {
        valorTotal += form.morangoAmount * 8
    }
    if (form.abacaxiAmount && form.abacaxiAmount >= 1) {
        valorTotal += form.abacaxiAmount * 8
    }
    if (form.prestigioAmount && form.prestigioAmount >= 1) {
        valorTotal += form.prestigioAmount * 8
    }
    if (form.brigadeiroAmount && form.brigadeiroAmount >= 1) {
        valorTotal += form.brigadeiroAmount * 8
    }
    if (form.ninhoAmount && form.ninhoAmount >= 1) {
        valorTotal += form.ninhoAmount * 8
    }

    let whatsappMessage = 
`
*Esperamos que você tenha um ótimo dia!*
*Seu pedido está sendo processado. Até logo!*

*Nome:* ${form.name}
*Telefone:* ${form.mobilenumber}
*Bairro:* ${form.district}
*Pagamento:* ${form.pay}
*Tipo do Bolo:* ${form.typecake}
*Tamanho:* ${form.size}`
    if (showDeliveryFields) { whatsappMessage += 
`*Rua:* ${form.adress} - *N:* ${form.adressnumber}`
    }
    let sabores = ""
    if (morango !== "") {
        sabores += morango
    }
    if (abacaxi !== "") {
        sabores += abacaxi
    }
    if (brigadeiro !== "") {
        sabores += brigadeiro
    }
    if (ninho !== "") {
        sabores += ninho
    }
    if (prestigio !== "") {
        sabores += prestigio
    }
  
    whatsappMessage += 
    `
${sabores}
${delivery}
${ctFidelidade}
${observacao}
*Valor Total:* R$${valorTotal.toFixed(2)}
`
  
    const whatsappUrl = `https://wa.me/5547992420026?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank").focus()
}
  
function Formulario() {

    const [morangoAmount, setMorangoAmount] = useState(0)
    const [abacaxiAmount, setAbacaxiAmount] = useState(0)
    const [brigadeiroAmount, setBrigadeiroAmount] = useState(0)
    const [ninhoAmount, setNinhoAmount] = useState(0)
    const [prestigioAmount, setPrestigioAmount] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        const total = (morangoAmount * 1 + abacaxiAmount * 1 + brigadeiroAmount * 1 + ninhoAmount * 1 + prestigioAmount * 1) * 8
        setTotalAmount(total)
    }, [morangoAmount, abacaxiAmount, brigadeiroAmount, ninhoAmount, prestigioAmount])

    const handleMorangoAmountChange = (event) => {
        const newAmount = Number(event.target.value)
        setMorangoAmount(newAmount)
        
    }
    
    const handleAbacaxiAmountChange = (event) => {
        const newAmount = Number(event.target.value)
        setAbacaxiAmount(newAmount)
        
    }
    
    const handleBrigadeiroAmountChange = (event) => {
        const newAmount = Number(event.target.value)
        setBrigadeiroAmount(newAmount)
      
    }
    
    const handleNinhoAmountChange = (event) => {
        const newAmount = Number(event.target.value)
        setNinhoAmount(newAmount)
    
    }
    
    const handlePrestigioAmountChange = (event) => {
        const newAmount = Number(event.target.value)
        setPrestigioAmount(newAmount)
       
    }
    
 
    

    const [showDeliveryFields, setShowDeliveryFields] = useState(false)
    function handleDeliveryChange(event) {
        if (event.target.value === "entregar") {
            setShowDeliveryFields(true)
        } else {
            setShowDeliveryFields(false)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = getForm()
        if (validateForm(form)) {
            sendWhatsApp(form, showDeliveryFields)
        } else {
            alert("Todos os campos são obrigatórios exceto descrição.")
        }
    }
    
    

    const handlePhoneChange = (event) => {
        const { value } = event.target
        const formattedValue = value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
        event.target.value = formattedValue
    }

    return (
        <div id="pedido" className="container-form">
            <h1>FAZER PEDIDO</h1>
            <div className='traco' />
            <form onSubmit={handleSubmit}>
                <div className='form-pt-1'>
                    <div className='containerInput'>
                        <input type="text" id="name" placeholder="Seu nome" />
                    </div>
                    <div className='containerInput'>
                        <input type="text" id="mobilenumber" placeholder="(99) 9999-9999" onChange={handlePhoneChange} inputMode="numeric" maxLength="15" />
                    </div>
                    <div className='selectContainer'>
                        <select type="text" id="district" placeholder='Bairro' >
                            <option value="" disabled>Bairro</option>
                            <option value="Paranaguamirim" selected>Paranaguamirim</option>
                        </select>
                    </div>
                    <div className='selectContainer'>
                        <select type="text" id="pay" placeholder="Forma de Pagamento" >
                            <option value="" disabled selected> Forma de Pagamento </option>
                            <option value="Pix">Pix</option>
                            <option value="Dinheiro">Dinheiro</option>
                            <option value="Cartao">Cartão</option>
                        </select>
                    </div>
                    <div className='selectContainer'>
                        <select type="text" id="typecake" placeholder="Tipo do Bolo" >
                            <option value="" disabled >Tipo do Bolo</option>
                            <option value="Bolo no Pote" selected >Bolo no Pote</option>
                        </select>
                    </div>
                    <div className='selectContainer'>
                        <select type="text" id="size" placeholder="Tamanho" >
                            <option value="" disabled> Tamanho</option>
                            <option value="Tradicional 250ml" selected>Tradicional 250ml</option>
                        </select>
                    </div>
                </div>
                <div className="qtd-flavor">
                    <div className="align-flavor">
                        <label>Morango:</label>
                        <div className='quantidade'>
                            <input
                                type="text"
                                id="morangoAmount"
                                name="morangoAmount"
                                value={morangoAmount}
                                onChange={handleMorangoAmountChange}
                                required
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength="3"
                            />
                        </div>
                    </div>
                    <div className="align-flavor">
                        <label>Abacaxi:</label>
                        <div className='quantidade'>
                            <input
                                type="text"
                                id="abacaxiAmount"
                                name="abacaxiAmount"
                                value={abacaxiAmount}
                                onChange={handleAbacaxiAmountChange}
                                required
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength="3"
                            />
                        </div>
                    </div>
                    <div className="align-flavor">
                        <label>Brigadeiro:</label>
                        <div className='quantidade'>
                            <input
                                type="text"
                                id="brigadeiroAmount"
                                name="brigadeiroAmount"
                                value={brigadeiroAmount}
                                onChange={handleBrigadeiroAmountChange}
                                required
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength="3"
                            />
                        </div>
                    </div>
                    <div className="align-flavor">
                        <label>Ninho:</label>
                        <div className='quantidade'>
                            <input
                                type="text"
                                id="ninhoAmount"
                                name="ninhoAmount"
                                value={ninhoAmount}
                                onChange={handleNinhoAmountChange}
                                required
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength="3"
                            />
                        </div>
                    </div>
                    <div className="align-flavor">
                        <label>Prestigio:</label>
                        <div className='quantidade'>
                            <input
                                type="text"
                                id="prestigioAmount"
                                name="prestigioAmount"
                                value={prestigioAmount}
                                onChange={handlePrestigioAmountChange}
                                required
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength="3"
                            />
                        </div>
                    </div>
                </div>
                <div className='form-pt-2'>
                    
                    <div className="align-check">
                        <div id="delivery">
                            <p>Oque você prefere ?</p>
                            <div className="delivery">
                                <div className="form-check-delivery">
                                    <input
                                        type="radio"
                                        name="delivery"
                                        id="entregar"
                                        value="entregar"
                                        onChange={handleDeliveryChange}
                                        disabled
                                    />
                                    <label htmlFor="entregar">Entrega</label>
                                </div>
                                <div className="form-check-delivery">
                                    <input
                                        type="radio"
                                        name="delivery"
                                        id="retirar"
                                        value="Retirar"
                                        onChange={handleDeliveryChange}
                                        defaultChecked
                                    />
                                    <label htmlFor="retirar">Retirada</label>
                                </div>
                            </div>
                        </div>
                        <div className="delivery-fields" style={{ display: showDeliveryFields ? "flex" : "none" }}>
                            <div className='containerInput-adress containerInput'>
                                <input type="text" id="adress" placeholder="Endereço" />
                            </div>
                            <div className='containerInput-adressnumber containerInput'>
                                <input type="text" id="adressnumber" placeholder="Numero" />
                            </div>
                        </div>
                        <div className="form-group">
                            <p>Quer receber cartao fidelidade ?</p>
                            <div className="opt_ct_fidelidade">
                                <div className="form-check">
                                    <input type="radio" name="ctFidelidade" id="sim" value="Sim" />
                                    <label htmlFor="sim">Sim</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" name="ctFidelidade" id="nao" value="Não" />
                                    <label htmlFor="nao">Não</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" name="ctFidelidade" id="jatenho" value="Já Tenho" />
                                    <label htmlFor="jatenho">Já Tenho</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='containerObs'>
                        <textarea id="observacao" cols="28" rows="5" placeholder='Observacao' />
                    </div>
                    <div className="totalmoney">
                        <h1>Total a Pagar</h1>
                        <p id="pagar">R${(totalAmount)},00</p>
                    </div>
                    <button
                        className='bt-pedido'
                        type="submit"
                        value="Enviar Pedido">
                        ENVIAR PEDIDO
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Formulario