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

            active:false
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
                                    <div className="d-flex justify-content-center align-content-center">
                                        <input/>
                                        <button className="d-flex btn justify-content-center align-content-center px-3 mx-3 btn-outline-success">
                                            <i className="fas fa-search"></i>
                                            <h6 className="mb-0 text-capitalize px-2">Search</h6>
                                        </button>
                                    </div>
                                    <table className="mt-3">
                                        <thead>
                                            <tr>
                                                <th>Asset Type</th>
                                                <th>Name</th>
                                                <th className="d-none d-lg">Symbol</th>
                                                <th className="d-none d-lg">Company</th>
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
                                            const {openCartModal,cart}=value;
                                            return <button className={"cartbtn btn "+ (cart.length==0 ? "btn-outline-danger":"btn-outline-success")} onClick={()=>openCartModal()}><i className="fas fa-cart-plus"></i> My Cart <span className="badge">{cart.length}</span></button>

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
