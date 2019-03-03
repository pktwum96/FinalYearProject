import React from 'react';
import {investmentAssets} from './investmentassets.js';


const ProductContext = React.createContext();


class ProductProvider extends React.Component {
    state= {
        investmentAssets:[],
        cart:[]
    }

    componentDidMount() {
        this.setInvestmentAssets();
    }

    setInvestmentAssets=()=> {
        let tempProducts =[];
        investmentAssets.forEach(item => {
            const singleItem={...item};
            tempProducts=[...tempProducts,singleItem];
        })

        this.setState(()=> {
            return {investmentAssets:tempProducts};
        })
    }

    getItem=id =>{
        const investmentAssets=this.state.investmentAssets.find(item=>item.id===id);
        return investmentAssets;
    }

    handleDetail =() => {
        console.log('hello from detail');
    }

    addToCart=id=> {
        let tempProducts=[...this.state.investmentAssets];
        const index= tempProducts.indexOf(this.getItem(id));
        const investmentAssets=tempProducts[index];
        investmentAssets.inCart=true;
        investmentAssets.count=1;
        const price = investmentAssets.price;
        investmentAssets.total=price;
        console.log('added biytch');

        this.setState(()=> {
            return {
                investmentAssets:tempProducts,
                cart:[...this.state.cart,investmentAssets]
            };
        })
     }

    render () {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
