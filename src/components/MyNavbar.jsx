import {Link, NavLink} from "react-router-dom"; {/*Import dei componenti di navigazione per routing (tramite libreria React)*/}

const MyNavbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                    <NavLink to="/chisiamo">ChiSiamo</NavLink>
                    <NavLink tp="/prodotti">Prodotti</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MyNavbar

