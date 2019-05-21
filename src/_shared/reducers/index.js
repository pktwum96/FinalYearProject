import {combineReducers} from 'redux';
import SidebarReducer from './reducerSidebar.js';
import VideoListReducer from './reducerVideoList.js';
import InvestmentAssetReducer from './reducerInvestmentAsset.js';
import getID from './reducerInvestmentAsset.js';

const allReducers= combineReducers ({
    sidebar:SidebarReducer,
    videoList:VideoListReducer,
    investmentAsset:InvestmentAssetReducer,
    getID:getID
});

export default allReducers;
