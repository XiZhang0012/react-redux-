import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import home from '../component/home/module/reducer';
import user from '../component/user/module/reducer';
import updataProduct from '../component/updataProduct/module/reducer';

export default combineReducers({   
    home,
    user,
    updataProduct,
    routing:routerReducer
})