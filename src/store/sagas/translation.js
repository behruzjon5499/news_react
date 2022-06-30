import { put, takeLatest } from 'redux-saga/effects';
import Actions from '../actions/translation';
import storage from '../../services/storage';

function* changeLang(action) {
	const { lang } = action.payload;
	try {
		storage.set('lang', lang);
		yield put({ type: Actions.CHANGE_LANG.SUCCESS, payload: { lang } });
	} catch (e) {
		yield put({ type: Actions.CHANGE_LANG.FAILURE, payload: { lang } });
	}
}

export default function* userSaga() {
	yield takeLatest(Actions.CHANGE_LANG.REQUEST, changeLang);
}
