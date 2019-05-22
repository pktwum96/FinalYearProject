const initialState = {
	userData: {
		email:"",
		password:"",
		riskProfile:"",
		riskInfo:"la la a",
		portfolios: {
			name:"",
			dateCreated:"",
			assets:[
			{
	        	assetType: "stock",
				name: "Trust Bank",
				type: "Stock",
				symbol: "TBL",
				price: 0.83,
				change: 2,
				quantity: 12,
				value: 24
			},
			{
				name: "Sanbic",
				type: "stock",
				symbol: "STB",
				price: 3.45,
				change: 12,
				quantity: 40,
				value:46
			},
			{
				name: "Computer",
				type: "bond",
				symbol: "Aces",
				price: 4,
				change: 2,
				quantity: 34,
				value:136
			}
			],
			dateComplete:"",
			initialDeposit:5000,
			currentValue:5650,
			expectedValue:7560,
			change:2,
			daysDone:2345,
			totalDays:3556,
		}
	}
};

export default function(state = initialState, action) {
	switch (action.type) {
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
