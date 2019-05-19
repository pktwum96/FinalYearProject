import {combineReducers} from 'redux';
import SidebarReducer from './reducerSidebar.js';
import VideoListReducer from './reducerVideoList.js';
import InvestmentAssetReducer from './reducerInvestmentAsset.js';

const allReducers= combineReducers ({
    Sidebar:SidebarReducer,
    VideoList:VideoListReducer,
    InvestmentAsset:InvestmentAssetReducer,
});

export default allReducers;
