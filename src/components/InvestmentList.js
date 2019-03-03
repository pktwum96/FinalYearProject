import React from 'react'

class InvestmentList extends React.Component{
    render () {
        const {id,name,price,symbol,company,assetType, inCart}=this.props.investmentAssets;

        return (
            <tbody className="well">
                <tr>
                    <td>{assetType}</td>
                    <td>{name}</td>
                    <td>{symbol}</td>
                    <td>{company}</td>
                    <td>₵ {price}</td>
                    <td>{inCart ?  "In Cart" : <button className="cart-btn" disabled={inCart} onClick={()=>{console.log("added to cart")}}><i className="fas fa-cart-plus"/></button>}</td>
                </tr>
            </tbody>
        )
    }
}

export default InvestmentList;
