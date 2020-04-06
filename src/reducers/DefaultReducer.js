import {
    DEFAULT_ACTION
} from '../actions/types';

const INITIAL_STATE = {
    is_default: 'false'
}

const defaultReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DEFAULT_ACTION:
            return { ...state, is_default: action.payload }
            break;
        default:
            return state
    }
};

export default defaultReducer;

