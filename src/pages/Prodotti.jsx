{/*Prodotti (pagina che mostrerà la lista dei prodotti prendendoli da https://fakestoreapi.com/products)*/}
{/*Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse*/}

import MyNavbar from "../components/MyNavbar"; {/*Import della Navbar*/}
import MyProducts from "../components/MyProducts"; {/*Import dei prodotti*/}

const Prodotti = () => {
    return (
        <>
            <div className="displayNav"><MyNavbar/></div>
            <h2 className="divPages">PRODOTTI DISPONIBILI NOW!</h2>
            <MyProducts/>
        </>
    )
}

export default Prodotti