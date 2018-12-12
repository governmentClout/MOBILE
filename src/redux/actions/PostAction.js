import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import settings from './../config';
import { AsyncStorage } from "react-native";


import {
    POST_UPDATE, GET_ERRORS, SET_ACTIVE_POST,
    GET_MESSAGE, GET_POSTS
} from './Types';

import { startLoading, stopLoading } from './LoadingAction';

export const postUpdate = (text) => {

    return {
        type: POST_UPDATE,
        payload: text
    }
};

export const createPost = (uuid, data) => {
    return (dispatch) => {
        dispatch(startLoading());
        const { api_url } = settings;
        axios.post(api_url + 'posts', data)
            .then(res => {
                dispatch(stopLoading());
                Actions.pop();
                dispatch(getPosts());
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

                console.log(err.response.data);
            })
    }
};

export const likePost = (uuid) => {
    return (dispatch) => {

        const { api_url } = settings;
        axios.post(api_url + 'reactions/' + uuid, { post: uuid })
            .then(res => {

                dispatch(getPosts());
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

export const registerView = (uuid) => {
    return (dispatch) => {

        const { api_url } = settings;
        axios.post(api_url + 'views/' + uuid, { post: uuid })
            .then(res => {

                dispatch(getPosts());
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

export const registerShare = (uuid) => {
    return (dispatch) => {

        const { api_url } = settings;
        axios.post(api_url + 'shares/' + uuid, { post: uuid })
            .then(res => {

                dispatch(getPosts());
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

export const unlikePost = (uuid) => {
    return (dispatch) => {

        const { api_url } = settings;
        axios.delete(api_url + 'reactions/' + uuid)
            .then(res => {

                dispatch(getPosts());
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

export const getPosts = () => {
    return (dispatch) => {

        const { api_url } = settings;

        axios.get(api_url + 'posts')
            .then(res => {

                dispatch({
                    type: GET_POSTS,
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

                console.log(err);
            })
    }
}


export const setActivePost = (uuid) => {
    return (dispatch) => {
        dispatch({
            type: SET_ACTIVE_POST,
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
