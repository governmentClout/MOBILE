import {
    GET_ERRORS, GET_MESSAGE
} from './../actions/Types';


const INITIAL_STATE = {
    message: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_MESSAGE:
            // action.payload == {prop: 'name', value: 'jane'}
            return { ...state, message: action.payload };

        default:
            return state;
    }
};