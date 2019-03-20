import React from 'react';
import {investmentAsset} from './investmentasset.js';
import {videos} from "./learnvideo.js";


const ProductContext = React.createContext();


class ProductProvider extends React.Component {
    state= {
        investmentAsset:[],
        cart:[],
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
                cart:[...this.state.cart,investmentAsset],
            };
        },()=> {
            this.addTotals();
        })
    }

    increment =id => {
        let tempCart=[...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id ===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count =product.count+1;
        product.total=product.count * product.price;
        product.total=parseFloat((product.total).toFixed(2));
        this.setState(()=> {
            return {cart:[...tempCart]};
        },()=>{
            this.addTotals();
        })
    }

    decrement =id => {
        let tempCart=[...this.state.cart];
        const selectedProduct = tempCart.find(item=>item.id ===id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count=product.count-1;
        if( product.count===0){
            this.removeItem(id)}

            else {
                product.total=product.count * product.price;
                product.total=parseFloat((product.total).toFixed(2));
                this.setState(()=> {
                    return {cart:[...tempCart]};
                },()=>{
                    this.addTotals();
                })
            }
        }

        removeItem =id => {
            let tempProducts=[...this.state.investmentAsset];
            let tempCart = [...this.state.cart];
            tempCart=tempCart.filter(item=>item.id!==id);
            const index = tempProducts.indexOf(this.getItem(id));
            let removedProduct= tempProducts[index];
            console.log(id);
            console.log(tempProducts);
            console.log(tempCart);
            console.log(index);
            removedProduct.inCart=false;
            removedProduct.count=0;
            removedProduct.total=0;
            this.addTotals();

            this.setState(()=> {
                return {
                    cart:[...tempCart],
                    investmentAsset:[...tempProducts],
                }
            })
        }


        clearCart = () => {
            this.setState(()=> {
                return {cart:[]};
            },(()=> {
                this.setInvestmentAssets();
                this.addTotals();
            }),
        )
    }

    addTotals = () => {
        let subTotal=0;
        this.state.cart.map(item => (subTotal+=item.total));
        subTotal=parseFloat(subTotal.toFixed(2))
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
