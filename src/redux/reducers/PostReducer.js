import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
    POST_UPDATE, GET_POSTS, SET_ACTIVE_POST
} from './../actions/Types';

import { base_url } from './../config';
import { Actions } from 'react-native-router-flux';
import { filterPost } from '../../Helper';

const INITIAL_STATE = {
    post: "",
    post_type: "",
    location: "",
    activePost: {},
    attachment: {},
    posts: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case POST_UPDATE:

            return { ...state, [action.payload.prop]: action.payload.value };

        case GET_POSTS:

            return { ...state, posts: action.payload };

        case SET_ACTIVE_POST:
            return { ...state, activePost: filterPost(action.payload, state.posts) }

        default:
            return state;
    }
};
