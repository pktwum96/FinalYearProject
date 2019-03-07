import React from 'react';
import {investmentAsset} from './investmentasset.js';
import {videos} from "./learnvideo.js";


const ProductContext = React.createContext();


class ProductProvider extends React.Component {
    state= {
        investmentAsset:[],
        cart:[],
        modalCartOpen:false,
        cartSubTotal:0,
        cartTotal:0,
        serviceFee:0,
        video:videos,
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


    addToCart=id=> {
        let tempProducts=[...this.state.investmentAsset];
        const index= tempProducts.indexOf(this.getItem(id));
        const investmentAsset=tempProducts[index];
        investmentAsset.inCart=true;
        investmentAsset.count=1;
        const price = investmentAsset.price;
        investmentAsset.total=price;

        this.setState(()=> {
            return {
                investmentAsset:tempProducts,
                cart:[...this.state.cart,investmentAsset]
            };
        },
        ()=> {
            this.addTotals();
        }
    );
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
        console.log('This is an increment ' + id);
    }

    decrement =id => {
        console.log('This is an decrement ' + id);
    }

    removeItem =id => {
        console.log('This is an remove');
    }


    clearCart = () => {
        this.setState(()=> {
            return {cart:[]};
        },
    ()=> {
        this.setInvestmentAssets();
        this.addTotals();
    },
()=> {
    console.log(this.state.cartTotal);
    console.log(this.state.cartSubTotal);
    console.log(this.state.serviceFee);
})
    }

    addTotals = () => {
        let subTotal=0;
        this.state.cart.map(item => (subTotal+=item.total));
        const tempSFee=subTotal*0.02;
        const Fee=parseFloat(tempSFee.toFixed(2));
        const temptotal=subTotal+Fee;
        const total=parseFloat(temptotal.toFixed(2));
        this.setState(()=>  {
            return {
            cartSubTotal:subTotal,
            serviceFee:Fee,
            cartTotal:total,
        }
    })
    }
    render () {
        return (
            <ProductContext.Provider value={{
                    ...this.state,
                    handleDetail:this.handleDetail,
                    addToCart:this.addToCart,
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
