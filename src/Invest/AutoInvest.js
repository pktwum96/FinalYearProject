import React from 'react';
import './styles/Invest.css';
import { connect } from 'react-redux';
import Checkout from "./Checkout.js";
import {formatter} from '../components/formatter';

class AutoInvest extends React.Component {
	render() {
		const cart =this.props.cartAuto;
		return (
			<React.Fragment>
				<h4>Invest</h4>
				<br/>
				<span className="d-flex">
					<button className="btn btn-outline-danger mr-auto" onClick={()=>this.props.openDefault()}>
						<i className="fas fa-arrow-left"></i>
						Back
					</button>
				</span>
				<div className="d-flex text-center">
					<span className="mx-auto well w-20 dataFloat">
						<strong>
							<h6>{formatter.format(this.props.initialAmount)}</h6>
							<p>Initial Investment</p>
						</strong>
					</span>
					<span className="mx-auto well w-20 dataFloat">
						<strong>
							<h6 className="text-success">{formatter.format(this.props.expectedValue)}</h6>
							<p>Expected Value</p>
						</strong>
					</span>
				</div>
				<div className="table-responsive">
					<table className="table">
						<thead>
							<tr>
								<th>Asset Type</th>
								<th>Name</th>
								<th>Symbol</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Expected Return</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((items,i)=> {
								return <tr key={i} className="well">
									<td>{items.assetType}</td>
									<td>{items.name}</td>
									<td>{items.symbol}</td>
									<td>{items.quantity}</td>
									<td>{formatter.format(items.price)}</td>
									<td>{formatter.format(items.expectedValue)}</td>
								</tr>
							})}
						</tbody>
					</table>
				</div>
				<div className="">
					<div className="row">
						<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">

							<h6>Subtotal : <strong>{formatter.format(this.props.cartSubTotalAuto)}</strong></h6>
							<h6>Service Fee : <strong>{formatter.format(this.props.serviceFeeAuto)}</strong></h6>
							<h6>Total : <strong>{formatter.format(this.props.cartTotalAuto)}</strong></h6>
							<Checkout amount={formatter.format(this.props.cartTotalAuto)}/>
						</div>
					</div>
				</div>

			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		cartAuto: state.investmentAsset.cartAuto,
		initialAmount: state.investmentAsset.initialAmount,
		expectedValue: state.investmentAsset.expectedValue,
		cartSubTotalAuto:state.investmentAsset.cartSubTotalAuto,
		serviceFeeAuto:state.investmentAsset.serviceFeeAuto,
		cartTotalAuto:state.investmentAsset.cartTotalAuto,
	}
};

const mapDispatchToProps = {

};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AutoInvest);
