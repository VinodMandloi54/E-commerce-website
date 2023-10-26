import React ,{useState}from "react";
import{Link,useParams,useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import DATA from "../Data";
import { addToCart } from "../store/cartslice";

const ProductDetails = () => {
    const [state, setState] = useState(false);
    const prodid = useParams();
    const proDetail = DATA.filter(x => x.id == prodid.id);
    const product = proDetail[0];
    //console.log(product.img);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {

        dispatch(addToCart({
            productId: product.id,
            productTitle: product.title,
            productPrice: product.price,
            productImg: product.img
        })); // Dispatch the addToCart action
    }

    const handleGoToCart = () => {
        if (state) {
            setState(true);
        } else {
            setState(false);
        }

        navigate("/cart");
    };

    const handleCart = (product) => {
        handleAddToCart(product);
        handleGoToCart();
    }

    return (
        <div className="product-details-container" style={{ backgroundColor: "#f5f5f5", padding: "60px", minHeight: "100vh" }}>
            <div className="container my-5 py-3">
                <div className="row" style={{ height: "120px" }}>
                    <div className="col-12 text-center">
                        <h1 className="fw-bold" style={{ color: "#00008b" }}> {product.title} </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={`${product.img}`} className="product-image" alt={product.title} height="300px" />
                    </div>
                    <div className="col-md-6" style={{ textAlign: "justify" }}>
                        <div>
                            <h3 className="fw-bold"><b> Model : {product.title} </b></h3>
                            <h5 className="fw-bold" style={{ color: "#808080" }}><b> MADE BY : {product.comp} </b></h5>
                            <h5 className="fw-bold" style={{ color: "#483d8b" }}><b> Price : ${product.price} </b></h5>
                            <p className="fw-bold" style={{ margin: "0", padding: "0" }}><b> Some Info About Product </b></p>
                            <p className="fw-bold" style={{ color: "#696969", lineHeight: "1.5" }}><b> {product.desc} </b></p>
                        </div>
                        <div className="d-flex mt-2">

                            <Link to={'/'} className="btn btn-outline-primary" style={{ marginRight: "10px" }}>Back To Products</Link>

                            <button onClick={() => handleCart(product)} className="btn btn-outline-warning">Add and Go To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails;
