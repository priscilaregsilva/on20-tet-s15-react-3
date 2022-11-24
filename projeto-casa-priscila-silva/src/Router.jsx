import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";


export function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <header>
                <Menu />
            </header>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contato" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}