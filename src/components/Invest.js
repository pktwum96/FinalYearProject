import React from 'react';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';
import {ProductConsumer} from './context.js';
import InvestmentList from './InvestmentList.js';
import Profile from './Profile.js';
import  '../styles/Invest.css';


class Invest extends React.Component {

    constructor (){
        super();
        this.state = {

            active:true
        }
        this.changeClass = e => {
            e.preventDefault();
            this.setState({active: !this.state.active})
        }
    }

    render() {
        return (
            <div id="wrapper" className={this.state.active ? "d-flex toggled active" : "d-flex"}>
                <Sidebar/>
                <div id="page-content-wrapper">
                    <Navbar changeClass={this.changeClass}/>
                    <div className="container-fluid ">
                        <div className="row" >
                            <div className="col-md-9 px-0"id="InvestPage">
                                <div className="invest-asset-list well">
                                    <div className="ml-auto col-md-5 my-3 input-group ">
                                        <input type="text" className="form-control"/>
                                        <div className="input-group-append">
                                        <button className="d-flex btn justify-content-center align-content-center btn-outline-secondary">
                                            <i className="fas fa-search align-self-center"></i>
                                            <span className="mb-0 text-capitalize px-2">Search</span>
                                        </button>
                                    </div>
                                    </div>
                                    <table className="mt-3">
                                        <thead>
                                            <tr>
                                                <th>Asset Type</th>
                                                <th>Name</th>
                                                <th className="d-none d-lg-table-cell">Symbol</th>
                                                <th className="d-none d-lg-table-cell">Company</th>
                                                <th>Value</th>
                                                <th>Buy</th>
                                            </tr>
                                        </thead>
                                        <ProductConsumer>
                                            {(value)=>{
                                                return value.investmentAsset.map(investmentAsset => {
                                                    return <InvestmentList key={investmentAsset.id} investmentAsset={investmentAsset}  addToCart={value.addToCart}/>
                                                })
                                            }}
                                        </ProductConsumer>
                                    </table>
                                    <ProductConsumer>
                                        {(value)=>{
                                            const {cart}=value;
                                            return <button type="button" className={"cartbtn btn "+ (cart.length===0 ? "btn-danger":"btn-outline-success")} data-toggle="modal" data-target="#cartModal">
                                                        <i className="fas fa-cart-plus pr-2"></i>
                                                        My Cart
                                                        <span className="badge">{cart.length}</span>
                                                    </button>

                                        }}
                                    </ProductConsumer>
                                </div>
                            </div>
                            <div className="col-md-3 px-0">
                                <Profile/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Invest;
