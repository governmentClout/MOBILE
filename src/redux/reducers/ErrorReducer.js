import {
    GET_ERRORS
} from './../actions/Types';

import { base_url } from './../config';

const INITIAL_STATE = {
    error: ""
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ERRORS:

            return { ...state, error: action.payload };

        default:
            return state;
    }
};