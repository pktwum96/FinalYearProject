import React from 'react';
import './styles/Invest.css';
import { connect } from 'react-redux';
import { toggleSideBar } from '../_shared/actions/index';

class AutoInvest extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h6>Auto</h6>
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
)(AutoInvest);
