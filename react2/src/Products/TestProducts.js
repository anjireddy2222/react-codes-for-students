import { useSelector } from "react-redux"
import Product from "./Product"

function TestProducts(){

    let products = useSelector( state => state.cartItems )
    console.log( 'products', products)

    return(
        <>
        {
            products.map( product => (
                 <div className="card shadow" key={product.id} >
                    <img src={product.thumbnail} className="card-img" />
                    <div className="card-body">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>

                        <div>
                            <i className="bi bi-currency-rupee"></i> {product.price}
                        </div>
                    </div>
                </div> 
            ))
        }
        </>
    )
}

export default TestProducts
