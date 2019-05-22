import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class AutoInvestModal extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			value:1,
			amount:0
		}
		this.handleChange=this.handleChange.bind(this);
		this.handleAmount=this.handleAmount.bind(this);
	}

	handleChange(e){
		this.setState({
			value:e.target.value
		})
	}

	handleAmount (e){
		this.setState({
			amount:e.target.value
		})
	}
	autoInvestfunct(riskProfile,years,investAmount){

	}

	render() {
		const isEnabled =  this.state.amount > 200;

		let items =[
			{value:1 , label:"Very Short Term (6 months to 1 year)"},
			{value:2 , label:"Short Term (1 year to 2 years)"},
			{value:3 , label:"Medium (3 years to 4 year)"},
			{value:4 , label:"Long Term (5+ years)"}
		]

		return (
			<div id="AutoInvestModal" className="modal fade my-auto" tabIndex="1" role="dialog">
				<div className="modal-dialog modal-xl newUser" role="document">
					<div className="modal-content text-center">
						<div className="p-4">
							<h2>Portfolio Generator</h2>
							<br/>

							<div className="form-group">
								<label for="setYear"><h4>How long would you like to invest?</h4></label>
								<select class="form-control my-2" id="setYear" onChange={this.handleChange} value={this.state.value}>
								{items.map(item=> {
									return (
										<option key={item.value} value={item.value}>
											{item.label}
										</option>
									)
								})}
								</select>
								<label for="amount" className="py-2">
									<h4>How much would you like to invest (minimum 200 cedis)?</h4>
								</label>
								<input type="number" className="form-control" id="amount" onChange={this.handleAmount} value={this.state.amount}/>
							</div>

							<div className="d-flex py-3">
								<button disabled={!isEnabled} type="button" data-dismiss="modal" className="btn btn-success mx-auto" onClick={()=>this.props.openAuto()}>Generate</button>
							</div>
						</div>
					</div>
				</div>
			</div>
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
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AutoInvestModal);
