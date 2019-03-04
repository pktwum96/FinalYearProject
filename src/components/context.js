import React from 'react';
import {investmentAsset} from './investmentasset.js';


const ProductContext = React.createContext();


class ProductProvider extends React.Component {
    state= {
        investmentAsset:[],
        cart:[],
        modalOpen:false,
        modalCartOpen:false,
        modalProduct:investmentAsset[0],
        cartSubTotal:0,
        cartTotal:0,
        serviceFee:0,
    }

    componentDidMount() {
        this.setInvestmentAssets();
    }

    setInvestmentAssets=()=> {
        let tempProducts =[];
        investmentAsset.forEach(item => {
            const singleItem={...item};
            tempProducts=[...tempProducts,singleItem];
        })

        this.setState(()=> {
            return {investmentAsset:tempProducts};
        })
    }

    getItem=id =>{
        const investmentAsset=this.state.investmentAsset.find(item=>item.id===id);
        return investmentAsset;
    }

    handleDetail =() => {
        console.log('hello from detail');
    }

    addToCart=id=> {
        let tempProducts=[...this.state.investmentAsset];
        const index= tempProducts.indexOf(this.getItem(id));
        const investmentAsset=tempProducts[index];
        investmentAsset.inCart=true;
        investmentAsset.count=1;
        const price = investmentAsset.price;
        investmentAsset.total=price;
        console.log('added biytch');

        this.setState(()=> {
            return {
                investmentAsset:tempProducts,
                cart:[...this.state.cart,investmentAsset]
            };
        })
    }

    openModal=id=> {
        const product =this.getItem(id);
        this.setState(()=> {
            return {modalProduct:product,modalOpen:true};
        })
    }

    closeModal =() => {
        this.setState(()=> {
            return {modalOpen:false}
        })
    }

    openCartModal=id=> {
        this.setState(()=> {
            return {modalCartOpen:true};
        })
    }

    closeCartModal =() => {
        this.setState(()=> {
            return {modalCartOpen:false}
        })
    }

    increment =id => {
        console.log('This is an increment');
    }

    decrement =id => {
        console.log('This is an decrement');
    }

    removeItem =id => {
        console.log('This is an remove');
    }


    clearCart = () => {
        console.log('This is an clearCart');
    }

    render () {
        return (
            <ProductContext.Provider value={{
                    ...this.state,
                    handleDetail:this.handleDetail,
                    addToCart:this.addToCart,
                    openModal:this.openModal,
                    closeModal:this.closeModal,
                    openCartModal:this.openCartModal,
                    closeCartModal:this.closeCartModal,
                    removeItem:this.removeItem,
                    clearCart:this.clearCart,
                    increment:this.increment,
                    decrement:this.decrement,
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
