import React from 'react';
import { connect } from 'react-redux';
import { addToCart,addTotal } from '../actions/index';

class InvestmentList extends React.Component {
	createListItem() {
		return this.props.investmentAssets.map((asset,item) => {
			return (
				<tbody key={item} className="well">
					<tr className="align-middle">
						<td className="text-uppercase">{asset.assetType}</td>
						<td>{asset.name}</td>
						<td className="">{asset.symbol}</td>
						<td className="text-right">₵ {parseFloat(Math.round(asset.price * 100) / 100).toFixed(2)}</td>
						<td>
							{asset.inCart ? (
								<button className="btn btn-outline-secondary" disabled={true}>
									Added
								</button>
							) : (
								<button
									className="btn btn-outline-success mx-4"
									disabled={asset.inCart}
									onClick={(event) => {this.props.addToCart(asset.id);this.props.addTotal()}}
								>
									<i className="fas fa-cart-plus" />
								</button>
							)}
						</td>
					</tr>
				</tbody>
			);
		});
	}

	render() {
		return <React.Fragment>{this.createListItem()}</React.Fragment>;
	}
}

function mapStateToProps(state) {
	return {
		investmentAssets: state.investmentAsset.investmentAssets
	};
}


const mapDispatchToProps = {
	addToCart,
	addTotal,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InvestmentList);
