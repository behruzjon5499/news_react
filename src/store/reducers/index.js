import {combineReducers} from 'redux';
import requireContext from "require-context.macro";
import {importAll} from "../../utils";

const servicesReducers = importAll(requireContext("../../services", true, /\/reducers.js$/), "reducers.js");
const moduleReducers = importAll(requireContext("../../modules", true, /\/reducers.js$/), "reducers.js");
const reducers = importAll(requireContext(".", true, /^\.\/(?!index)\w+$/), ".js");


export default combineReducers({
    ...servicesReducers,
    ...moduleReducers,
    ...reducers
});