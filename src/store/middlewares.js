import createSagaMiddleware from 'redux-saga';
import ReduxPromise from "redux-promise";

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [
	sagaMiddleware,
	ReduxPromise
];

export default middlewares;
