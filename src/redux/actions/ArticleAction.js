import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import settings from './../config';
import { AsyncStorage } from "react-native";


import {
    ARTICLE_UPDATE, GET_ERRORS, SET_ACTIVE_ARTICLE,
    GET_MESSAGE, GET_ARTICLES
} from './Types';

import { startLoading, stopLoading } from './LoadingAction';

export const articleUpdate = (text) => {

    return {
        type: ARTICLE_UPDATE,
        payload: text
    }
};

export const createArticle = (data) => {
    return (dispatch) => {
        clearErrors(dispatch);
        clearMessage(dispatch);

        dispatch(startLoading());
        const { api_url } = settings;
        axios.post(api_url + 'articles', data)
            .then(res => {
                Actions.pop();
                dispatch(stopLoading());
                dispatch(getArticles());
            })
            .catch(err => {
                dispatch(stopLoading());
                if (err.response.status == 404) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 405) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 401) {
                    dispatch({
                        type: GET_MESSAGE,
                        payload: err.response.data.message
                    });
                }

                console.log(err.response);
            })
    }
};

export const likeArticle = (uuid) => {
    return (dispatch) => {

        const { api_url } = settings;
        axios.post(api_url + 'reactions/' + uuid, { article: uuid })
            .then(res => {

                dispatch(getArticles());
            })
            .catch(err => {

                if (err.response.status == 404) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 401) {
                    dispatch({
                        type: GET_MESSAGE,
                        payload: err.response.data.message
                    });
                }

                console.log(err.response);
            })
    }
};

export const unlikeArticle = (uuid) => {
    return (dispatch) => {

        const { api_url } = settings;
        axios.delete(api_url + 'reactions/' + uuid)
            .then(res => {

                dispatch(getArticles());
            })
            .catch(err => {

                if (err.response.status == 404) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 401) {
                    dispatch({
                        type: GET_MESSAGE,
                        payload: err.response.data.message
                    });
                }

                console.log(err.response);
            })
    }
};

export const getArticles = () => {
    return (dispatch) => {

        const { api_url } = settings;
        axios.get(api_url + 'articles')
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: GET_ARTICLES,
                    payload: res.data
                });
            })
            .catch(err => {

                if (err.response.status == 404) {
                    dispatch({
                        type: GET_ERRORS,
                        payload: err.response.data.Error
                    });
                }

                if (err.response.status == 401) {
                    dispatch({
                        type: GET_MESSAGE,
                        payload: err.response.data.message
                    });
                }

                console.log(err.response);
            })
    }
}


export const setActiveArticle = (uuid) => {
    return (dispatch) => {
        dispatch({
            type: SET_ACTIVE_ARTICLE,
            payload: uuid
        });
    }
}


const clearErrors = (dispatch) => {
    dispatch({
        type: GET_ERRORS,
        payload: ""
    });
}

const clearMessage = (dispatch) => {
    dispatch({
        type: GET_MESSAGE,
        payload: ''
    });
}
