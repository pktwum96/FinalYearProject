const initialState = {
    investmentProducts:[{
        id:1,
        name: "Total Petroleum Ghana",
        symbol: "TOTAL",
        price: 4.61,
        company: "Total Petroleum Ghana",
        assetType:"stock",
        info: "Lorem Ipsum",
        inCart: false,
        count: 0,
        total:0,
    },
    {
        id:2,
        name:"Societe Generale Ghana",
        symbol: "SOGEGH",
        price: 0.98,
        company: "Societe Generale Ghana",
        assetType:"stock",
        info: "Lorem Ipsum",
        inCart: false,
        count: 0,
        total:0,
    },
    {
        id:3,
        name: "Trust Bank",
        symbol: "TBL",
        price: 0.83,
        company: "Trust Bank",
        assetType: "stock",
        info: "Lorem Ipsum",
        inCart: false,
        count: 0,
        total:0,
    },
    {
        id:4,
        name: "Ghana Government Bond",
        symbol: "GHB",
        price: 50.02,
        company: "Ghana Government",
        assetType:"bond",
        info: "Lorem Ipsum",
        inCart: false,
        count: 0,
        total:0,
    },
    {
        id:5,
        name: "Coca Cola Private Bonds",
        symbol: "CCBL",
        price: 34.54,
        company: "Coca Cola Ghana",
        assetType:"bond",
        info: "Lorem Ipsum",
        inCart: false,
        count: 0,
        total:0,
    }],
    investmentAssets: [{
        id:1,
        name: "Total Petroleum Ghana",
        symbol: "TOTAL",
        price: 4.61,
        company: "Total Petroleum Ghana",
        assetType:"stock",
        info: "Lorem Ipsum",
        inCart: false,
        count: 0,
        total:0,
    },
    {
        id:2,
        name:"Societe Generale Ghana",
        symbol: "SOGEGH",
        price: 0.98,
        company: "Societe Generale Ghana",
        assetType:"stock",
        info: "Lorem Ipsum",
        inCart: false,
        count: 0,
        total:0,
    },
    {
        id:3,
        name: "Trust Bank",
        symbol: "TBL",
        price: 0.83,
        company: "Trust Bank",
        assetType: "stock",
        info: "Lorem Ipsum",
        inCart: false,
        count: 0,
        total:0,
    },
    {
        id:4,
        name: "Ghana Government Bond",
        symbol: "GHB",
        price: 50.02,
        company: "Ghana Government",
        assetType:"bond",
        info: "Lorem Ipsum",
        inCart: false,
        count: 0,
        total:0,
    },
    {
        id:5,
        name: "Coca Cola Private Bonds",
        symbol: "CCBL",
        price: 34.54,
        company: "Coca Cola Ghana",
        assetType:"bond",
        info: "Lorem Ipsum",
        inCart: false,
        count: 0,
        total:0,
    }],
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
            const reset= [...state.investmentProducts];
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

        default:
            return state
    }
}
