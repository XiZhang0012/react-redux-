import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer,routerMiddleware } from 'react-router-redux';
import createFetchMiddleware from 'redux-composable-fetch';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer/index';
import { hashHistory } from 'react-router';
import perflogger from 'redux-perf-middleware';
import { createLogger } from 'redux-logger'
//  建 个   middleware 的  
// const FetchMiddleware = createFetchMiddleware();
const loggerMiddleware = createLogger()

const FetchMiddleware = createFetchMiddleware({
    afterFetch({ action, result }) {
      return result.json().then(data => {
        return Promise.resolve({
          action,
          result: data,
        });
      });
    },
  });
const finalCreateStore = compose( 
    applyMiddleware(
        ThunkMiddleware,
        FetchMiddleware,
        loggerMiddleware,
        perflogger,
        routerMiddleware(hashHistory)
    )
)(createStore);
const store = finalCreateStore(rootReducer);
export default store
