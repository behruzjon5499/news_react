import Actions from '../actions'
import storage from "../../services/storage";

export default (state = {}, action) => {
    switch (action.type) {
        case Actions.translation.CHANGE_LANG.SUCCESS:
            return {
                ...state, ...{"lang": action.payload.lang}, ...{'isFetched': true}
            }
        default:
            return state
    }
}