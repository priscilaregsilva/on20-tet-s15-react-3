import photoconect from '../assets/photo/contact.svg'

export function Contact() {
    return (
        <div className="contact">
            <h1>Contato</h1>

            <img className='imagecontact' src={photoconect} />

            <div className='contact_form'>
                <form>
                    Nome: 
                    <br />
                    <input type="text" placeholder="Digite seu nome" />
                    <br />
                    <br />

                    E-mail:
                    <br /> 
                    <input type="text" placeholder="Digite seu e-mail" />
                    <br />
                    <br />


                    Mensagem: 
                    <br />
                    <textarea placeholder="Digite sua mensagem"></textarea>

                    <br />
                    <br />
                    <button type="submite">Enviar Mensagem</button>
                </form>
            </div>
        </div>
    )
}