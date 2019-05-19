import React from 'react';
import {connect} from 'react-redux';


class InvestmentList extends React.Component{
    createListItem() {
        return this.props.investmentAssets.map((asset) => {
            return (
                <tbody key={asset.id} className="well">
                    <tr>
                        <td className="text-uppercase">{asset.assetType}</td>
                        <td>{asset.name}</td>
                        <td className="d-none d-lg-table-cell">{asset.symbol}</td>
                        <td className="d-none d-lg-table-cell">{asset.company}</td>
                        <td>₵ {asset.price}</td>
                        <td>{asset.inCart ?  <button className="btn btn-outline-secondary" disabled={true}>Added</button> : <button className="btn btn-outline-success" disabled={asset.inCart} onClick={()=> this.props.addToCart(asset.id)}><i className="fas fa-cart-plus"/></button>}</td>
                    </tr>
                </tbody>
            )
        })
    }

    render () {

        return (
            <React.Fragment>
                {this.createListItem()}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        investmentAssets:state.investmentAssets
    };
}



export default connect(mapStateToProps)(InvestmentList);
