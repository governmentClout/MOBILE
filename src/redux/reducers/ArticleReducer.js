import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {
    ARTICLE_UPDATE, GET_ARTICLES, SET_ACTIVE_ARTICLE
} from './../actions/Types';

import { base_url } from './../config';
import { Actions } from 'react-native-router-flux';
import { filterPost } from '../../Helper';

const INITIAL_STATE = {
    article: "",
    article_title: "",
    article_type: "",
    location: "",
    activeArticle: {},
    attachment: {},
    articles: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ARTICLE_UPDATE:

            return { ...state, [action.payload.prop]: action.payload.value };

        case GET_ARTICLES:

            return { ...state, posts: action.payload };

        case SET_ACTIVE_ARTICLE:

            return { ...state, activePost: filterPost(action.payload, state.articles) }

        default:
            return state;
    }
};
