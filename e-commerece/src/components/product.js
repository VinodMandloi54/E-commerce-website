
import "bootstrap/dist/css/bootstrap.min.css";
import DATA from "../Data";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductModal from "./modal";
import { addToCart } from "../store/cartslice";
import { useDispatch } from "react-redux";


const Product = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dispatch = useDispatch();

    const openModal = (item) => {
        setSelectedProduct(item);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setModalIsOpen(false);
    };
    const handleAddToCart = (item) => {

        dispatch(addToCart({
            productId: item.id,
            productTitle: item.title,
            productPrice: item.price,
            productImg: item.img
        })); // Dispatch the addToCart action
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1> Our Products </h1>
                    </div>
                </div>
                <div className="row">
                    {DATA.map((product) => (
                        <div className="sc-htpNat ilRgoK col-9 mx-auto col-md-6 col-lg-3 my-3">
                            <div className="card" key={product.id}>
                                <div className="img-container p-5">
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.img} className="card-img-top" alt={product.title} height={"220px"} width={"300px"} />
                                    </Link>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className="align-self-center mb-0"><b>{product.title}</b></p>
                                    <h5 className="font-italic mb-0" style={{ color: "#483d8b" }}><span className="mr-1">$</span>{product.price}</h5>
                                </div>
                                <div className="card-body">
                                    <button type="button" className="btn btn-primary"
                                        onClick={() => {
                                            openModal(product);
                                            handleAddToCart(product);
                                        }}
                                        data-toggle="modal"
                                        data-target="#staticBackdrop"
                                    > Add To Cart </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {modalIsOpen && selectedProduct && (
                <ProductModal product={selectedProduct} closeModal={closeModal} isOpen={modalIsOpen} />
            )}

        </div>
    );

}

export default Product;

