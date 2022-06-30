import requireContext from 'require-context.macro';
import {all, fork} from 'redux-saga/effects';
import {importAll} from "../../utils";

let moduleSagas = importAll(requireContext('../../modules', true, /\/sagas.js$/), "sagas.js");
moduleSagas = Object.keys(moduleSagas).reduce((prev, curr) => [...prev, fork(moduleSagas[curr])], []);

let sagas = importAll(requireContext("./", true, /^\.\/(?!index)\w+$/), ".js");
sagas = Object.keys(sagas).reduce((prev, curr) => [...prev, fork(sagas[curr])], []);


let services = importAll(requireContext('../../services', true, /\/sagas.js$/), "sagas.js");
services = Object.keys(services).reduce((prev, curr) => [...prev, fork(services[curr])], []);

export default function* mySaga() {
    yield all([...services]);
    yield all([...moduleSagas]);
    yield all([...sagas]);
}