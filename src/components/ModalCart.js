import React from 'react';
import {ProductConsumer} from './context.js';
import {Link} from 'react-router-dom';
import '../styles/Modal.css';


class ModalCart extends React.Component {
    render () {
        return (
            <ProductConsumer>
                {(value)=> {
                    const {modalCartOpen,closeCartModal} =value;
                    const {name,symbol,total,price,id}=value.modalProduct;
                    const {cart}=value;

                    if(!modalCartOpen) {
                        return null;
                    }
                    else {
                        return(
                            <div id="ModalCart">
                                <div className="container">
                                    <div className="row">
                                        <div className="mx-auto col-md-9 text-center text-capitalize ">
                                            <div className="modalclass p-5">
                                                <span className="fas fa-times" onClick={()=> {value.closeCartModal()}}></span>
                                                {(!cart.length>0) ? <h1>Your Cart is Currently Empty</h1> :
                                                    <div>
                                                        <h1>Cart</h1>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default ModalCart;
