import {
    GET_ALL_COUNTRIES, GET_ALL_STATES, GET_LGAS
} from './../actions/Types';

const INITIAL_STATE = {
    states: [],
    countries: [],
    lgas: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return { ...state, countries: action.payload };

        case GET_ALL_STATES:
            return { ...state, states: action.payload };

        case GET_LGAS:
            return { ...state, lgas: action.payload };
        default:
            return state;
    }
};