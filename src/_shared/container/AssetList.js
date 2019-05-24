import React from 'react';
import { connect } from 'react-redux';

class InvestmentList extends React.Component {
	constructor(props){
		super(props);
		var expandArray= [];

		for(var i = 0; i< this.props.userData.portfolios.assets.length;i++) {
			expandArray.push(false);
		}
		this.state={
			expand:expandArray
		}
	}

	expandDiv=(index)=>{
		let tempExpand= [...this.state.expand];
		tempExpand[index]=!tempExpand[index]

		this.setState({
			expand:tempExpand
		})
	}


	createListItem() {
		const asset=this.props.userData.portfolios.assets;

		return asset.map((asset,index) => {
			return (
					<tr key={index} className={this.state.expand[index] ? "well portfolio-asset expanded" : "well portfolio-asset"} onClick={()=>this.expandDiv(index)}>
						<td>{asset.type}</td>
						<td>{asset.name}</td>
						<td className="d-none d-lg-table-cell">{asset.symbol}</td>
						<td className="d-none d-lg-table-cell">₵{asset.price}</td>
						<td>{asset.change}%</td>
						<td className="d-none d-lg-table-cell">{asset.quantity}</td>
						<td>{asset.value}</td>
					</tr>
			);
		});
	}

	render() {
		return <React.Fragment>{this.createListItem()}</React.Fragment>;
	}
}

function mapStateToProps(state) {
	return {
		userData: state.user.userData
	};
}


const mapDispatchToProps = {
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InvestmentList);
