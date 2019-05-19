import {combineReducers} from 'redux';
import SidebarReducer from './reducerSidebar.js';
import VideoListReducer from './reducerVideoList.js';
import InvestmentAssetReducer from './reducerInvestmentAsset.js';

const allReducers= combineReducers ({
    sidebar:SidebarReducer,
    videoList:VideoListReducer,
    investmentAsset:InvestmentAssetReducer,
});

export default allReducers;
