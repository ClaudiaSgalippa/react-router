import {Link} from "react-router-dom"; {/*Import dei componenti di navigazione per routing (tramite libreria React)*/}

//export default function MyProductCard(props) {...}
const MyProductCard = (props) => { {/*Passaggio dati*/}
    const {product} = props;

    return (
        <Link to={`/prodotti/${product.id}`}> {/*Link tra il prodotto e la pagina*/}
            <div className="productCard">
                <div className="productImg">
                    <img src={product.image} alt={product.title}/>
                </div>
                <div className="productInfo">
                    <p className="productTitle">{product.title}</p>
                    <p className="productPrice">{product.price}€</p>
                </div>
            </div>
        </Link>    
    )
}

export default MyProductCard