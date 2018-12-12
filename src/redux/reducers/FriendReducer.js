import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
    GET_MY_FRIENDS, GET_PENDING_FRIEND_REQUESTS,
    GET_BLOCKED_FRIEND_REQUESTS, GET_USERS, SEARCH_USERS
} from './../actions/Types';

import { base_url } from './../config';
import { Actions } from 'react-native-router-flux';
import { searchFriends } from '../../Helper';

const INITIAL_STATE = {
    friends: [],
    blocked: [],
    pending: [],
    users: [],
    main: [],
    results: [],
    query: ''

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_MY_FRIENDS:

            return { ...state, friends: action.payload };

        case GET_PENDING_FRIEND_REQUESTS:

            return { ...state, pending: action.payload };

        case GET_BLOCKED_FRIEND_REQUESTS:

            return { ...state, blocked: action.payload };

        case GET_USERS:

            return { ...state, users: action.payload, results: action.payload };

        case SEARCH_USERS:

            return { ...state, results: searchFriends(action.payload, state.users) };

        default:
            return state;
    }
};
