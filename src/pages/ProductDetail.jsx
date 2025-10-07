import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState({});

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setItem(res.data))
            .catch(() => { navigate('/product') })
    }, [id])

    return (
        <div className="container my-5 py-5">
            {/* Bottone Indietro */}
            <div className="my-5">
                <Link to="/product" className="btn btn-outline-secondary">
                    Indietro
                </Link>
            </div>

            <div className="row">
                {/* Colonna immagine */}
                <div className="col-md-5">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid rounded shadow-sm"
                    />
                </div>

                {/* Colonna testo */}
                <div className="col-md-7 d-flex flex-column">
                    {/* Titolo */}
                    <h2 className="fw-bold mb-3">{item.title}</h2>

                    <div className="flex-grow-1"></div>

                    {/* Categoria e prezzo*/}
                    <div className="d-flex justify-content-between align-items-end">
                        <span className="badge bg-primary fs-6">{item.category}</span>
                        <span className="fs-4 fw-semibold text-success">€ {item.price}</span>
                    </div>
                </div>

            </div>


            {/* Descrizione */}
            <div className="row my-5">
                <div className="col my-5">
                    <h4 className="fw-semibold">Descrizione</h4>
                    <p className="text-muted my-3">{item.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail