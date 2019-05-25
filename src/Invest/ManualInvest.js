import React from 'react';
import InvestmentList from '../_shared/container/InvestmentList.js';
import './styles/Invest.css';
import ModalCart from './ModalCart.js';
import { connect } from 'react-redux';
import { toggleSideBar } from '../_shared/actions/index';

class ManualInvest extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="invest-asset-list" id="ManualInvest">
					<div className="ml-auto col-md-5 my-3 input-group ">
						<input type="text" className="form-control" />
						<div className="input-group-append">
							<button className="d-flex btn justify-content-center align-content-center btn-outline-secondary">
								<i className="fas fa-search align-self-center" />
								<span className="mb-0 text-capitalize px-2">
									Search
								</span>
							</button>
						</div>
					</div>
					<table className="my-3">
						<thead>
							<tr>
								<th>Asset Type</th>
								<th>Name</th>
								<th className="d-none d-lg-table-cell">
									Symbol
								</th>
								<th>Value</th>
								<th>Buy</th>
							</tr>
						</thead>
						<InvestmentList />
					</table>
					<button type="button" className={'cartbtn btn ' +(this.props.cart.length === 0 ? 'btn-danger' : 'btn-outline-success')} data-toggle="modal" data-target="#cartModal">
						<i className="fas fa-cart-plus px-2" />
						My Cart
						<span className="badge">{this.props.cart.length}</span>
					</button>
					<ModalCart />
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		sidebarMode: state.sidebar.sidebarMode,
		cart: state.investmentAsset.cart
	};
};

const mapDispatchToProps = {
	toggleSideBar
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ManualInvest);
