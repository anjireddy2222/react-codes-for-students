import { useEffect, useState } from "react"
import Footer from "../Shared/Footer"
import Header from "../Shared/Header"
import axios from "axios"
import Product from "./Product"
import { useSelector } from "react-redux"

function ProductsList(){

    let [products, setProducts] = useState([])

    let noOfCartItems = useSelector( state => state.cartItems )
    console.log( 'noOfCartItems', noOfCartItems)
    
    function updateCart(){
       
    }

    function removeCart(){
        
    }

    

    useEffect( () =>{

        async function getProductsList(){
            let apiResponse = await axios.get("https://dummyjson.com/products")

            let data = apiResponse.data.products.map( product =>{
                product.is_fav = false
                return product
            })

            setProducts(data)
            console.log( data )

        }

        getProductsList()

    },[])

    
    


    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-12">
                    <h4>Cart: { noOfCartItems.length } items</h4>
                </div>
                {
                    products.map( product =>(
                        <Product product={product}  updateCart={updateCart} removeCart={removeCart}/>
                    ))
                }
            </div>
            <div className="row">
                <Footer />
            </div>
            
        </div>
    )
}

export  default ProductsList


















