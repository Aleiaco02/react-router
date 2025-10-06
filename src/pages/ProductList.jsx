import { useState, useEffect } from "react"
import ProductCard from "./ProductCard";
const ProductList = () => {
    const [items, setItems] = useState([]);

    function fetchItems() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setItems(res.data))
            .catch(error => console.log(error))

    }

    useEffect(() => {
        fetchItems()
    }, [])

    console.log(items);


    return (
        <>
            <div className="product-container">
                {items.map((item) => (
                    <ProductCard
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>

        </>
    )
}

export default ProductList