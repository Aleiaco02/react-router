import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                if (!res.data.title) {
                    navigate('*');
                } else {
                    setItem(res.data);
                    setIsLoading(false);
                }
            })
            .catch(() => { navigate('/product') });
    }, [id, navigate]);

    return (
        <>
            {isLoading && (
                <div className="loader">
                    <h1>Caricamento in corso...</h1>
                </div>
            )}

            {!isLoading && (
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
                            <h2 className="fw-bold mb-3">{item.title}</h2>
                            <div className="flex-grow-1"></div>
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
            )}
        </>
    );
};

export default ProductDetail;
