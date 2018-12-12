import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import settings from './../config';
import { AsyncStorage } from "react-native";


import {
    COMMENT_UPDATE, GET_ERRORS,
    GET_MESSAGE, GET_COMMENTS,
    COMMENT_CREATE_SUCCESS
} from './Types';

import { startLoading, stopLoading } from './LoadingAction';
import { getPosts } from './';

export const commentUpdate = (text) => {

    return {
        type: COMMENT_UPDATE,
        payload: text
    }
};

export const createComment = (uuid, data) => {
    return (dispatch) => {
        dispatch(startLoading());
        const { api_url } = settings;
        axios.post(api_url + 'comments', data)
            .then(res => {
                dispatch(stopLoading());
                commentCreateSuccess(dispatch);
                dispatch(getPosts());
                dispatch(getComments(uuid));

            })
            .catch(err => {
                dispatch(stopLoading());
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

export const getComments = (uuid) => {
    return (dispatch) => {
        dispatch({
            type: GET_COMMENTS,
            payload: {}
        });
        const { api_url } = settings;
        axios.get(api_url + 'comments/' + uuid)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: GET_COMMENTS,
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
};


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

const commentCreateSuccess = (dispatch) => {
    dispatch({
        type: COMMENT_CREATE_SUCCESS,
    });

};
