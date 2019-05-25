const initialState = {
	userData: {
		email:"",
		password:"",
		riskProfile:"Enterprising",
		riskInfo:null,
		portfolios: {
			name:"",
			dateCreated:"",
			assets:[
			// {
	        // 	assetType: "stock",
			// 	name: "Trust Bank",
			// 	type: "Stock",
			// 	symbol: "TBL",
			// 	price: 0.83,
			// 	change: 2,
			// 	quantity: 12,
			// 	value: 24
			// },
			// {
			// 	name: "Sanbic",
			// 	type: "stock",
			// 	symbol: "STB",
			// 	price: 3.45,
			// 	change: 12,
			// 	quantity: 40,
			// 	value:46
			// },
			// {
			// 	name: "Computer",
			// 	type: "bond",
			// 	symbol: "Aces",
			// 	price: 4,
			// 	change: 2,
			// 	quantity: 34,
			// 	value:136
			// }
			],
			dateComplete:null,
			initialDeposit:null,
			currentValue:null,
			expectedValue:null,
			change:null,
			daysDone:null,
			totalDays:null,
		}
	}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case "SETUSERDATA":

			return {
				...state,
			}
		case "SETRISK":
			const profile = action.payload.profile;
			const info = action.payload.info;
			let tempUserData=state.userData;
			tempUserData.riskProfile=profile;
			tempUserData.riskInfo=info;

			return {
				...state,
				userData:tempUserData
			}

		default:
			return state;
	}
}
