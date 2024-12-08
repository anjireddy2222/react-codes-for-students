import { useDispatch, useSelector } from 'react-redux'
import { addItem, addProducts, deleteProduct, removeItem, updateProduct } from '../store/cart'
import axios from 'axios'
import TestProducts from './TestProducts'

function Product(  ){

    let dispatch = useDispatch()

    function addTocart(){
        dispatch( addItem(product) )
    }

    function removeCartItem(){
        dispatch( removeItem('') )
    }

    async function getProducts(){
        let response = await axios.get('https://dummyjson.com/products')
        console.log(  response.data.products )
        dispatch( addProducts(response.data.products) )
        dispatch( updateProduct() )
        dispatch( deleteProduct({id: 20}) )
    }

    return(
        <div className="col-3">
            <button className='btn btn-primary' onClick={ e => getProducts() } >Get Products</button>
            { <div className="card shadow">
                <img src={product.thumbnail} className="card-img" />
                <div className="card-body">
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>

                    <div>
                        <i className="bi bi-currency-rupee"></i> {product.price}
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn-primary btn" onClick={ e => addTocart() } >Add to cart</button> 
                    <button className="btn btn-danger" onClick={ e => removeCartItem() }>Remove</button>
                </div>
             </div> }
             <TestProducts></TestProducts>
        </div>
    )
}

export default Product

