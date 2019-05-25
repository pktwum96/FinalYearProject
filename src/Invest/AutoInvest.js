import React from 'react';
import './styles/Invest.css';
import { connect } from 'react-redux';

class AutoInvest extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h6>Auto</h6>
				<table>
					<thead>
						<tr>
						<td>Name</td>
						<td>Quantity</td>
						<td>Price</td>
						<td>Expected Return</td>
						</tr>
					</thead>
					<tbody>
						{this.props.cartAuto.map((items,i)=> {
							return <tr key={i}>
								<td>hi</td>
							</tr>
						})}
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		cartAuto: state.investmentAsset.cart
	};
};

const mapDispatchToProps = {

};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AutoInvest);
