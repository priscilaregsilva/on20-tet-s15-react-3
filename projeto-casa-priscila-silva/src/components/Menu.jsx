import { Link } from "react-router-dom";

export function Menu() {
    return(
        <ul className="menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">Sobre</Link>
            </li>
            <li>
                <Link to="/portfolio">Portifolio</Link>
            </li>

            <li>
                <Link to="/contato">Contato</Link>
            </li>
        </ul>
    )
}