import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
    COMMENT_UPDATE, GET_COMMENTS, COMMENT_CREATE_SUCCESS
} from './../actions/Types';

import { base_url } from './../config';
import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {
    comment: "",
    ref: "",
    comments: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case COMMENT_UPDATE:

            return { ...state, [action.payload.prop]: action.payload.value };

        case GET_COMMENTS:

            return { ...state, comments: action.payload };

        case COMMENT_CREATE_SUCCESS:
            return { ...state, comment: '' };

        default:
            return state;
    }
};
