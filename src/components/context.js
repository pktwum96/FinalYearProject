import React from 'react';
import {investmentAssets} from './investmentassets.js';


const ProductContext = React.createContext();


class ProductProvider extends React.Component {
    state= {
        investmentAssets:investmentAssets,
    }

    handleDetail =() => {
        console.log('hello from detail');
    }

    addToCart =() => {
         console.log('hello from add to cart');
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
