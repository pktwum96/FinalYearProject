import React from 'react';
import { connect } from 'react-redux';
import { allocateAssets } from '../_shared/actions/index';

class AutoInvestModal extends React.Component {
	constructor(props){
		super(props);
		this.state= {
			value:1,
			amount:""
		}
		this.handleChange=this.handleChange.bind(this);
		this.handleAmount=this.handleAmount.bind(this);
		this.autoInvestfunct=this.autoInvestfunct.bind(this);
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
	autoInvestfunct(){
		const riskProfile=this.props.userData.riskProfile;
		const amount=this.state.amount;
		const debtAmount= this.state.amount;
		const stockAmount=this.state.amount;
		const years=this.state.value;

		switch(riskProfile){
			case "Defensive":
				this.props.allocateAssets(riskProfile,amount,parseFloat((debtAmount*0.8).toFixed(2)),parseFloat((stockAmount*0.2).toFixed(2)),years)
				break;

			case "Semi-Defensive":
				this.props.allocateAssets(riskProfile,amount,parseFloat((debtAmount*0.65).toFixed(2)),parseFloat((stockAmount*0.35).toFixed(2)),years)
				break;

			case "Moderate":
				this.props.allocateAssets(riskProfile,amount,parseFloat((debtAmount*0.5).toFixed(2)),parseFloat((stockAmount*0.5).toFixed(2)),years)
				break;

			case "Semi-Enterprising":
				this.props.allocateAssets(riskProfile,amount,parseFloat((debtAmount*0.35).toFixed(2)),parseFloat((stockAmount*0.65).toFixed(2)),years)
				break;

			case "Enterprising":
				this.props.allocateAssets(riskProfile,amount,parseFloat((debtAmount*0.2).toFixed(2)),parseFloat((stockAmount*0.8).toFixed(2)),years)
				break;
			default:
				this.props.allocateAssets(riskProfile,amount,parseFloat((debtAmount*0.5).toFixed(2)),parseFloat((stockAmount*0.5).toFixed(2)),years)
		}
	}

	render() {
		const isEnabled =  this.state.amount > 500;

		let items =[
			{value:1 , label:"Very Short Term (6 months to 1 year)"},
			{value:2 , label:"Short Term (1 year to 2 years)"},
			{value:3 , label:"Medium (3 years to 4 year)"},
			{value:5 , label:"Long Term (5+ years)"}
		]

		return (
			<div id="AutoInvestModal" className="modal fade my-auto" tabIndex="1" role="dialog">
				<div className="modal-dialog modal-xl newUser" role="document">
					<div className="modal-content text-center">
						<div className="p-4 w-50 mx-auto">
							<h2>Portfolio Generator</h2>
							<br/>

							<div className="form-group">
								<label htmlFor="setYear"><h5>How long would you like to invest?</h5></label>
								<select className="form-control my-2" id="setYear" onChange={this.handleChange} value={this.state.value}>
								{items.map(item=> {
									return (
										<option key={item.value} value={item.value}>
											{item.label}
										</option>
									)
								})}
								</select>
								<label htmlFor="amount" className="py-2">
									<h5>How much would you like to invest (minimum 500 cedis)?</h5>
								</label>
								<input type="number" className={!isEnabled? "form-control text-danger border border-danger":"form-control text-success"} id="amount" onChange={this.handleAmount} value={this.state.amount}/>
							</div>

							<div className="d-flex py-3">
								<button disabled={!isEnabled} type="button" data-dismiss="modal" className="btn btn-success mx-auto" onClick={()=>{this.autoInvestfunct();this.props.openAuto()}}>Generate</button>
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
		userData: state.user.userData,
	};
};

const mapDispatchToProps = {
	allocateAssets,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AutoInvestModal);
