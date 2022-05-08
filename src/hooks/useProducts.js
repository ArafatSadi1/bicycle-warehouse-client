import { useEffect, useState } from "react";

const useProducts = () =>{
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const url = 'https://whispering-crag-62697.herokuapp.com/products';    
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
return [products, setProducts]
}
export default useProducts;