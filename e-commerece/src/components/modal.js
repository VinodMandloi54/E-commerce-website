
import React from "react";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ProductModal = ({ product, closeModal }) => {
    const [state, setState] = useState(false);
    useEffect(() => {
        const modalElement = document.getElementById('staticBackdrop');
        modalElement.addEventListener('click', (e) => {
            // Prevent modal from closing when clicking inside the modal content
            if (e.target.id === 'staticBackdrop') {
                e.stopPropagation();
            }
        });
    }, []);


    const handleGoToCart = () => {
        if (state) {
            setState(true);
        } else {
            setState(false);
        }


        //history.push('/cart');
        //jquery("#staticBackdrop").modal('hide');
        // closeModal(); // Close the modal before navigating
        //document.body.classList.remove("modal-open"); // Remove modal-open class
    };

    return (

        <div show={state} className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <h5 className="modal-title mb-3" id="staticBackdropLabel">Item Added To The Cart</h5>
                        <img src={product.img} className="img-fluid mb-3" alt={product.title} style={{ height: '400px', width: '320px' }} />
                        <h5 className="mb-3">{product.title}</h5>
                        <h5 className="text-muted">Price : $ {product.price}</h5>
                        <div className="mb-3">
                            <button type="button" className="btn btn-outline-primary" data-dismiss="modal" onClick={closeModal}>Continue Shopping</button>
                        </div>
                        <div>
                            <NavLink to={"/cart"} type="button" className="btn btn-outline-warning" data-dismiss="modal" onclick={handleGoToCart}>Go To Cart</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal;