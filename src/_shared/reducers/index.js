import {combineReducers} from 'redux';
import SidebarReducer from './reducerSidebar.js';
import VideoListReducer from './reducerVideoList.js';
import InvestmentAssetReducer from './reducerInvestmentAsset.js';
import UserDataReducer from './reducerUserData.js';
import LoggedInReducer from './reducerLoggedIn.js';

const allReducers= combineReducers ({
    sidebar:SidebarReducer,
    videoList:VideoListReducer,
    investmentAsset:InvestmentAssetReducer,
    user:UserDataReducer,
    userLoggedIn:LoggedInReducer
});

export default allReducers;
