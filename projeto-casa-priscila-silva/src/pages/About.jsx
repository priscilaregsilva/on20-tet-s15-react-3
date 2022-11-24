import photoabout from '../assets/photo/sobre.svg'

export function About() {
    return(
        <div className="about">
            <h1>Sobre</h1>
            
            <img className="about_form" src={photoabout} />
            <p>
                Meu nome é Priscila Silva, estou em fase de transição de carreira, sou aluna da Reprograma
                do curso Front-End. Estou me capacitando dia a dia e adorando essa nova jornada que tenho muito a aprender todos os dias.
                São desafios todos os dias, em cada projeto semanal, nas aulas, conteúdo, porém o importante é sempre buscar conhecimento e
                não ter medo.
                <br />
                Essa página foi desenvolvida utilizando React, uma biblioteca Javascript para 
                criar interfaces de usuário, também foi utilizado HTML e CSS.
                <br /><br />
                Esse projeto é sobre uma página contendo "Sobre" e "Portifolio" meu, que consuma a API do GitHUb.
            </p>
        </div>
    )
}