import React from 'react';
import './styles/Invest.css';
import { connect } from 'react-redux';

class AutoInvest extends React.Component {
	render() {
		const cart =this.props.cartAuto;
		return (
			<React.Fragment>
				<h4>Invest</h4>
				<br/>
				<div className="d-flex text-center">
					<span className="mx-auto well w-20 dataFloat">
						<h6>{parseFloat((Math.round((this.props.initialAmount)* 100) / 100).toFixed(2))}</h6>
						<p>Initial Investment</p>
					</span>
					<span className="mx-auto well w-20 dataFloat">
						<h6 className="text-success">{parseFloat((Math.round((this.props.expectedValue)* 100) / 100).toFixed(2))}</h6>
						<p>Expected Value</p>
					</span>
				</div>
				<div className="table-responsive-md">
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
									<td>{parseFloat((Math.round((items.price)* 100) / 100).toFixed(2))}</td>
									<td>{parseFloat((Math.round((items.expectedValue)* 100) / 100).toFixed(2))}</td>
								</tr>
							})}
						</tbody>
					</table>
				</div>
				<div className="">
					<div className="row">
						<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">

							<h5>Subtotal : <strong>₵ {this.props.cartSubTotalAuto}</strong></h5>
							<h5>Service Fee : <strong>₵ {this.props.serviceFeeAuto}</strong></h5>
							<h5>Total : <strong>₵ {this.props.cartTotalAuto}</strong></h5>
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
