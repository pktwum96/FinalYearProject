import {combineReducers} from 'redux';
import SidebarReducer from './reducerSidebar.js';
import VideoListReducer from './reducerVideoList.js';
import InvestmentAssetReducer from './reducerInvestmentAsset.js';
import UserDataReducer from './reducerUserData.js';

const allReducers= combineReducers ({
    sidebar:SidebarReducer,
    videoList:VideoListReducer,
    investmentAsset:InvestmentAssetReducer,
    user:UserDataReducer,
});

export default allReducers;
