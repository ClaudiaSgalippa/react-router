import {useState, useEffect} from "react"; {/*Import degli hook useState e useEffect*/}
import {useParams} from "react-router-dom"; {/*Import dell'hook useParams*/}

export default function DettaglioProdotto () { {/*Funzione per l'estrapolazione dei dettagli del singolo prodotto*/}
    const {id} = useParams(); {/*Recupero del parametro "dinamico" aka estrapolazione dell'id tramite useParams*/}
    const [product, setProduct] = useState ()
    
    useEffect (() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then (res => console.log(res.data))
        .catch (error => console.log(error))

    }, [])

    return (
        <>
            
        </>
    )
}