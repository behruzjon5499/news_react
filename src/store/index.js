import {applyMiddleware, createStore} from 'redux'
import middlewares, { sagaMiddleware } from './middlewares';
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from './reducers'
import mySaga from './sagas'

export default function daconfigureStore(initialState = {}) {
    let store;
    store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
    sagaMiddleware.run(mySaga)
    return store;
}