import { useEffect, useState } from "react";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import axios from "axios";
import Product from "./Product";



function Search(){

    let searchKeyword = "";
    let queryParams = new URLSearchParams(window.location.search)
    searchKeyword = queryParams.get('keyword')

    let [products, setProducts] = useState([])


    useEffect( () =>{

        const getProductsData = async () =>{
            //let apiResponse = await axios.get('https://dummyjson.com/products/search?q=' + searchKeyword)
            let apiResponse = await axios.get('https://dummyjson.com/products/search?q=iphone')
            setProducts( apiResponse.data.products )
            
        }

        getProductsData()

    },[])

    return(
        <div>
            <NavBar />
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-3"></div>
                    <div className="col-6">
                        {
                            products.map( (product, i) =>(
                                <Product data={product} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default Search;