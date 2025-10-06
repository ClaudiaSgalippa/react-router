const MyProductCard = (props) => { {/*Passaggio dati*/}
    const {product} = props;

    return (
        <div className="productCard">
            <div className="productImg">
                <img src={product.image} alt={product.title}/>
            </div>
            <div className="productInfo">
                <p className="productTitle">{product.title}</p>
                <p className="productPrice">{product.price}€</p>
            </div>
        </div>
    )
}

export default MyProductCard