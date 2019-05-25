import solver from '../../components/LinearProgramming/solver.js';
import {stockInfo} from '../../api/stockInfo.js';
import {investmentProducts} from '../../api/investmentProducts'

const product =investmentProducts;

const initialState = {
    initialAutoAmount:0,
    cartSubTotalAuto:0,
    serviceFeeAuto:0,
    cartTotalAuto:0,
    cartAuto:[],
    investmentAssets: product,
    cart: [],
    cartSubTotal:0,
    serviceFee:0,
    cartTotal:0,
}

export default function(state = initialState, action) {
    switch (action.type) {

        case "ADDTOCART":
            const id=action.payload;
            const Asset=state.investmentAssets.find(item=>item.id===id);
            let tempProducts=[...state.investmentAssets];
            const index= tempProducts.indexOf(Asset);
            const investmentAssets=tempProducts[index];
            investmentAssets.inCart=true;
            investmentAssets.count=1;
            const price = investmentAssets.price;
            investmentAssets.total=price;

            return {
                ...state,
                investmentAssets:tempProducts,
                cart:[...state.cart,investmentAssets],
            }

        case "INCREMENT":
            let tempCart=[...state.cart];
            const idIncrement = action.payload;
            const selectedProduct = tempCart.find(item=>item.id ===idIncrement);
            const indexIncrement = tempCart.indexOf(selectedProduct);
            const product = tempCart[indexIncrement];
            product.count =product.count+1;
            product.total=product.count * product.price;
            product.total=parseFloat((product.total).toFixed(2));
            return {
                ...state,
                cart: [...tempCart]
            }

        case "DECREMENT":

            let tempCartDecrement=[...state.cart];
            const idDecrement =action.payload;
            const selectedProductDecrement = tempCartDecrement.find(item=>item.id ===idDecrement);
            const indexDecrement = tempCartDecrement.indexOf(selectedProductDecrement);
            const productDecrement = tempCartDecrement[indexDecrement];

            productDecrement.count=productDecrement.count-1;
            productDecrement.total=productDecrement.count * productDecrement.price;
            productDecrement.total=parseFloat((productDecrement.total).toFixed(2));

            return {
                ...state,
                cart: [...tempCartDecrement]
            }

        case "REMOVEITEM":

            let tempProductsRI=[...state.investmentAssets];
            let tempCartRI = [...state.cart];
            const idRI=action.payload;
            const AssetRI=state.investmentAssets.find(item=>item.id===idRI);
            tempCartRI=tempCartRI.filter(item=>item.id!==idRI);
            const indexRI = tempProductsRI.indexOf(AssetRI);
            let removedProductRI= tempProductsRI[indexRI];
            removedProductRI.inCart=false;
            removedProductRI.count=0;
            removedProductRI.total=0;
            return {
                ...state,
                cart:[...tempCartRI],
                investmentAssets:[...tempProductsRI],
            }

        case "CLEARCART":
            let reset= investmentProducts;
            return {
                ...state,
                cart:[],
                investmentAssets:[...reset]
            }
        case "ADDTOTALS":
            let subTotal=0;
            state.cart.map(item => (subTotal+=item.total));
            subTotal=parseFloat(subTotal.toFixed(2))
            const tempSFee=subTotal*0.02;
            const Fee=parseFloat(tempSFee.toFixed(2));
            const temptotal=subTotal+Fee;
            const total=parseFloat(temptotal.toFixed(2));
            return {
                ...state,
                cartSubTotal:subTotal,
                serviceFee:Fee,
                cartTotal:total,
            }
        case "ALLOCATEASSETS":
              const model = stockInfo(action.payload.stockAmount);
            console.log(action.payload.stockAmount);
            const results = solver.Solve(model);

            var tempCart=[];
            for (var key in results) {
                if(key=="result"){
                    var investmentAmount=results[key];
                }
                else if(key == "feasible" || key == "bounded") {
                    console.log(key);
                }
                else {
                    for (var i = 0;i <investmentProducts.length; i++){
                        if(investmentProducts[i].symbol==key){
                            var temp = {
                                id:investmentProducts[i].id,
                                name: "Guinness Ghana Breweries Limited",
                                symbol: investmentProducts[i].symbol,
                                price: investmentProducts[i].price,
                                quantity:results[key],
                                expectedValue:results[key] *investmentProducts[i].price,
                            }
                            tempCart.push(temp);
                        }
                    }
                }
            }
            var tempcartSubTotalAuto= investmentAmount,
            var tempserviceFeeAuto=investmentAmount * 0.02,
            var tempcartTotalAuto= investmentAmount+ tempserviceFeeAuto,
            console.log(tempCart);
            return {
                ...state,
                cartAuto:tempCart

            }
        default:
            return state
    }
}
