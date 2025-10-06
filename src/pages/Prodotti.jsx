{/*Prodotti (pagina che mostrerà la lista dei prodotti prendendoli da https://fakestoreapi.com/products)*/}
{/*Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse*/}

import MyNavbar from "../components/MyNavbar"; {/*Import della Navbar*/}

const Prodotti = () => {
    return (
        <>
            <div><MyNavbar/></div>
            <div>Prodotti</div>
        </>
    )
}

export default Prodotti