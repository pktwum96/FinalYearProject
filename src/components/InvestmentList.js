import React from 'react'
import PropTypes from 'prop-types';

class InvestmentList extends React.Component{
    render () {
        const {id,name,price,symbol,company,assetType, inCart}=this.props.investmentAsset;

        return (
            <tbody className="well">
                <tr>
                    <td>{assetType}</td>
                    <td>{name}</td>
                    <td>{symbol}</td>
                    <td>{company}</td>
                    <td>₵ {price}</td>
                    <td>{inCart ?  "In Cart" : <button className="cart-btn" disabled={inCart} onClick={()=> this.props.openModal(id)}><i className="fas fa-cart-plus"/></button>}</td>
                </tr>
            </tbody>
        )
    }
}


InvestmentList.propTypes = {
    investmentAsset:PropTypes.shape({
        id: PropTypes.number,
        name:PropTypes.string,
        price:PropTypes.number,
        symbol:PropTypes.string,
        company:PropTypes.string,
        assetType:PropTypes.string,
        inCart:PropTypes.boolean,
    }).isRequired
};


export default InvestmentList;
