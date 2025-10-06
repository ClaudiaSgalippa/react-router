{/*Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse*/}

import {Link, NavLink} from "react-router-dom"; {/*Import dei componenti di navigazione per routing (tramite libreria React)*/}

const MyNavbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>         
                </li>
                <li>
                    <NavLink to="/chisiamo">ChiSiamo</NavLink>
                </li>
                <li>
                    <NavLink to="/prodotti">Prodotti</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MyNavbar

