import contactSvg from '../assets/photo/contato.svg'

export function Home() {
    return (
        <div className="home">
            <div>
                <h1>"Welcome to my Page !!"</h1>

                <img src={contactSvg} />

                <h2>"Vamos nos Conectar"</h2>

                <div className="conectar">
                    <ul>
                        <li>
                            <a href="https://github.com/priscilaregsilva" target="_blank" >GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/priscila-reginasilva" target="_blank ">Linkedin</a>
                        </li>
                        <li>
                            <a href="https://app.netlify.com/teams/prisci885" target="_blank">Netlify</a>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}