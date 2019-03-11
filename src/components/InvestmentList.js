import React from 'react'
import PropTypes from 'prop-types';

class InvestmentList extends React.Component{
    render () {
        const {id,name,price,symbol,company,assetType, inCart}=this.props.investmentAsset;

        return (
            <tbody className="well">
                <tr>
                    <td className="text-uppercase">{assetType}</td>
                    <td>{name}</td>
                    <td className="d-none d-lg-table-cell">{symbol}</td>
                    <td className="d-none d-lg-table-cell">{company}</td>
                    <td>₵ {price}</td>
                    <td>{inCart ?  <button className="btn btn-outline-secondary" disabled={true}>In Cart</button> : <button className="btn btn-outline-success" disabled={inCart} onClick={()=> this.props.addToCart(id)}><i className="fas fa-cart-plus"/></button>}</td>
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
