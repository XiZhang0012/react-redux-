import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/index';
import store from './store/store';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import './style/index.css';//加载CSS
import 'antd/dist/antd.css';
console.log("====store====>",store)
const history = syncHistoryWithStore(hashHistory, store);
ReactDOM.render(
    (
    <Provider store={store}>
        <Routes history={history}/>
    </Provider>), 
    document.getElementById('root')
);