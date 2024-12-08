
import React, { useEffect, useState } from 'react';
import NavBar from '../shared/NavBar';
import Footer from '../shared/Footer';
import axios from 'axios';
import { getLoggedInUserId } from '../Utils/utils';
import { toast, ToastContainer } from 'react-toastify';


function Cart(){

    const [cartData, setCartData] = useState([])

    useEffect( () =>{

        const getCartData = async () =>{
            try{
                let userId = 6; //getLoggedInUserId()
                let apiResponse = await axios.get('https://dummyjson.com/carts/user/' + userId)
                setCartData([...apiResponse.data.carts])
            }catch(ex){
                toast.error(ex.message)
            }
            

        }

        getCartData()

    },[])

    const updateProductdata = async(apidata) =>{
        try{
            let apiResponse = await axios.put('https://dummyjson.com/carts/1', apidata)
        }catch(ex){
            toast.error(ex.message)
        }
    }

    const increaseQuantity = async (product, j, cart, i)  =>{

        let newQuantity = product.quantity + 1
        let tmpCartData = [...cartData]

        tmpCartData[i]['products'][j]['quantity'] = newQuantity
        setCartData([...tmpCartData])

        let apidata = {
            merge: true,
            products:[
                {
                    id: product.id,
                    quantity: newQuantity
                }
            ]
        }

        updateProductdata(apidata)

    }

    const decreaseQuantity = async (product, j, cart, i)  =>{

        let newQuantity = product.quantity - 1
        if(newQuantity > 0){
            let tmpCartData = [...cartData]

            tmpCartData[i]['products'][j]['quantity'] = newQuantity
            setCartData([...tmpCartData])
        }
        let apidata = {
            merge: true,
            products:[
                {
                    id: product.id,
                    quantity: newQuantity
                }
            ]
        }

        updateProductdata(apidata)
    }

    const calculateQunatityAndPrice = (products) =>{
        let totalQuantity = 0;
        let totalPrice = 0;

        products.forEach( (product) =>{
            let tmpTotalPrice = product.quantity * product.price
            totalPrice = totalPrice + tmpTotalPrice
            totalQuantity = totalQuantity + product.quantity
        })

        console.log( totalQuantity, totalPrice )

        return "(" + totalQuantity + "):" + totalPrice

    }

    const deleteProduct = async (product)=>{

    }
    
    return(
        <div>
            <NavBar />
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                        {
                            cartData.map( (cart, i) =>(
                                <div className='card mb-3 shadow' key={i}>
                                    <div className='card-body'>
                                        {
                                            cart.products.map( (product,j) =>(
                                                <div className='card border-0 mb-3 border-bottom  pb-3' key={j}>
                                                    <div className='row'>
                                                        <div className='col-2'>
                                                            <img src={product.thumbnail}  className='img-fluid'/>
                                                        </div>
                                                        <div className='col-8'>
                                                            <div className='card-body'>
                                                                <h5>{product.title}</h5>
                                                                <div>
                                                                    <buttton className="btn btn-light" onClick={e => decreaseQuantity(product, j, cart, i)} ><strong>-</strong></buttton>
                                                                    <span> { product.quantity } </span>
                                                                    <buttton className="btn btn-light" onClick={ e => increaseQuantity(product, j, cart, i) } ><strong>+</strong></buttton>
                                                                    <a href='#' className='card-link' onClick={ e => deleteProduct(product)}>Delete</a>
                                                                    <a href='#' className='card-link'>Save for later</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-2 text-end'>
                                                            <span class="badge text-bg-danger">Limited time deal</span>
                                                            <strong><i className="bi bi-currency-rupee"></i>{product.price}</strong>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div className='text-end'>
                                            <strong>
                                                Subtotal { calculateQunatityAndPrice(cart.products) }
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='col-4'>

                    </div>
                </div>
            </div>
            <ToastContainer />
            <Footer />
        </div>
    )
}
export default Cart

