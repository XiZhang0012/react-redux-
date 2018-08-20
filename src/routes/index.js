import React from 'react'
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import Frame from '../layouts/Frame';
import Home from '../component/home/Home'
import User from '../component/user/User'
import UpdataProduct from '../component/updataProduct/UpdataProduct'

const Routes = () => {
    return (
    <Router history={hashHistory}>
        <Route path="/" component={Frame}>
            <IndexRoute  component={Home} />
            <Route path="/user" component={User} />
            <Route path="/updataProduct" component={UpdataProduct} />
        </Route>
            
    </Router>
)}
export default Routes


 