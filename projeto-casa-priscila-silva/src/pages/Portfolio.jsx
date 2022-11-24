import { Repositories } from "../components/Repositories";
import photoportfolio from "../assets/photo/portfolio.jpeg"

export function Portfolio() {
    return(
        <div className="portfolio">
            <h1>Portifolio</h1>

            <img className="portfolio_form" src={photoportfolio} />
            <Repositories />
        </div>
    )
}