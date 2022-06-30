import requireContext from 'require-context.macro';
import {importAll} from "../../utils";

const moduleActions = importAll(requireContext('../../modules', true, /\actions.js$/), 'actions.js');
const servicesActions = importAll(requireContext('../../services', true, /\actions.js$/), 'actions.js');
const actions = importAll(requireContext('', false, /^\.\/(?!index)\w+$/), '.js');

export default {
    ...servicesActions,
    ...moduleActions,
    ...actions
};