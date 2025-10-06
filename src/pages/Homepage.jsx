{/*Homepage (con un messaggio di benvenuto o immagine promozionale)*/}
{/*Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse*/}

import MyNavbar from "../components/MyNavbar"

const HomePage = () => {
    return (
        <>
            <header>
                <MyNavbar/>
            </header>
            <main>
                <h1>BENVENUTI</h1>
                <ul>
                    <li>ciao</li>
                    <li>ciao</li>
                    <li>ciao</li>
                </ul>
            </main>
        </>
    )
}

export default HomePage