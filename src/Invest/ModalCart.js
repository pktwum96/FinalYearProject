import React from 'react';
import './styles/Modal.css';
import { connect } from 'react-redux';
import { increment,decrement,removeItem, clearCart,addTotal} from '../_shared/actions/index';
import Checkout from "./Checkout.js"


class ModalCart extends React.Component {


	render() {

		const cart=this.props.cart;
		return (
			<div id="cartModal" className="modal fade" tabIndex="-1" role="dialog">
				<div className="modal-dialog modal-xl mt-5" role="document">
					<div className="modal-content">
						<button type="button" className="close ml-auto mr-2" data-dismiss="modal">
							<span>&times;</span>
						</button>
						<div className="container">
							<div className="row">
								<div className="mx-auto col-md-12 text-center text-capitalize ">
									<div>
										{(!cart.length>0) ? <h1>Your Cart is Currently Empty</h1> :
											<div className="cartlist">
												<h1>Cart</h1>
												<div className="d-none d-lg-block text-center">
													<div className="row my-2 text-center">
														<div className="col-10 mx-auto col-lg-2">
															<p className="text-uppercase">Assets</p>
														</div>
														<div className="col-10 mx-auto col-lg-2">
															<p className="text-uppercase">Symbol</p>
														</div>
														<div className="col-10 mx-auto col-lg-2">
															<p className="text-uppercase">Price</p>
														</div>
														<div className="col-10 mx-auto col-lg-2">
															<p className="text-uppercase">Quantity</p>
														</div>
														<div className="col-10 mx-auto col-lg-2">
															<p className="text-uppercase">Remove</p>
														</div>
														<div className="col-10 mx-auto col-lg-2">
															<p className="text-uppercase">Total</p>
														</div>
													</div>
												</div>
												<div>
													{cart.map(item=>{
														return <React.Fragment key={item.id}>
															<div className="row my-1 text-capitalize p-2 style">
																<div className="col-10 mx-auto col-lg-2 align-self-center">
																	{item.name}
																</div>
																<div className="col-10 mx-auto col-lg-2 align-self-center">
																	{item.symbol}
																</div>
																<div className="col-10 mx-auto col-lg-2 align-self-center">
																	<span className="d-lg-none">Price: </span>₵ {item.price}
																	</div>
																	<div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
																		<div className="d-flex justify-content-center">
																			<div>
																				<span className="btn mx-1 btn-black" onClick={()=>{(item.count>1 ? this.props.decrement(item.id) : this.props.removeItem(item.id));this.props.addTotal()}}>-</span>
																				<span className="btn mx-1 btn-black">{item.count}</span>
																				<span className="btn mx-1 btn-black" onClick={()=>{this.props.increment(item.id);this.props.addTotal()}}>+</span>
																			</div>
																		</div>
																	</div>
																	<div className="col-10 mx-auto col-lg-2 align-self-center">
																		<div className="cart-icon" onClick={()=>{this.props.removeItem(item.id);this.props.addTotal()}}>
																			<i className="fas fa-trash"></i>
																		</div>
																	</div>
																	<div className="col-10 mx-auto col-lg-2 align-self-center">
																		<strong><span className="d-lg-none">Item total: </span>₵ {item.total}</strong>
																	</div>
																</div>
															</React.Fragment>
														})}
													</div>
													<div className="">
														<div className="row">
															<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">
																<button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>this.props.clearCart()}>
																	Clear Cart
																</button>
																<h5>Subtotal : <strong>₵ {this.props.cartSubTotal}</strong></h5>
																<h5>Service Fee : <strong>₵ {this.props.serviceFee}</strong></h5>
																<h5>Total : <strong>₵ {this.props.cartTotal}</strong></h5>
																<Checkout amount={this.props.cartTotal}/>
															</div>
														</div>
													</div>
												</div>}
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				);
			}
		}

		const mapStateToProps =(state) => {
			return {
				cart: state.investmentAsset.cart,
				serviceFee:state.investmentAsset.serviceFee,
				cartSubTotal:state.investmentAsset.cartSubTotal,
				cartTotal:state.investmentAsset.cartTotal
			}
		}

		const mapDispatchToProps = {
			increment,
			decrement,
			removeItem,
			clearCart,
			addTotal,
		}

		export default connect(mapStateToProps,mapDispatchToProps)(ModalCart);
