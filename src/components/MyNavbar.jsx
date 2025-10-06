{/*Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse*/}

import {Link, NavLink} from "react-router-dom"; {/*Import dei componenti di navigazione per routing (tramite libreria React)*/}

{/*const links = [
    {path:"/", label:"Homepage"},
    {path:"/chisiamo", label:"ChiSiamo"},
    {path:"/prodotti", label:"Prodotti"}
] PROVA DI MAPPATURA - DA CONTROLLARE, error: hook.js:608 Each child in a list should have a unique "key" prop.*/}

const MyNavbar = () => {
    return (
        <nav className="containerNav">
            <ul className="ulStyle">
                <li className="liStyle">
                    <NavLink to="/">Homepage</NavLink>    
                </li>
                <li className="liStyle">
                    <NavLink to="/chisiamo">Chi Siamo</NavLink>
                </li>
                <li className="liStyle">
                    <NavLink to="/prodotti">Prodotti</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MyNavbar

