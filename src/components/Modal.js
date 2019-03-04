import React from 'react';
import {ProductConsumer} from './context.js';
import {Link} from 'react-router-dom';
import '../styles/Modal.css';


class ModalAddToCart extends React.Component {
    render () {
        return (
            <ProductConsumer>
                {(value)=> {
                    const {modalOpen,closeModal,addToCart,modalCartOpen} =value;
                    const {name,symbol,total,price,id}=value.modalProduct;

                    if(!modalOpen) {
                        return null;
                    }
                    else {
                        return(
                            <div id="ModalCart">
                                <div className="container">
                                    <div className="row">
                                        <div className="mx-auto col-md-6 text-center text-capitalize ">
                                            <div className="modalclass p-5">
                                                <span className="fas fa-times" onClick={()=> {value.closeModal()}}></span>
                                                <h5>Add item to Cart</h5>
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>{name}</td>
                                                            <td>{symbol}</td>
                                                            <td>{price}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <button onClick={()=> {value.closeModal()}}>Close</button>
                                                <button onClick={()=> {value.addToCart(id); value.closeModal()}}>Add to Cart</button>
                                                <button onClick={()=> {value.openCartModal(); value.closeModal()}}>Go to Cart</button>
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

export default ModalAddToCart;
