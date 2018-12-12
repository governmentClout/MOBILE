import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
    POLL_UPDATE, GET_POLLS, SET_ACTIVE_POLL,
    FILTER_PARTICIPATED_POLLS, FILTER_POLLS
} from './../actions/Types';

import { base_url } from './../config';
import { Actions } from 'react-native-router-flux';
import { filterPoll, filterParticipatedPolls } from '../../Helper';

const INITIAL_STATE = {
    opinion: "",
    sector: "",
    expireAt: "",
    responseLimit: 1000,
    activePoll: {},
    polls: [],
    filter: 'All',
    filteredPolls: [],
    participatedPolls: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case POLL_UPDATE:

            return { ...state, [action.payload.prop]: action.payload.value };

        case GET_POLLS:

            return { ...state, polls: action.payload, filteredPolls: action.payload };

        case SET_ACTIVE_POLL:
            return { ...state, activePoll: filterPost(action.payload, state.polls) }

        case FILTER_PARTICIPATED_POLLS:
            return { ...state, participatedPolls: filterParticipatedPolls(action.payload, state.polls) }

        case FILTER_POLLS:
            return { ...state, filteredPolls: filterPoll(action.payload, state.polls) }

        default:
            return state;
    }
};
