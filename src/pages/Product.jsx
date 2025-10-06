import { useState, useEffect } from "react"
const Product = () => {
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
                    <div key={item.id} className="card product-card">
                        <div className="row g-0 align-items-center">
                            <div className="col-md-4 d-flex justify-content-center">
                                <img src={item.image} className="img-fluid rounded-center" alt={item.title} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h6 className="card-title">{item.title}</h6>
                                    <p className="card-text description">{item.description}</p>
                                    <p className="card-text">
                                        <small className="text-muted">{item.price} €</small>
                                    </p>
                                    <button className="btn btn-sm btn-primary">Aggiungi al carrello</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Product